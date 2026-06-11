interface SkillBadgeProps {
  name: string
}

export default function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block rounded-full border border-zinc-300 px-3 py-1 text-sm text-zinc-700">
      {name}
    </span>
  )
}
