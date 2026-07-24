interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}