import type { ReactNode } from 'react'
import type { Accent } from '../../types/fitness'
import { Badge } from './Badge'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description: string
  accent: Accent
  action?: ReactNode
}

export function PageHeader({ eyebrow, title, description, accent, action }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div>
        <Badge accent={accent}>{eyebrow}</Badge>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action ? <div className="page-header__action">{action}</div> : null}
    </header>
  )
}
