import { CheckCircle2, TrendingUp } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { MealTimingSchedule } from '../components/ui/MealTimingSchedule'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionHeader } from '../components/ui/SectionHeader'
import { WeeklyTrainingSchedule } from '../components/ui/WeeklyTrainingSchedule'
import { WorkoutSessionCard } from '../components/ui/WorkoutSessionCard'
import { usePhase } from '../context/phase'
import { baseRoutine, weeklyTrainingSchedule } from '../data/routine'
import { fixedMealSchedule } from '../data/nutrition'

const progressionGuide = [
  'Mantén el rango de repeticiones indicado antes de subir peso.',
  'Aumenta la carga solo cuando completes el máximo del rango con buena tecnica.',
  'Conserva una ejecucion estable aunque cambie la fase activa.',
]

export function RoutinePage() {
  const { selectedPhase } = usePhase()

  return (
    <div className="page-stack">
      <PageHeader
        accent={selectedPhase.accent}
        description="Agenda semanal fija para organizar fuerza, caminatas, comidas y recuperación."
        eyebrow={`${selectedPhase.shortName} · ${selectedPhase.duration}`}
        title="Rutina de entrenamiento"
      />

      <section>
        <SectionHeader title="Tu agenda semanal" description="Comidas a la misma hora todos los días; fuerza de 18:30 a 19:45 de lunes, martes, jueves y viernes." />
        <Card className="fixed-schedule-card">
          <div>
            <h2>Horario de comidas</h2>
            <MealTimingSchedule items={fixedMealSchedule} />
          </div>
          <div className="fixed-schedule-card__training">
            <h2>Entrenamiento y actividad</h2>
            <WeeklyTrainingSchedule items={weeklyTrainingSchedule} />
          </div>
          <p className="fixed-schedule-card__note">Miércoles: caminata suave de 30–45 min. Sábado: caminata larga de 60–90 min. El bloque de las 17:00 es colación normal en días sin fuerza.</p>
        </Card>
      </section>

      <Card className="training-adjustments-card">
        <div className="training-adjustments-card__header">
          <div>
            <Badge accent={selectedPhase.accent}>Como entrenar en esta fase</Badge>
            <h2>{selectedPhase.title}</h2>
            <p>{selectedPhase.trainingGoal}</p>
          </div>
          <TrendingUp size={24} aria-hidden="true" />
        </div>
        <div className="training-adjustments-list">
          {selectedPhase.trainingAdjustments.map((adjustment) => (
            <article key={adjustment}>
              <CheckCircle2 size={17} aria-hidden="true" />
              <p>{adjustment}</p>
            </article>
          ))}
        </div>
      </Card>

      <section>
        <SectionHeader title="Sesiones de entrenamiento" description="Abre cada ejercicio para ver tecnica y errores comunes." />
        <div className="session-grid">
          {baseRoutine.map((workout) => (
            <WorkoutSessionCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>

      <Card className="progression-card">
        <TrendingUp size={20} aria-hidden="true" />
        <div>
          <SectionHeader title="Guia de progresion" description="La rutina no cambia; progresa con pequenos incrementos sostenibles." />
          <ul className="feature-list">
            {progressionGuide.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>

    </div>
  )
}
