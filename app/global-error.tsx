"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, 'Times New Roman', serif",
          background: "#F7F5EE",
          color: "#1A1A1A",
        }}
      >
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "6rem 1.5rem" }}>
          <p style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            idigdata site
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 500, marginTop: 12 }}>
            The site hit a hard failure.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#6B6860", marginTop: 16 }}>
            Reload, or return later. If this keeps happening, email robert@idigdata.com.
          </p>
          {error.digest ? (
            <p style={{ fontFamily: "monospace", fontSize: 12, marginTop: 12 }}>
              Ref {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: 28,
              height: 44,
              padding: "0 20px",
              background: "#142840",
              color: "#F7F5EE",
              border: 0,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
