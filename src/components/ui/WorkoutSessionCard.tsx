import { Dumbbell } from 'lucide-react'
import type { WorkoutDay } from '../../types/fitness'
import { Badge } from './Badge'
import { Card } from './Card'

interface WorkoutSessionCardProps {
  workout: WorkoutDay
}

export function WorkoutSessionCard({ workout }: WorkoutSessionCardProps) {
  return (
    <Card className="session-card">
      <header className="session-card__header">
        <div>
          <span>{workout.weekday}</span>
          <h3>{workout.name}</h3>
        </div>
        <Dumbbell size={20} aria-hidden="true" />
      </header>
      <div className="chip-row">
        {workout.focus.map((focus) => (
          <Badge key={focus}>{focus}</Badge>
        ))}
      </div>
      <div className="exercise-list">
        {workout.exercises.map((exercise) => (
          <details className="exercise" key={exercise.id}>
            <summary>
              <span>{exercise.name}</span>
              <small>
                {exercise.sets} series · {exercise.reps}
              </small>
            </summary>
            <div className="exercise__body">
              <dl className="exercise-stats">
                <div>
                  <dt>Series</dt>
                  <dd>{exercise.sets}</dd>
                </div>
                <div>
                  <dt>Reps</dt>
                  <dd>{exercise.reps}</dd>
                </div>
                <div>
                  <dt>Descanso</dt>
                  <dd>{exercise.rest}</dd>
                </div>
              </dl>
              <ListBlock title="Musculos" items={exercise.muscles} />
              <ListBlock title="Tecnica" items={exercise.technique} ordered />
              <ListBlock title="Errores comunes" items={exercise.mistakes} />
              <ListBlock title="Alternativas domesticas" items={exercise.alternatives} />
            </div>
          </details>
        ))}
      </div>
    </Card>
  )
}

function ListBlock({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  const Tag = ordered ? 'ol' : 'ul'

  return (
    <div className="list-block">
      <h4>{title}</h4>
      <Tag>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Tag>
    </div>
  )
}
