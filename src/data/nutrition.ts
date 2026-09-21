import type { Meal, MealOption, MealTiming, NutritionPlan, NutritionPlanId, Supplement } from '../types/fitness'

export const fixedMealSchedule: MealTiming[] = [
  { time: '08:00', name: 'Desayuno', description: 'Primer bloque del menú.' },
  { time: '11:30', name: 'Colación', description: 'Segundo bloque del menú.' },
  { time: '14:00', name: 'Almuerzo', description: 'Comida principal con verduras.' },
  { time: '17:00', name: 'Merienda o preentreno', description: 'Proteína y carbohidratos antes de fuerza.' },
  { time: '20:15', name: 'Cena', description: 'Último bloque del menú.' },
]

const supplementsNotes: Supplement[] = [
  { name: 'Creatina monohidratada', dose: '3-5 g diarios', note: 'Opcional. Tómala junto a cualquier comida; no depende de la hora de entrenamiento.' },
  { name: 'Cafeína', dose: 'Opcional antes de entrenar', note: 'Evítala tarde si reduce la calidad de tu sueño o aumenta la ansiedad.' },
]

const baseMeals: Array<Omit<Meal, 'examples'>> = [
  { id: 'breakfast', name: 'Desayuno', target: 'Bloque 1 del día', proteinSources: ['Huevos', 'yogur griego natural'], carbSources: ['Avena', 'pan integral', 'manzana', 'plátano'], fatSources: ['Mantequilla de maní', 'almendras', 'nueces'], vegetables: [], tips: ['Elige una opción. Ambas respetan el presupuesto de este horario.'] },
  { id: 'snack', name: 'Colación', target: 'Bloque 2 del día', proteinSources: ['Huevos', 'yogur griego natural', 'atún al agua'], carbSources: ['Pan integral', 'manzana', 'plátano'], fatSources: ['Almendras', 'nueces', 'palta'], tips: ['No añadas alimentos fuera de la opción elegida: este bloque ya está contabilizado.'] },
  { id: 'lunch', name: 'Almuerzo', target: 'Bloque 3 del día', proteinSources: ['Pechuga de pollo', 'carne magra', 'atún al agua', 'lentejas'], carbSources: ['Arroz cocido', 'papas cocidas', 'fideos', 'lentejas'], fatSources: ['Palta'], vegetables: ['Lechuga', 'zanahoria', 'tomate'], tips: ['Las verduras indicadas están incluidas en la preparación y no requieren ajustes.'] },
  { id: 'preworkout', name: 'Merienda o preentreno', target: 'Bloque 4 del día', proteinSources: ['Yogur griego natural', 'atún al agua', 'pechuga de pollo'], carbSources: ['Avena', 'pan integral', 'plátano', 'arroz cocido'], fatSources: ['Mantequilla de maní', 'palta'], tips: ['En días sin fuerza mantén esta misma comida como merienda.'] },
  { id: 'dinner', name: 'Cena', target: 'Bloque 5 del día', proteinSources: ['Merluza', 'salmón', 'pechuga de pollo', 'carne magra'], carbSources: ['Papas cocidas', 'arroz cocido', 'fideos'], fatSources: ['Palta', 'salmón'], vegetables: ['Lechuga', 'zanahoria', 'tomate'], tips: ['Respeta las cantidades cocidas indicadas para conservar el total diario.'] },
]

const option = (title: string, foods: string[], calories: number, protein: number, carbs: number, fats: number): MealOption => ({ title, foods, macros: { calories, protein, carbs, fats } })

// Cada par comparte el mismo presupuesto de macros: las dos alternativas pueden intercambiarse sin alterar el total diario.
const readyMealExamples: Record<NutritionPlanId, Record<Meal['id'], MealOption[]>> = {
  cut: {
    breakfast: [option('Opción A · Avena y yogur', ['50 g de avena', '200 g de yogur griego natural', '25 g de plátano', '10 g de mantequilla de maní'], 400, 30, 45, 10), option('Opción B · Tostadas y huevos', ['50 g de huevo (1 unidad)', '70 g de pan integral', '150 g de yogur griego natural', '100 g de manzana'], 400, 30, 45, 10)],
    snack: [option('Opción A · Yogur y manzana', ['220 g de yogur griego natural', '120 g de manzana', '15 g de almendras'], 300, 25, 30, 10), option('Opción B · Atún y pan', ['80 g de atún al agua', '65 g de pan integral', '30 g de palta', '100 g de tomate'], 300, 25, 30, 10)],
    lunch: [option('Opción A · Pollo y arroz', ['150 g de pechuga de pollo cocida', '220 g de arroz cocido', '60 g de palta', '100 g de lechuga', '100 g de tomate'], 600, 50, 65, 15), option('Opción B · Carne y papas', ['150 g de carne magra cocida', '300 g de papas cocidas', '40 g de palta', '100 g de zanahoria', '100 g de lechuga'], 600, 50, 65, 15)],
    preworkout: [option('Opción A · Yogur y avena', ['200 g de yogur griego natural', '35 g de avena', '70 g de plátano'], 300, 25, 30, 5), option('Opción B · Pan con pollo', ['90 g de pechuga de pollo cocida', '75 g de pan integral', '100 g de tomate'], 300, 25, 30, 5)],
    dinner: [option('Opción A · Salmón y papas', ['120 g de salmón cocido', '200 g de papas cocidas', '100 g de lechuga', '100 g de tomate'], 400, 30, 25, 20), option('Opción B · Merluza y palta', ['180 g de merluza cocida', '120 g de arroz cocido', '75 g de palta', '100 g de zanahoria'], 400, 30, 25, 20)],
  },
  bulk: {
    breakfast: [option('Opción A · Avena completa', ['75 g de avena', '250 g de yogur griego natural', '100 g de plátano', '15 g de mantequilla de maní'], 550, 35, 70, 15), option('Opción B · Huevos y tostadas', ['100 g de huevo (2 unidades)', '110 g de pan integral', '150 g de yogur griego natural', '100 g de manzana'], 550, 35, 70, 15)],
    snack: [option('Opción A · Yogur, fruta y nueces', ['250 g de yogur griego natural', '150 g de manzana', '20 g de nueces'], 350, 25, 40, 10), option('Opción B · Atún con pan', ['100 g de atún al agua', '90 g de pan integral', '40 g de palta', '100 g de tomate'], 350, 25, 40, 10)],
    lunch: [option('Opción A · Pollo y arroz grande', ['160 g de pechuga de pollo cocida', '330 g de arroz cocido', '55 g de palta', '100 g de lechuga', '100 g de tomate'], 700, 50, 95, 15), option('Opción B · Carne, papas y lentejas', ['150 g de carne magra cocida', '300 g de papas cocidas', '150 g de lentejas cocidas', '30 g de palta', '100 g de zanahoria'], 700, 50, 95, 15)],
    preworkout: [option('Opción A · Avena preentreno', ['250 g de yogur griego natural', '55 g de avena', '100 g de plátano'], 400, 25, 55, 5), option('Opción B · Pan, atún y plátano', ['90 g de atún al agua', '90 g de pan integral', '100 g de plátano'], 400, 25, 55, 5)],
    dinner: [option('Opción A · Salmón con arroz', ['140 g de salmón cocido', '160 g de arroz cocido', '100 g de lechuga', '100 g de tomate'], 450, 25, 40, 20), option('Opción B · Merluza con pasta y palta', ['180 g de merluza cocida', '180 g de fideos cocidos', '70 g de palta', '100 g de zanahoria'], 450, 25, 40, 20)],
  },
  finalCut: {
    breakfast: [option('Opción A · Avena ligera', ['40 g de avena', '250 g de yogur griego natural', '70 g de plátano', '10 g de mantequilla de maní'], 400, 35, 40, 10), option('Opción B · Huevos y pan', ['100 g de huevo (2 unidades)', '60 g de pan integral', '200 g de yogur griego natural', '100 g de manzana'], 400, 35, 40, 10)],
    snack: [option('Opción A · Yogur y almendras', ['220 g de yogur griego natural', '100 g de manzana', '10 g de almendras'], 250, 25, 20, 5), option('Opción B · Atún con tostada', ['90 g de atún al agua', '45 g de pan integral', '25 g de palta', '100 g de tomate'], 250, 25, 20, 5)],
    lunch: [option('Opción A · Pollo, arroz y ensalada', ['180 g de pechuga de pollo cocida', '220 g de arroz cocido', '35 g de palta', '100 g de lechuga', '100 g de tomate'], 600, 55, 70, 10), option('Opción B · Lentejas y carne', ['130 g de carne magra cocida', '180 g de lentejas cocidas', '180 g de papas cocidas', '25 g de palta', '100 g de zanahoria'], 600, 55, 70, 10)],
    preworkout: [option('Opción A · Yogur y plátano', ['220 g de yogur griego natural', '30 g de avena', '80 g de plátano'], 300, 25, 30, 5), option('Opción B · Pollo con pan', ['90 g de pechuga de pollo cocida', '65 g de pan integral', '100 g de tomate'], 300, 25, 30, 5)],
    dinner: [option('Opción A · Salmón y papas', ['150 g de salmón cocido', '150 g de papas cocidas', '60 g de palta', '100 g de lechuga'], 450, 30, 25, 30), option('Opción B · Merluza, arroz y palta', ['200 g de merluza cocida', '100 g de arroz cocido', '100 g de palta', '100 g de zanahoria'], 450, 30, 25, 30)],
  },
}

function getMealsForPlan(nutritionId: NutritionPlanId): Meal[] {
  return baseMeals.map((meal) => ({ ...meal, examples: readyMealExamples[nutritionId][meal.id] }))
}

export const nutritionPlans: Record<NutritionPlanId, NutritionPlan> = {
  cut: {
    id: 'cut', name: 'Definición', description: 'Menú cerrado para bajar grasa manteniendo rendimiento.',
    principles: ['Cinco comidas ya presupuestadas.', 'Dos alternativas intercambiables por horario.', 'Usar solo las cantidades cocidas indicadas.', 'Carbohidratos alrededor del entrenamiento.', 'No añadir extras sin ajustar el plan.'],
    macros: { calories: 2000, protein: 160, carbs: 195, fats: 60 }, meals: getMealsForPlan('cut'),
    cardioNutritionTips: { sessions: '2 caminatas moderadas por semana, más una caminata larga opcional.', recommendations: ['Prioriza pasos diarios.', 'No uses cardio como compensación de comida.', 'Aumenta actividad solo si el progreso se estanca varias semanas.'] },
    hydration: ['Toma agua durante el día, especialmente alrededor del entrenamiento.', 'Aumenta líquidos si hay calor o sudoración alta.'], supplementsNotes,
  },
  bulk: {
    id: 'bulk', name: 'Volumen limpio', description: 'Menú cerrado para ganar músculo con un superávit controlado.',
    principles: ['Cinco comidas ya presupuestadas.', 'Dos alternativas intercambiables por horario.', 'Usar solo las cantidades cocidas indicadas.', 'Mayor cantidad de carbohidratos para rendir.', 'No añadir extras sin ajustar el plan.'],
    macros: { calories: 2450, protein: 160, carbs: 300, fats: 65 }, meals: getMealsForPlan('bulk'),
    cardioNutritionTips: { sessions: '1-2 sesiones suaves por semana.', recommendations: ['Mantén actividad diaria.', 'No interfieras con la recuperación.', 'Usa cardio por salud, no como compensación.'] },
    hydration: ['Mantén una ingesta estable de agua.', 'Usa sal y líquidos con criterio si aumenta el sudor.'], supplementsNotes,
  },
  finalCut: {
    id: 'finalCut', name: 'Definición final', description: 'Menú cerrado de alta saciedad para una etapa corta de déficit.',
    principles: ['Cinco comidas ya presupuestadas.', 'Dos alternativas intercambiables por horario.', 'Usar solo las cantidades cocidas indicadas.', 'Proteína alta y verduras en las comidas principales.', 'No añadir extras sin ajustar el plan.'],
    macros: { calories: 2000, protein: 170, carbs: 185, fats: 60 }, meals: getMealsForPlan('finalCut'),
    cardioNutritionTips: { sessions: '2-3 sesiones moderadas por semana.', recommendations: ['Ajusta cardio solo si el progreso se detiene.', 'Prioriza recuperación y sueño.', 'No elimines los carbohidratos del menú.'] },
    hydration: ['Sé consistente con agua y sodio.', 'Prioriza hidratación antes de aumentar restricciones.'], supplementsNotes,
  },
}

function verifyFixedPlans() {
  Object.values(nutritionPlans).forEach((plan) => {
    const target = plan.macros
    const firstOptions = plan.meals.map((meal) => meal.examples[0].macros)
    const total = firstOptions.reduce(
      (sum, macros) => ({
        calories: sum.calories + macros.calories,
        protein: sum.protein + macros.protein,
        carbs: sum.carbs + macros.carbs,
        fats: sum.fats + macros.fats,
      }),
      { calories: 0, protein: 0, carbs: 0, fats: 0 },
    )

    if (Object.keys(target).some((key) => total[key as keyof typeof total] !== target[key as keyof typeof target])) {
      throw new Error(`Los bloques del plan ${plan.id} no suman sus macros diarios.`)
    }

    plan.meals.forEach((meal) => {
      if (meal.examples.length !== 2 || meal.examples.some((example) => JSON.stringify(example.macros) !== JSON.stringify(meal.examples[0].macros))) {
        throw new Error(`Las opciones de ${meal.id} en ${plan.id} no son intercambiables.`)
      }
    })
  })
}

verifyFixedPlans()

export function getNutritionPlanById(nutritionId: NutritionPlanId): NutritionPlan {
  return nutritionPlans[nutritionId]
}
