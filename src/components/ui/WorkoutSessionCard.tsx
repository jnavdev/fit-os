import { useState } from 'react'
import { Dumbbell, Image, PlayCircle, StretchHorizontal, Video, X } from 'lucide-react'
import type { WorkoutDay } from '../../types/fitness'
import { Badge } from './Badge'
import { Card } from './Card'

const exerciseYoutubeQueries: Record<string, string> = {
  'incline-db-press-a': 'incline dumbbell press proper form',
  'inverted-row-pronated': 'pronated inverted row proper form',
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
  'inverted-row-supinated': 'supinated inverted row proper form',
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

const exerciseGifPaths: Record<string, string> = {
  'incline-db-press-a': '/gifs/exercises/incline-db-press.gif',
  'inverted-row-pronated': '/gifs/exercises/inverted-row.gif',
  'flat-db-press': '/gifs/exercises/flat-db-press.gif',
  'one-arm-row': '/gifs/exercises/one-arm-row.gif',
  'lateral-raises-a': '/gifs/exercises/lateral-raise.gif',
  'hammer-curl': '/gifs/exercises/hammer-curl.gif',
  'overhead-triceps': '/gifs/exercises/overhead-triceps.gif',
  'goblet-squat': '/gifs/exercises/goblet-squat.gif',
  'db-romanian-deadlift-a': '/gifs/exercises/db-romanian-deadlift.gif',
  'bulgarian-split-squat-a': '/gifs/exercises/bulgarian-split-squat.gif',
  'calf-raise-a': '/gifs/exercises/calf-raise.gif',
  'controlled-crunch': '/gifs/exercises/crunch.gif',
  'leg-raises': '/gifs/exercises/leg-raise.gif',
  'inverted-row-supinated': '/gifs/exercises/inverted-row.gif',
  'db-shoulder-press': '/gifs/exercises/db-shoulder-press.gif',
  'chest-supported-row': '/gifs/exercises/chest-supported-row.gif',
  'incline-db-press-b': '/gifs/exercises/incline-db-press.gif',
  'lateral-raises-b': '/gifs/exercises/lateral-raise.gif',
  'rear-delt-fly': '/gifs/exercises/rear-delt-fly.gif',
  'incline-curl': '/gifs/exercises/incline-curl.gif',
  'bench-dips': '/gifs/exercises/bench-dips.gif',
  'db-romanian-deadlift-b': '/gifs/exercises/db-romanian-deadlift.gif',
  'walking-lunges': '/gifs/exercises/walking-lunges.gif',
  'db-hip-thrust': '/gifs/exercises/db-hip-thrust.gif',
  'bulgarian-split-squat-b': '/gifs/exercises/bulgarian-split-squat.gif',
  'calf-raise-b': '/gifs/exercises/calf-raise.gif',
  'plank': '/gifs/exercises/plank.gif',
}

interface WorkoutSessionCardProps {
  workout: WorkoutDay
}

export function WorkoutSessionCard({ workout }: WorkoutSessionCardProps) {
  const [gifExercise, setGifExercise] = useState<{ name: string; path: string } | null>(null)

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
              <button
                className="exercise-video-link"
                type="button"
                onClick={() => setGifExercise({ name: exercise.name, path: exerciseGifPaths[exercise.id] })}
              >
                <Image size={17} aria-hidden="true" />
                <span>Ver GIF del ejercicio</span>
              </button>
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
            </div>
          </details>
        ))}
      </div>
      {gifExercise && (
        <div className="exercise-gif-modal" role="presentation" onClick={() => setGifExercise(null)}>
          <div
            className="exercise-gif-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exercise-gif-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="exercise-gif-modal__header">
              <h4 id="exercise-gif-modal-title">{gifExercise.name}</h4>
              <button type="button" aria-label="Cerrar GIF" onClick={() => setGifExercise(null)}>
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <img src={gifExercise.path} alt={`Demostracion de ${gifExercise.name}`} />
          </div>
        </div>
      )}
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
