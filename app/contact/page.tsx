export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-24">
      <h1 className="font-display font-bold text-d2-forest text-[36px] md:text-[48px]">
        Contact
      </h1>
      <p className="mt-6 text-[17px] text-d2-ink">
        Email:{" "}
        <a
          href="mailto:robert@idigdata.com"
          className="text-d2-forest hover:underline"
        >
          robert@idigdata.com
        </a>
      </p>
    </div>
  );
}
