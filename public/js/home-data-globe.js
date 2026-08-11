/**
 * HomeDataGlobe runtime — true 3D yaw (Capo v1 motion).
 * Labels ride nodes, hide behind the globe, re-roll only on re-emerge.
 */
(function () {
  var LABEL_POOL = [
    "ERP",
    "WMS",
    "MES",
    "CRM",
    "EAM",
    "PLM",
    "API",
    "SQL",
    "MDM",
    "Data",
    "Integration",
    "Cutover",
    "Adoption",
    "Stakeholders",
    "Vendors",
    "SI",
    "Governance",
    "Workflows",
    "Users",
    "Agents",
    "Agentics",
    "Controls",
    "Training",
    "Ownership",
    "Floor",
    "Board",
    "Security",
    "Observability",
    "Transfer",
  ];
  var CX = 210;
  var CY = 210;
  var RADIUS = 148;
  var LABEL_Z = -0.12;
  var SPEED = 0.28;
  var SPEED_REDUCED = 0.12;

  function project(theta, phi, spin) {
    var x0 = Math.sin(phi) * Math.cos(theta);
    var y0 = Math.cos(phi);
    var z0 = Math.sin(phi) * Math.sin(theta);
    var cos = Math.cos(spin);
    var sin = Math.sin(spin);
    return {
      x: x0 * cos + z0 * sin,
      y: y0,
      z: -x0 * sin + z0 * cos,
    };
  }

  function pickFresh(labels, avoid, rng) {
    var used = {};
    for (var i = 0; i < labels.length; i++) {
      if (i !== avoid) used[labels[i]] = true;
    }
    var free = [];
    for (var j = 0; j < LABEL_POOL.length; j++) {
      if (!used[j]) free.push(j);
    }
    var pool = free.length ? free : LABEL_POOL.map(function (_, i) {
      return i;
    });
    return pool[Math.floor(rng() * pool.length) % pool.length];
  }

  function arm(root) {
    if (!root || root.getAttribute("data-hg-live") === "1") return;
    var svg = root.querySelector("svg");
    if (!svg) return;
    root.setAttribute("data-hg-live", "1");

    var nodes = [];
    var nodeEls = svg.querySelectorAll("[data-hg-node]");
    for (var i = 0; i < nodeEls.length; i++) {
      var el = nodeEls[i];
      var id = el.getAttribute("data-hg-node");
      nodes.push({
        id: id,
        theta: parseFloat(el.getAttribute("data-hg-theta") || "0"),
        phi: parseFloat(el.getAttribute("data-hg-phi") || "0"),
        labelIndex: parseInt(el.getAttribute("data-hg-base") || "0", 10) || 0,
        wasFront: el.getAttribute("data-hg-front") === "1",
        edge: svg.querySelector('[data-hg-edge="' + id + '"]'),
        group: el,
        halo: el.querySelector("[data-hg-halo]"),
        dot: el.querySelector("[data-hg-dot]"),
        label: el.querySelector("[data-hg-label]"),
      });
    }
    if (!nodes.length) return;

    var equator = svg.querySelector("[data-hg-equator]");
    var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    var speed = mq.matches ? SPEED_REDUCED : SPEED;
    mq.addEventListener("change", function () {
      speed = mq.matches ? SPEED_REDUCED : SPEED;
    });

    var spin = 0;
    var last = performance.now();
    var labelIndexes = nodes.map(function (n) {
      return n.labelIndex;
    });

    function paint(now) {
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      spin += dt * speed;

      if (equator) {
        equator.setAttribute(
          "transform",
          "rotate(" + (((spin * 40) % 360) + 360) % 360 + " " + CX + " " + CY + ")",
        );
      }

      var projected = [];
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        var p = project(n.theta, n.phi, spin);
        var front = p.z > LABEL_Z;
        if (front && !n.wasFront) {
          labelIndexes[i] = pickFresh(labelIndexes, i, Math.random);
        }
        n.wasFront = front;
        projected.push({
          n: n,
          p: p,
          front: front,
          depth: (p.z + 1) / 2,
          sx: CX + p.x * RADIUS,
          sy: CY + p.y * RADIUS * 0.92,
          label: LABEL_POOL[labelIndexes[i] % LABEL_POOL.length],
          i: i,
        });
      }

      // Paint back-to-front via opacity; keep DOM order stable.
      for (var k = 0; k < projected.length; k++) {
        var item = projected[k];
        var node = item.n;
        var r = 3.2 + item.depth * 3.2;
        if (node.edge) {
          node.edge.setAttribute("x2", String(item.sx));
          node.edge.setAttribute("y2", String(item.sy));
          node.edge.setAttribute(
            "stroke",
            item.p.z > 0
              ? "rgba(20, 24, 32, 0.85)"
              : "rgba(20, 24, 32, 0.35)",
          );
          node.edge.setAttribute(
            "stroke-width",
            item.p.z > 0.2 ? "1.4" : "0.8",
          );
        }
        if (node.halo) {
          node.halo.setAttribute("cx", String(item.sx));
          node.halo.setAttribute("cy", String(item.sy));
          node.halo.setAttribute("r", String(r + 2.5));
        }
        if (node.dot) {
          node.dot.setAttribute("cx", String(item.sx));
          node.dot.setAttribute("cy", String(item.sy));
          node.dot.setAttribute("r", String(r));
          node.dot.setAttribute(
            "stroke",
            item.p.z > 0.1 ? "#FACC15" : "rgba(250,204,21,0.35)",
          );
        }
        if (node.group) {
          node.group.setAttribute(
            "opacity",
            String(0.35 + item.depth * 0.65),
          );
        }
        if (node.label) {
          if (item.front) {
            node.label.setAttribute("x", String(item.sx));
            node.label.setAttribute("y", String(item.sy - r - 6));
            node.label.textContent = item.label;
            node.label.setAttribute("opacity", "1");
            node.label.style.display = "";
          } else {
            node.label.setAttribute("opacity", "0");
            node.label.style.display = "none";
          }
        }
      }

      requestAnimationFrame(paint);
    }

    requestAnimationFrame(paint);
  }

  function scan() {
    var roots = document.querySelectorAll("[data-hg-root]");
    for (var i = 0; i < roots.length; i++) arm(roots[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scan);
  } else {
    scan();
  }
  var obs = new MutationObserver(scan);
  obs.observe(document.documentElement, { childList: true, subtree: true });
  window.setTimeout(function () {
    obs.disconnect();
  }, 20000);
})();
