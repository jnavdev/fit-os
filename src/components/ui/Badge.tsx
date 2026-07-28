import type { ReactNode } from 'react'
import type { Accent } from '../../types/fitness'

interface BadgeProps {
  children: ReactNode
  accent?: Accent
  tone?: 'solid' | 'muted'
}

export function Badge({ children, accent = 'orange', tone = 'muted' }: BadgeProps) {
  return <span className={`badge badge-${accent} badge-${tone}`}>{children}</span>
}
