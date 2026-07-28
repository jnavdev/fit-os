import type { NutritionPlan, NutritionPlanId, Supplement } from '../types/fitness'

const supplementsNotes: Supplement[] = [
  {
    name: 'Creatina monohidratada',
    dose: '3-5 g diarios',
    note: 'Uso diario, idealmente junto a una comida. No depende del horario de entrenamiento.',
  },
  {
    name: 'Whey',
    dose: 'Segun necesidad',
    note: 'Herramienta practica para llegar a la proteina diaria, no un requisito.',
  },
  {
    name: 'Cafeina',
    dose: 'Opcional antes de entrenar',
    note: 'Evitarla tarde si reduce la calidad del sueno o aumenta ansiedad.',
  },
  {
    name: 'Vitamina D u omega 3',
    dose: 'Segun contexto',
    note: 'Depende de dieta, exposicion solar o indicacion profesional. No se plantea como obligatorio.',
  },
]

const baseMeals: NutritionPlan['meals'] = [
  {
    id: 'breakfast',
    name: 'Desayuno',
    target: '30-40 g de proteina',
    proteinSources: ['Huevos', 'claras', 'yogur griego alto en proteina', 'whey', 'quesillo o cottage'],
    carbSources: ['Avena', 'pan integral', 'frutas'],
    fatSources: ['Yema de huevo', 'mantequilla de mani en porciones moderadas', 'almendras'],
    vegetables: ['Espinaca', 'tomate'],
    examples: [
      { title: 'Avena proteica', foods: ['70 g de avena', '1 scoop de whey', '1 platano', '10 g de mantequilla de mani'] },
      { title: 'Huevos y pan', foods: ['2 huevos', '150 g de claras', '2 rebanadas de pan integral', 'tomate'] },
      { title: 'Yogur completo', foods: ['250 g de yogur griego alto en proteina', '60 g de avena', 'fruta', '15 g de almendras'] },
    ],
    tips: ['Asegura proteina temprano para repartir mejor el dia.', 'Ajusta avena o pan segun los carbohidratos de la fase.'],
  },
  {
    id: 'snack',
    name: 'Colacion',
    target: '20-35 g de proteina',
    proteinSources: ['Whey', 'atun al agua', 'pavo', 'quesillo o cottage', 'yogur griego alto en proteina'],
    carbSources: ['Frutas', 'pan integral', 'arroz', 'papas'],
    fatSources: ['Nueces', 'almendras', 'palta'],
    examples: [
      { title: 'Rapida', foods: ['1 scoop de whey', '1 fruta', '20 g de nueces'] },
      { title: 'Salada', foods: ['Pan integral', 'pavo', 'palta medida', 'tomate'] },
      { title: 'Alta saciedad', foods: ['Quesillo o cottage', 'fruta', 'zanahoria'] },
    ],
    tips: ['Usala para completar proteina sin convertirla en snack libre.', 'En dias de entrenamiento puede acercarse al preentreno.'],
  },
  {
    id: 'lunch',
    name: 'Almuerzo',
    target: '40-50 g de proteina',
    proteinSources: ['Pechuga de pollo', 'pavo', 'carne magra', 'merluza', 'atun al agua'],
    carbSources: ['Arroz', 'papas', 'camote', 'pasta', 'quinoa', 'legumbres'],
    fatSources: ['Aceite de oliva', 'palta', 'yema de huevo'],
    vegetables: ['Brocoli', 'lechuga', 'zanahoria', 'pimenton', 'zapallo italiano', 'verduras congeladas'],
    examples: [
      { title: 'Pollo y arroz', foods: ['180 g de pechuga de pollo', '220-300 g de arroz cocido', 'ensalada grande', '10 g de aceite de oliva'] },
      { title: 'Carne y papas', foods: ['170 g de carne magra', '300-450 g de papas', 'brocoli o coliflor'] },
      { title: 'Pescado y quinoa', foods: ['200 g de merluza', '180-250 g de quinoa cocida', 'verduras salteadas'] },
      { title: 'Legumbres reforzadas', foods: ['Legumbres cocidas', 'atun al agua o claras', 'ensalada', 'aceite medido'] },
    ],
    tips: ['Prioriza verduras para volumen y micronutrientes.', 'Mide aceites y frutos grasos especialmente en fases de definicion.'],
  },
  {
    id: 'preworkout',
    name: 'Merienda o preentreno',
    target: '25-40 g de proteina',
    proteinSources: ['Whey', 'yogur griego alto en proteina', 'pavo', 'claras'],
    carbSources: ['Avena', 'pan integral', 'frutas', 'arroz', 'pasta'],
    fatSources: ['Mantequilla de mani en porciones moderadas', 'almendras'],
    examples: [
      { title: 'Ligero', foods: ['Yogur griego alto en proteina', '1 fruta', '30-50 g de avena'] },
      { title: 'Preentreno clasico', foods: ['Pan integral', 'pavo', 'fruta'] },
      { title: 'Batido', foods: ['Whey', 'platano', 'avena', 'agua o leche segun macros'] },
    ],
    tips: ['Deja las grasas bajas si entrenas pronto.', 'Sube carbohidratos aqui si el rendimiento cae.'],
  },
  {
    id: 'dinner',
    name: 'Cena',
    target: '35-50 g de proteina',
    proteinSources: ['Salmón', 'merluza', 'pechuga de pollo', 'huevos', 'carne magra'],
    carbSources: ['Papas', 'camote', 'arroz', 'quinoa', 'verduras'],
    fatSources: ['Aceite de oliva', 'palta', 'yema de huevo'],
    vegetables: ['Espinaca', 'lechuga', 'tomate', 'pimenton', 'coliflor', 'zapallo italiano'],
    examples: [
      { title: 'Cena magra', foods: ['200 g de merluza', 'papas o arroz segun macros', 'ensalada grande'] },
      { title: 'Salmón controlado', foods: ['160 g de salmon', 'camote', 'verduras verdes'] },
      { title: 'Omelette', foods: ['2 huevos', '200 g de claras', 'espinaca', 'pan integral si faltan carbohidratos'] },
    ],
    tips: ['Cierra el dia completando proteina, no compensando con snacks altos en grasa.', 'Ajusta carbohidratos segun hambre y entrenamiento del dia siguiente.'],
  },
]

export const nutritionPlans: Record<NutritionPlanId, NutritionPlan> = {
  cut: {
    id: 'cut',
    name: 'Definicion',
    description: 'Sistema flexible para bajar grasa sin perder rendimiento ni masa muscular.',
    principles: [
      'Priorizar alimentos saciantes.',
      'Verduras en todas las comidas principales.',
      'Proteinas magras.',
      'Carbohidratos alrededor del entrenamiento.',
      'Controlar aceites y snacks.',
    ],
    macros: { calories: 2000, protein: 160, carbs: 195, fats: 60 },
    meals: baseMeals,
    cardioNutritionTips: {
      sessions: '2 caminatas moderadas por semana, mas una caminata larga opcional.',
      recommendations: ['Priorizar pasos diarios.', 'No usar cardio excesivo.', 'Aumentar actividad solo si el progreso se estanca varias semanas.'],
    },
    hydration: ['Tomar agua durante el dia, especialmente alrededor del entrenamiento.', 'Aumentar hidratacion si suben pasos, calor o sudoracion.'],
    supplementsNotes,
  },
  bulk: {
    id: 'bulk',
    name: 'Volumen limpio',
    description: 'Plan para ganar musculo lentamente con energia suficiente y grasa bajo control.',
    principles: ['Aumentar principalmente carbohidratos.', 'Mantener proteina estable.', 'Comer suficiente para rendir.', 'Evitar superavits excesivos.'],
    macros: { calories: 2450, protein: 160, carbs: 300, fats: 65 },
    meals: baseMeals,
    cardioNutritionTips: {
      sessions: '1-2 sesiones suaves por semana.',
      recommendations: ['Mantener actividad diaria.', 'No interferir con la recuperacion.', 'Usar cardio como salud y apetito, no como compensacion.'],
    },
    hydration: ['Mantener una ingesta estable de agua para sostener rendimiento y digestion.', 'Usar sal y liquidos con criterio si el entrenamiento se vuelve mas demandante.'],
    supplementsNotes,
  },
  finalCut: {
    id: 'finalCut',
    name: 'Definicion final',
    description: 'Plan para maximizar saciedad y conservar rendimiento durante una etapa corta de deficit.',
    principles: ['Maxima saciedad.', 'Proteinas altas.', 'Muchas verduras.', 'Control estricto de grasas añadidas.', 'No eliminar completamente carbohidratos.'],
    macros: { calories: 2000, protein: 170, carbs: 185, fats: 60 },
    meals: baseMeals,
    cardioNutritionTips: {
      sessions: '2-3 sesiones moderadas por semana.',
      recommendations: ['Ajustar cardio solo cuando el progreso se detenga.', 'Priorizar recuperacion y sueno.', 'No eliminar completamente carbohidratos.'],
    },
    hydration: ['Ser consistente con agua y sodio para reducir variaciones innecesarias de peso.', 'Priorizar hidratacion antes de aumentar restricciones alimentarias.'],
    supplementsNotes,
  },
}

export function getNutritionPlanById(nutritionId: NutritionPlanId): NutritionPlan {
  return nutritionPlans[nutritionId]
}
