export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div
      className={
        centered
          ? "mx-auto mb-12 max-w-2xl text-center"
          : "mb-12 max-w-2xl"
      }
    >
      {eyebrow && (
        <div className="eyebrow mb-3">
          {eyebrow}
        </div>
      )}

      <h2 className="heading-section mb-5">
        {title}
      </h2>

      {description && (
        <p className="body-copy text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
}