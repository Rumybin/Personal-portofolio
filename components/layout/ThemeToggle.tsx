export default function ThemeToggle() {
  return (
    <button
      type="button"
      className="rounded-md border border-zinc-300 px-2 py-1 text-xs text-zinc-600 transition-colors hover:bg-zinc-100"
      aria-label="Toggle dark mode"
    >
      {/* TODO: implement theme toggle logic — likely needs a provider or localStorage */}
      Theme
    </button>
  )
}
