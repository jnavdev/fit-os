import type { WeeklyScheduleItem } from '../../types/fitness'

interface WeeklyCalendarProps {
  items: WeeklyScheduleItem[]
}

const labels: Record<WeeklyScheduleItem['type'], string> = {
  upper: 'Tren superior',
  lower: 'Tren inferior',
  cardio: 'Cardio',
  rest: 'Descanso',
}

export function WeeklyCalendar({ items }: WeeklyCalendarProps) {
  return (
    <div className="week-grid" aria-label="Calendario semanal">
      {items.map((item) => (
        <article className={`week-card week-card--${item.type}`} key={item.day}>
          <span>{item.day}</span>
          <strong>{item.label}</strong>
          <small>{labels[item.type]}</small>
        </article>
      ))}
    </div>
  )
}
