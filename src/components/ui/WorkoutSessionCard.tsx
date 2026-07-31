import { Dumbbell, PlayCircle, StretchHorizontal, Video } from 'lucide-react'
import type { WorkoutDay } from '../../types/fitness'
import { Badge } from './Badge'
import { Card } from './Card'

const exerciseYoutubeQueries: Record<string, string> = {
  'incline-db-press-a': 'incline dumbbell press proper form',
  'pull-ups-pronated': 'pronated pull up proper form',
  'flat-db-press': 'flat dumbbell bench press proper form',
  'one-arm-row': 'one arm dumbbell row proper form',
  'lateral-raises-a': 'dumbbell lateral raise proper form',
  'hammer-curl': 'dumbbell hammer curl proper form',
  'overhead-triceps': 'overhead dumbbell triceps extension proper form',
  'goblet-squat': 'goblet squat proper form',
  'db-romanian-deadlift-a': 'dumbbell romanian deadlift proper form',
  'bulgarian-split-squat-a': 'bulgarian split squat proper form',
  'calf-raise-a': 'standing calf raise proper form',
  'controlled-crunch': 'controlled crunch proper form',
  'leg-raises': 'leg raise proper form',
  'chin-ups': 'chin up proper form',
  'db-shoulder-press': 'dumbbell shoulder press proper form',
  'chest-supported-row': 'chest supported dumbbell row proper form',
  'incline-db-press-b': 'incline dumbbell press proper form',
  'lateral-raises-b': 'dumbbell lateral raise proper form',
  'rear-delt-fly': 'rear delt fly proper form',
  'incline-curl': 'incline dumbbell curl proper form',
  'bench-dips': 'bench dips proper form',
  'db-romanian-deadlift-b': 'dumbbell romanian deadlift proper form',
  'walking-lunges': 'walking lunges proper form',
  'db-hip-thrust': 'dumbbell hip thrust proper form',
  'bulgarian-split-squat-b': 'bulgarian split squat proper form',
  'calf-raise-b': 'standing calf raise proper form',
  plank: 'plank proper form',
}

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
      <div className="session-card__actions" aria-label={`Videos para ${workout.name}`}>
        <a href={workout.youtubeLinks.warmupUrl} target="_blank" rel="noreferrer">
          <PlayCircle size={17} aria-hidden="true" />
          <span>Calentamiento</span>
        </a>
        <a href={workout.youtubeLinks.stretchingUrl} target="_blank" rel="noreferrer">
          <StretchHorizontal size={17} aria-hidden="true" />
          <span>Estiramientos</span>
        </a>
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
              <a className="exercise-video-link" href={getYoutubeSearchUrl(exerciseYoutubeQueries[exercise.id])} target="_blank" rel="noreferrer">
                <Video size={17} aria-hidden="true" />
                <span>Ver tecnica en YouTube</span>
              </a>
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

function getYoutubeSearchUrl(query: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
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
