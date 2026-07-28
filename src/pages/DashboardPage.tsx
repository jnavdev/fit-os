import { Apple, ArrowRight, CalendarDays, Dumbbell, Flame, HeartPulse, Scale, Target, Wheat } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { InfoNote } from '../components/ui/InfoNote'
import { MetricCard } from '../components/ui/MetricCard'
import { SectionHeader } from '../components/ui/SectionHeader'
import { WeeklyTrainingSchedule } from '../components/ui/WeeklyTrainingSchedule'
import { usePhase } from '../context/phase'
import { getNutritionPlanById } from '../data/nutrition'
import { weeklyTrainingSchedule } from '../data/routine'

export function DashboardPage() {
  const { selectedPhase } = usePhase()
  const nutritionPlan = getNutritionPlanById(selectedPhase.nutritionId)
  const { macros } = nutritionPlan

  return (
    <div className="page-stack">
      <section className="dashboard-hero">
        <div className="dashboard-hero__content">
          <span>Fase actual</span>
          <h1>{selectedPhase.title}</h1>
          <p>{selectedPhase.dashboardSummary}</p>
          <strong>{selectedPhase.objective}</strong>
        </div>
        <div className="dashboard-hero__meta">
          <article>
            <small>Duracion estimada</small>
            <strong>{selectedPhase.duration}</strong>
          </article>
          <article>
            <small>Meta</small>
            <strong>{selectedPhase.bodyFatGoal}</strong>
          </article>
        </div>
      </section>

      <section>
        <div className="section-header-with-action">
          <SectionHeader title="Resumen nutricional" description={nutritionPlan.description} />
          <Link className="action-button" to="/alimentacion">
            <Apple size={18} aria-hidden="true" />
            Ver alimentacion completa
          </Link>
        </div>
        <div className="metric-grid dashboard-metric-grid" aria-label="Macros diarios">
          <MetricCard icon={Flame} label="Calorias" value={`${macros.calories} kcal`} detail="Objetivo diario" />
          <MetricCard icon={Scale} label="Proteina" value={`${macros.protein} g`} detail="Soporte muscular" />
          <MetricCard icon={Wheat} label="Carbohidratos" value={`${macros.carbs} g`} detail="Energia para entrenar" />
          <MetricCard icon={HeartPulse} label="Grasas" value={`${macros.fats} g`} detail="Saciedad y salud" />
        </div>
      </section>

      <Card className="dashboard-training-card">
        <div>
          <SectionHeader title="Como entrenar en esta fase" description={selectedPhase.trainingGoal} />
          <p>
            La rutina Upper / Lower se mantiene en las tres fases. Lo que cambia es la forma de gestionar volumen, intensidad y recuperacion.
          </p>
          <ul className="feature-list">
            {selectedPhase.trainingAdjustments.slice(0, 4).map((adjustment) => (
              <li key={adjustment}>{adjustment}</li>
            ))}
          </ul>
        </div>
        <Link className="action-button action-button--primary" to="/rutina">
          <Dumbbell size={18} aria-hidden="true" />
          Ver rutina completa
        </Link>
      </Card>

      <section>
        <SectionHeader title="Semana de entrenamiento" description="Distribucion base de fuerza, caminatas y descanso." />
        <WeeklyTrainingSchedule items={weeklyTrainingSchedule} compact />
      </section>

      <Card>
        <SectionHeader title="Prioridades de la fase" description="Los puntos que guian las decisiones semanales." />
        <div className="dashboard-priority-grid">
          {selectedPhase.priorities.map((priority) => (
            <article key={priority}>
              <Target size={17} aria-hidden="true" />
              <span>{priority}</span>
            </article>
          ))}
        </div>
      </Card>

      <section>
        <SectionHeader title="Accesos rapidos" description="Consulta el detalle cuando necesites profundizar." />
        <div className="quick-access-grid">
          <Link className="quick-access-card" to="/rutina">
            <Dumbbell size={20} aria-hidden="true" />
            <div>
              <strong>Rutina completa</strong>
              <span>Sesiones, ejercicios, tecnica y alternativas.</span>
            </div>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link className="quick-access-card" to="/alimentacion">
            <Apple size={20} aria-hidden="true" />
            <div>
              <strong>Alimentacion completa</strong>
              <span>Macros, comidas, sustituciones y suplementos.</span>
            </div>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <article className="quick-access-card quick-access-card--static">
            <CalendarDays size={20} aria-hidden="true" />
            <div>
              <strong>Semana base</strong>
              <span>Upper / Lower de cuatro dias con descanso planificado.</span>
            </div>
          </article>
        </div>
      </section>

      <InfoNote>
        Usa este resumen para decidir el foco del dia. Para ajustar porciones o revisar tecnica, entra a las paginas completas de alimentacion y rutina.
      </InfoNote>
    </div>
  )
}
