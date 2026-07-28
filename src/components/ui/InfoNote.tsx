import { Info } from 'lucide-react'

interface InfoNoteProps {
  children: string
}

export function InfoNote({ children }: InfoNoteProps) {
  return (
    <aside className="info-note">
      <Info size={18} aria-hidden="true" />
      <p>{children}</p>
    </aside>
  )
}
