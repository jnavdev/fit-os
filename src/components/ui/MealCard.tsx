import { Beef, Carrot, Flame, Wheat } from 'lucide-react'
import type { Meal } from '../../types/fitness'
import { Card } from './Card'

interface MealCardProps {
  meal: Meal
}

export function MealCard({ meal }: MealCardProps) {
  return (
    <Card className="meal-card">
      <header className="meal-card__header">
        <div>
          <span>{meal.target}</span>
          <h3>{meal.name}</h3>
        </div>
      </header>
      <div className="food-groups">
        <FoodGroup icon={Beef} title="Proteina" items={meal.proteinSources} />
        <FoodGroup icon={Wheat} title="Carbohidratos" items={meal.carbSources} />
        <FoodGroup icon={Flame} title="Grasas" items={meal.fatSources} />
        {meal.vegetables ? <FoodGroup icon={Carrot} title="Verduras" items={meal.vegetables} /> : null}
      </div>
      <div className="meal-options">
        {meal.examples.map((option) => (
          <article key={option.title}>
            <strong>{option.title}</strong>
            {option.description ? <p>{option.description}</p> : null}
            <ul>
              {option.foods.map((food) => (
                <li key={food}>{food}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="list-block">
        <h4>Consejos</h4>
        <ul>
          {meal.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

function FoodGroup({ icon: Icon, title, items }: { icon: typeof Beef; title: string; items: string[] }) {
  return (
    <div className="food-group">
      <div>
        <Icon size={16} aria-hidden="true" />
        <strong>{title}</strong>
      </div>
      <p>{items.join(', ')}</p>
    </div>
  )
}
