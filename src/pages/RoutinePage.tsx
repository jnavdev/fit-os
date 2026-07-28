import { CalendarDays, CheckCircle2, Clock3, Dumbbell, Home, TrendingUp } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { InfoNote } from '../components/ui/InfoNote'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionHeader } from '../components/ui/SectionHeader'
import { WeeklyTrainingSchedule } from '../components/ui/WeeklyTrainingSchedule'
import { WorkoutSessionCard } from '../components/ui/WorkoutSessionCard'
import { usePhase } from '../context/phase'
import { baseRoutine, weeklyTrainingSchedule } from '../data/routine'

const routineSummaryItems = [
  { label: 'Frecuencia', value: '4 dias', icon: CalendarDays },
  { label: 'Estructura', value: 'Upper / Lower', icon: Dumbbell },
  { label: 'Duracion estimada', value: '60-80 min', icon: Clock3 },
  { label: 'Equipamiento', value: 'Mancuernas, banco y barra', icon: Home },
]

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
        description="Rutina Upper / Lower de cuatro días, diseñada para entrenar en casa."
        eyebrow={`${selectedPhase.shortName} · ${selectedPhase.duration}`}
        title="Rutina de entrenamiento"
      />

      <p className="routine-intro">
        La seleccion de ejercicios se mantiene estable para facilitar la progresion. La fase modifica el volumen, el esfuerzo y las prioridades de recuperacion.
      </p>

      <section>
        <SectionHeader title="Resumen de la rutina" description="Base comun para las tres fases." />
        <div className="routine-summary-grid">
          {routineSummaryItems.map(({ label, value, icon: Icon }) => (
            <Card className="routine-summary-card" key={label}>
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
              <strong>{value}</strong>
            </Card>
          ))}
        </div>
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
        <SectionHeader title="Calendario semanal" description="La distribucion de fuerza se mantiene igual en todas las fases." />
        <WeeklyTrainingSchedule items={weeklyTrainingSchedule} />
      </section>

      <section>
        <SectionHeader title="Sesiones de entrenamiento" description="Abre cada ejercicio para ver tecnica, errores comunes y alternativas domesticas." />
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

      <InfoNote>
        Prioriza dormir bien, sostener los pasos diarios y ajustar el volumen si la recuperacion empeora. La fase actual define el esfuerzo, no una rutina distinta.
      </InfoNote>
    </div>
  )
}
