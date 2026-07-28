import type { MacroTargets } from '../types/fitness'

export interface MacroDistributionItem {
  id: 'protein' | 'carbs' | 'fats'
  label: string
  grams: number
  calories: number
  percentage: number
}

const calorieFactors: Record<MacroDistributionItem['id'], number> = {
  protein: 4,
  carbs: 4,
  fats: 9,
}

export function calculateMacroDistribution(macros: MacroTargets): MacroDistributionItem[] {
  const items: Omit<MacroDistributionItem, 'percentage'>[] = [
    {
      id: 'protein',
      label: 'Proteina',
      grams: macros.protein,
      calories: macros.protein * calorieFactors.protein,
    },
    {
      id: 'carbs',
      label: 'Carbohidratos',
      grams: macros.carbs,
      calories: macros.carbs * calorieFactors.carbs,
    },
    {
      id: 'fats',
      label: 'Grasas',
      grams: macros.fats,
      calories: macros.fats * calorieFactors.fats,
    },
  ]

  const totalCalories = items.reduce((total, item) => total + item.calories, 0)

  return items.map((item) => ({
    ...item,
    percentage: Math.round((item.calories / totalCalories) * 100),
  }))
}
