import type { MacroTargets } from '../../types/fitness'
import { calculateMacroDistribution } from '../../utils/nutrition'
import { Card } from './Card'
import { SectionHeader } from './SectionHeader'

interface MacroDistributionProps {
  macros: MacroTargets
}

export function MacroDistribution({ macros }: MacroDistributionProps) {
  const distribution = calculateMacroDistribution(macros)

  return (
    <Card className="macro-distribution">
      <SectionHeader title="Distribucion visual de macronutrientes" description="Porcentaje energetico aproximado de proteina, carbohidratos y grasas." />
      <div className="macro-distribution__bar" aria-label="Distribucion energetica de macronutrientes">
        {distribution.map((item) => (
          <span
            className={`macro-distribution__segment macro-distribution__segment--${item.id}`}
            key={item.id}
            style={{ width: `${item.percentage}%` }}
            aria-label={`${item.label}: ${item.percentage}%`}
          />
        ))}
      </div>
      <div className="macro-distribution__legend">
        {distribution.map((item) => (
          <article key={item.id}>
            <span className={`macro-distribution__dot macro-distribution__dot--${item.id}`} aria-hidden="true" />
            <div>
              <strong>{item.label}</strong>
              <small>
                {item.grams} g · {item.calories} kcal · {item.percentage}%
              </small>
            </div>
          </article>
        ))}
      </div>
    </Card>
  )
}
