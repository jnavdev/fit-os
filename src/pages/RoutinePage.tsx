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
  'Deja 1-2 repeticiones en reserva y conserva la técnica en cada fase.',
  'Registra peso, repeticiones y esfuerzo; en definición, mantener el rendimiento también es progreso.',
  'En dominadas, aumenta primero las repeticiones con control; usa la alternativa indicada si aún no completas el mínimo.',
  'Si las cargas o repeticiones caen en varias sesiones y no te recuperas, reduce temporalmente una serie por ejercicio antes de bajar las cargas.',
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
        <SectionHeader title="Tu agenda semanal" description="Comidas a la misma hora todos los días; fuerza desde las 18:30 de lunes, martes, jueves y viernes. Reserva unos 75 minutos y respeta los descansos." />
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
        <SectionHeader title="Sesiones de entrenamiento" description="Rutina en casa con mancuernas, banca, mat y barra de dominadas. Abre cada ejercicio para ver técnica y alternativas." />
        <div className="session-grid">
          {baseRoutine.map((workout) => (
            <WorkoutSessionCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>

      <Card>
        <SectionHeader title="Actividad y seguimiento" description="Ajusta según tu progreso y recuperación." />
        <ul className="feature-list">
          <li>Si actualmente caminas poco, añade gradualmente 15–20 minutos de caminata diaria y observa cómo te recuperas.</li>
          <li>Registra tus pasos para mantener una actividad constante, además de las caminatas del miércoles y sábado.</li>
          <li>Compara promedios semanales de peso, medido en condiciones similares, y mide la cintura una vez por semana.</li>
          <li>En definición, si peso y cintura se estancan 2–3 semanas con cumplimiento consistente, revisa la alimentación y ajusta una sola variable: actividad o calorías.</li>
          <li>Antes de recortar calorías, comprueba la tendencia del peso, el hambre y el rendimiento; el menú actual es un punto de partida que requiere seguimiento.</li>
        </ul>
      </Card>

      <Card className="progression-card">
        <TrendingUp size={20} aria-hidden="true" />
        <div>
          <SectionHeader title="Guia de progresion" description="Progresa con pequeños incrementos y adapta el volumen a tu recuperación." />
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
