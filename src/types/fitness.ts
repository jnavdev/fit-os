export type PhaseId = 'phase-1' | 'phase-2' | 'phase-3'

export type Accent = 'orange' | 'green' | 'violet'

export type NutritionPlanId = 'cut' | 'bulk' | 'finalCut'

export interface Exercise {
  id: string
  name: string
  sets: string
  reps: string
  rest: string
  muscles: string[]
  technique: string[]
  mistakes: string[]
}

export interface WorkoutDay {
  id: string
  weekday: string
  name: string
  focus: string[]
  youtubeLinks: {
    warmupUrl: string
    stretchingUrl: string
  }
  exercises: Exercise[]
}

export interface MealOption {
  title: string
  description?: string
  foods: string[]
  macros: MacroTargets
}

export interface Meal {
  id: string
  name: string
  target: string
  proteinSources: string[]
  carbSources: string[]
  fatSources: string[]
  vegetables?: string[]
  examples: MealOption[]
  tips: string[]
}

export interface MacroTargets {
  calories: number
  protein: number
  carbs: number
  fats: number
}

export interface CardioPlan {
  sessions: string
  recommendations: string[]
}

export interface Supplement {
  name: string
  dose: string
  note: string
}

export interface WeeklyScheduleItem {
  day: string
  label: string
  type: 'upper' | 'lower' | 'cardio' | 'rest'
}

export interface FitnessPhase {
  id: PhaseId
  shortName: string
  title: string
  subtitle: string
  accent: Accent
  duration: string
  objective: string
  dashboardSummary: string
  bodyFatGoal: string
  priorities: string[]
  trainingGoal: string
  trainingAdjustments: string[]
  nutritionId: NutritionPlanId
}

export interface NutritionPlan {
  id: NutritionPlanId
  name: string
  description: string
  principles: string[]
  macros: MacroTargets
  meals: Meal[]
  cardioNutritionTips: CardioPlan
  hydration: string[]
  supplementsNotes: Supplement[]
}
