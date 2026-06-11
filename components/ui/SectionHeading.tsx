interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-zinc-600">{subtitle}</p>
      )}
    </div>
  )
}
