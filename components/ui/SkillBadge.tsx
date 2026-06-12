interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block rounded-full border border-accent px-3 py-1 text-sm text-accent">
      {name}
    </span>
  )
}
