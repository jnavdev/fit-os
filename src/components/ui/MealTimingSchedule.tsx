import { Clock3, Utensils } from 'lucide-react'
import type { MealTiming } from '../../types/fitness'

interface MealTimingScheduleProps {
  items: MealTiming[]
}

export function MealTimingSchedule({ items }: MealTimingScheduleProps) {
  return (
    <div className="meal-timing-schedule" aria-label="Horario fijo de comidas">
      {items.map((item) => (
        <article key={item.time}>
          <time dateTime={item.time}><Clock3 size={15} aria-hidden="true" />{item.time}</time>
          <div>
            <strong><Utensils size={15} aria-hidden="true" />{item.name}</strong>
            <span>{item.description}</span>
          </div>
        </article>
      ))}
    </div>
  )
}
