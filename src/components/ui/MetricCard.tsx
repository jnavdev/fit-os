import type { LucideIcon } from 'lucide-react'
import { Card } from './Card'

interface MetricCardProps {
  label: string
  value: string
  detail: string
  icon: LucideIcon
}

export function MetricCard({ label, value, detail, icon: Icon }: MetricCardProps) {
  return (
    <Card className="metric-card">
      <div className="metric-card__icon">
        <Icon size={18} aria-hidden="true" />
      </div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </Card>
  )
}
