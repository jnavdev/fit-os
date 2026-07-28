import { Footprints, Moon, MoveUpRight } from 'lucide-react'
import type { WeeklyScheduleItem } from '../../types/fitness'

interface WeeklyTrainingScheduleProps {
  items: WeeklyScheduleItem[]
  compact?: boolean
}

const labels: Record<WeeklyScheduleItem['type'], string> = {
  upper: 'Tren superior',
  lower: 'Tren inferior',
  cardio: 'Cardio',
  rest: 'Descanso',
}

const icons: Record<WeeklyScheduleItem['type'], typeof MoveUpRight> = {
  upper: MoveUpRight,
  lower: MoveUpRight,
  cardio: Footprints,
  rest: Moon,
}

export function WeeklyTrainingSchedule({ items, compact = false }: WeeklyTrainingScheduleProps) {
  return (
    <div className={`training-week ${compact ? 'training-week--compact' : ''}`} aria-label="Calendario semanal de entrenamiento">
      {items.map((item) => {
        const Icon = icons[item.type]

        return (
          <article className={`training-week__day training-week__day--${item.type}`} key={item.day}>
            <div className="training-week__topline">
              <span>{item.day}</span>
              <Icon size={16} aria-hidden="true" />
            </div>
            <strong>{item.label}</strong>
            <small>{labels[item.type]}</small>
          </article>
        )
      })}
    </div>
  )
}
