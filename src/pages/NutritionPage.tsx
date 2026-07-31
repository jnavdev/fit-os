import { Beef, Carrot, Droplets, Flame, HeartPulse, ListChecks, Scale, Utensils, Wheat } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { InfoNote } from '../components/ui/InfoNote'
import { MacroDistribution } from '../components/ui/MacroDistribution'
import { MealBuilder } from '../components/ui/MealBuilder'
import { MealCard } from '../components/ui/MealCard'
import { MetricCard } from '../components/ui/MetricCard'
import { PageHeader } from '../components/ui/PageHeader'
import { SectionHeader } from '../components/ui/SectionHeader'
import { SupplementList } from '../components/ui/SupplementList'
import { usePhase } from '../context/phase'
import { getNutritionPlanById } from '../data/nutrition'
import type { Meal } from '../types/fitness'

const dailyStructure = ['Desayuno', 'Almuerzo', 'Colacion o merienda', 'Cena', 'Comida alrededor del entrenamiento, cuando corresponda']

export function NutritionPage() {
  const { selectedPhase } = usePhase()
  const nutritionPlan = getNutritionPlanById(selectedPhase.nutritionId)
  const { macros } = nutritionPlan
  const substitutions = getFoodSubstitutions(nutritionPlan.meals)

  return (
    <div className="page-stack">
      <PageHeader
        accent={selectedPhase.accent}
        description="Guía flexible para alcanzar tus calorías y macronutrientes durante la fase actual."
        eyebrow={`${selectedPhase.shortName} · alimentacion`}
        title="Alimentacion"
      />

      <Card className="nutrition-plan-card">
        <SectionHeader title={nutritionPlan.name} description={nutritionPlan.description} />
        <p>
          Elige una comida lista por bloque del dia y usa las sustituciones si necesitas variar alimentos manteniendo una estructura similar.
        </p>
      </Card>

      <section className="metric-grid" aria-label="Macros diarios">
        <MetricCard icon={Flame} label="Calorias" value={`${macros.calories} kcal`} detail="Objetivo energetico diario." />
        <MetricCard icon={Scale} label="Proteina" value={`${macros.protein} g`} detail="Apoya el mantenimiento y desarrollo muscular." />
        <MetricCard icon={Wheat} label="Carbohidratos" value={`${macros.carbs} g`} detail="Principal fuente de energia para entrenar." />
        <MetricCard icon={HeartPulse} label="Grasas" value={`${macros.fats} g`} detail="Apoyan hormonas, saciedad y salud general." />
      </section>

      <MacroDistribution macros={macros} />

      <section>
        <SectionHeader title="Principios de esta fase" description={selectedPhase.subtitle} />
        <div className="nutrition-principle-grid">
          {nutritionPlan.principles.map((principle) => (
            <article key={principle}>
              <ListChecks size={17} aria-hidden="true" />
              <strong>{principle}</strong>
            </article>
          ))}
        </div>
      </section>

      <Card className="daily-structure-card">
        <SectionHeader title="Como distribuir tus comidas" description="Estructura orientativa para organizar el dia sin fijar horarios obligatorios." />
        <div className="daily-structure-list">
          {dailyStructure.map((item) => (
            <article key={item}>
              <Utensils size={16} aria-hidden="true" />
              <span>{item}</span>
            </article>
          ))}
        </div>
        <p>Puedes utilizar tres, cuatro o cinco comidas. La cantidad de comidas importa menos que alcanzar el total diario de calorias y macronutrientes.</p>
      </Card>

      <MealBuilder meals={nutritionPlan.meals} />

      <section>
        <SectionHeader title="Comidas listas" description="Opciones armadas para la fase actual, con cantidades y macros aproximados por comida." />
        <div className="meal-grid">
          {nutritionPlan.meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </section>

      <Card className="food-substitutions-card">
        <SectionHeader title="Sustituciones de alimentos" description="Intercambia alimentos dentro del mismo grupo para mantener la estructura de la comida." />
        <div className="food-substitution-grid">
          <FoodSubstitutionGroup icon={Beef} title="Proteinas" items={substitutions.proteins} />
          <FoodSubstitutionGroup icon={Wheat} title="Carbohidratos" items={substitutions.carbs} />
          <FoodSubstitutionGroup icon={Flame} title="Grasas" items={substitutions.fats} />
          <FoodSubstitutionGroup icon={Carrot} title="Verduras" items={substitutions.vegetables} />
        </div>
      </Card>

      <Card>
        <SectionHeader title="Nutricion alrededor del entrenamiento" description={nutritionPlan.cardioNutritionTips.sessions} />
        <ul className="feature-list">
          {nutritionPlan.cardioNutritionTips.recommendations.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Card>

      <Card className="hydration-card">
        <Droplets size={20} aria-hidden="true" />
        <SectionHeader title="Hidratacion" />
        <ul className="feature-list">
          {nutritionPlan.hydration.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Card>

      <section>
        <SectionHeader title="Suplementos" description="Herramientas opcionales, no requisitos ni indicaciones medicas." />
        <SupplementList supplements={nutritionPlan.supplementsNotes} />
      </section>

      <InfoNote>
        Las cantidades y macros son aproximados. Puedes intercambiar alimentos similares y mantener el total diario de calorias y macronutrientes como referencia principal.
      </InfoNote>
    </div>
  )
}

function FoodSubstitutionGroup({ icon: Icon, title, items }: { icon: typeof Beef; title: string; items: string[] }) {
  return (
    <article>
      <div>
        <Icon size={17} aria-hidden="true" />
        <strong>{title}</strong>
      </div>
      <p>{items.slice(0, 10).join(', ')}</p>
    </article>
  )
}

function getFoodSubstitutions(meals: Meal[]) {
  return {
    proteins: uniqueItems(meals.flatMap((meal) => meal.proteinSources)),
    carbs: uniqueItems(meals.flatMap((meal) => meal.carbSources)),
    fats: uniqueItems(meals.flatMap((meal) => meal.fatSources)),
    vegetables: uniqueItems(meals.flatMap((meal) => meal.vegetables ?? [])),
  }
}

function uniqueItems(items: string[]): string[] {
  return Array.from(
    items.reduce((uniqueItemsByKey, item) => {
      const key = item.trim().toLocaleLowerCase()

      if (!uniqueItemsByKey.has(key)) {
        uniqueItemsByKey.set(key, item)
      }

      return uniqueItemsByKey
    }, new Map<string, string>()).values(),
  )
}
