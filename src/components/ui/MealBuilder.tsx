import { Beef, Carrot, Flame, Wheat } from 'lucide-react'
import type { Meal } from '../../types/fitness'
import { Card } from './Card'
import { SectionHeader } from './SectionHeader'

interface MealBuilderProps {
  meals: Meal[]
}

export function MealBuilder({ meals }: MealBuilderProps) {
  const proteinSources = uniqueItems(meals.flatMap((meal) => meal.proteinSources))
  const carbSources = uniqueItems(meals.flatMap((meal) => meal.carbSources))
  const fatSources = uniqueItems(meals.flatMap((meal) => meal.fatSources))
  const vegetableSources = uniqueItems(meals.flatMap((meal) => meal.vegetables ?? []))

  return (
    <Card className="meal-builder">
      <SectionHeader
        title="Constructor flexible de comidas"
        description="Combina una fuente de proteina, una de carbohidratos, una porcion de grasa y verduras segun tus macros del dia."
      />
      <div className="meal-builder__grid">
        <BuilderGroup icon={Beef} title="1. Proteina" items={proteinSources} />
        <BuilderGroup icon={Wheat} title="2. Carbohidrato" items={carbSources} />
        <BuilderGroup icon={Flame} title="3. Grasa" items={fatSources} />
        <BuilderGroup icon={Carrot} title="4. Verduras" items={vegetableSources} />
      </div>
    </Card>
  )
}

function BuilderGroup({ icon: Icon, title, items }: { icon: typeof Beef; title: string; items: string[] }) {
  return (
    <article>
      <div className="meal-builder__group-header">
        <Icon size={17} aria-hidden="true" />
        <strong>{title}</strong>
      </div>
      <div className="meal-builder__chips">
        {items.slice(0, 8).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  )
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
