import type { Meal, MealOption, NutritionPlan, NutritionPlanId, Supplement } from '../types/fitness'

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

const baseMeals: Array<Omit<Meal, 'examples'> & { examples: Array<Omit<MealOption, 'macros'>> }> = [
  {
    id: 'breakfast',
    name: 'Desayuno',
    target: '30-40 g de proteina',
    proteinSources: ['Huevos', 'claras', 'yogur griego alto en proteina', 'whey', 'quesillo o cottage'],
    carbSources: ['Avena', 'pan integral', 'frutas'],
    fatSources: ['Yema de huevo', 'mantequilla de mani en porciones moderadas', 'mani'],
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
    fatSources: ['Mani', 'semillas de zapallo', 'palta'],
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
    carbSources: ['Arroz', 'papas', 'fideos', 'pasta', 'legumbres'],
    fatSources: ['Aceite de oliva', 'palta', 'yema de huevo'],
    vegetables: ['Brocoli', 'lechuga', 'zanahoria', 'pimenton', 'zapallo italiano', 'verduras congeladas'],
    examples: [
      { title: 'Pollo y arroz', foods: ['180 g de pechuga de pollo', '220-300 g de arroz cocido', 'ensalada grande', '10 g de aceite de oliva'] },
      { title: 'Carne y papas', foods: ['170 g de carne magra', '300-450 g de papas', 'brocoli o coliflor'] },
      { title: 'Pescado y arroz', foods: ['200 g de merluza', '180-250 g de arroz cocido', 'verduras salteadas'] },
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
    fatSources: ['Mantequilla de mani en porciones moderadas', 'mani'],
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
    carbSources: ['Papas', 'arroz', 'fideos', 'verduras'],
    fatSources: ['Aceite de oliva', 'palta', 'yema de huevo'],
    vegetables: ['Espinaca', 'lechuga', 'tomate', 'pimenton', 'coliflor', 'zapallo italiano'],
    examples: [
      { title: 'Cena magra', foods: ['200 g de merluza', 'papas o arroz segun macros', 'ensalada grande'] },
      { title: 'Jurel controlado', foods: ['1 tarro de jurel al agua', '250 g de papas', 'verduras verdes'] },
      { title: 'Omelette', foods: ['2 huevos', '200 g de claras', 'espinaca', 'pan integral si faltan carbohidratos'] },
    ],
    tips: ['Cierra el dia completando proteina, no compensando con snacks altos en grasa.', 'Ajusta carbohidratos segun hambre y entrenamiento del dia siguiente.'],
  },
]

const readyMealExamples: Record<NutritionPlanId, Record<Meal['id'], MealOption[]>> = {
  cut: {
    breakfast: [
      { title: 'Avena proteica', foods: ['60 g de avena', '1 scoop de whey', '100 g de berries', '10 g de mantequilla de mani'], macros: { calories: 460, protein: 36, carbs: 58, fats: 10 } },
      { title: 'Huevos con tostadas', foods: ['2 huevos', '120 g de claras', '2 rebanadas de pan integral', 'tomate'], macros: { calories: 430, protein: 34, carbs: 40, fats: 14 } },
      { title: 'Bowl de yogur griego', foods: ['250 g de yogur griego alto en proteina', '45 g de avena', '1 manzana', '10 g de almendras'], macros: { calories: 440, protein: 38, carbs: 55, fats: 9 } },
      { title: 'Avena con leche y huevos', foods: ['50 g de avena', '200 ml de leche descremada', '2 huevos', '1 fruta pequena'], macros: { calories: 445, protein: 30, carbs: 58, fats: 12 } },
      { title: 'Yogur con avena y fruta', foods: ['250 g de yogur alto en proteina', '45 g de avena', '1 platano pequeno', '10 g de mani'], macros: { calories: 420, protein: 35, carbs: 60, fats: 8 } },
      { title: 'Tortilla de papa ligera', foods: ['2 huevos', '180 g de claras', '180 g de papa cocida', 'cebolla y tomate'], macros: { calories: 455, protein: 39, carbs: 42, fats: 13 } },
    ],
    snack: [
      { title: 'Whey con fruta', foods: ['1 scoop de whey', '1 platano pequeno', '15 g de nueces'], macros: { calories: 300, protein: 27, carbs: 30, fats: 9 } },
      { title: 'Tostada de pavo y palta', foods: ['1 rebanada de pan integral', '80 g de pavo', '35 g de palta', 'tomate'], macros: { calories: 280, protein: 25, carbs: 25, fats: 8 } },
      { title: 'Cottage con fruta', foods: ['220 g de cottage o quesillo', '1 naranja', 'zanahoria'], macros: { calories: 260, protein: 30, carbs: 28, fats: 4 } },
      { title: 'Sandwich de atun', foods: ['1 lata pequena de atun al agua', '2 rebanadas de pan integral', 'tomate y lechuga'], macros: { calories: 315, protein: 29, carbs: 35, fats: 6 } },
      { title: 'Rollitos de atun', foods: ['1 lata de atun al agua', '3 galletas de arroz', '30 g de palta', 'hojas verdes'], macros: { calories: 290, protein: 29, carbs: 27, fats: 8 } },
      { title: 'Yogur con avena', foods: ['200 g de yogur alto en proteina', '25 g de avena', '1 kiwi', '10 g de semillas de zapallo'], macros: { calories: 305, protein: 27, carbs: 38, fats: 7 } },
    ],
    lunch: [
      { title: 'Pollo con arroz', foods: ['170 g de pechuga de pollo', '230 g de arroz cocido', 'ensalada grande', '8 g de aceite de oliva'], macros: { calories: 610, protein: 50, carbs: 68, fats: 14 } },
      { title: 'Carne magra con papas', foods: ['160 g de carne magra', '320 g de papas cocidas', 'brocoli', '5 g de aceite de oliva'], macros: { calories: 590, protein: 45, carbs: 62, fats: 17 } },
      { title: 'Legumbres con atun', foods: ['180 g de legumbres cocidas', '1 lata de atun al agua', 'ensalada', '8 g de aceite de oliva'], macros: { calories: 560, protein: 43, carbs: 58, fats: 15 } },
      { title: 'Chili de pavo y porotos', foods: ['170 g de pavo molido magro', '150 g de porotos cocidos', '120 g de arroz cocido', 'tomate y pimenton'], macros: { calories: 625, protein: 50, carbs: 70, fats: 13 } },
      { title: 'Pollo con fideos', foods: ['180 g de pechuga de pollo', '220 g de fideos cocidos', 'salsa de tomate casera', 'ensalada'], macros: { calories: 575, protein: 52, carbs: 70, fats: 8 } },
      { title: 'Atun con arroz y verduras', foods: ['2 latas pequenas de atun al agua', '200 g de arroz cocido', 'verduras salteadas', '5 g de aceite'], macros: { calories: 610, protein: 48, carbs: 72, fats: 11 } },
    ],
    preworkout: [
      { title: 'Yogur preentreno', foods: ['200 g de yogur griego alto en proteina', '1 platano', '35 g de avena'], macros: { calories: 380, protein: 32, carbs: 55, fats: 5 } },
      { title: 'Sandwich de pavo', foods: ['2 rebanadas de pan integral', '90 g de pavo', '1 fruta'], macros: { calories: 360, protein: 30, carbs: 52, fats: 4 } },
      { title: 'Batido de whey y avena', foods: ['1 scoop de whey', '40 g de avena', '1 platano', 'agua'], macros: { calories: 390, protein: 31, carbs: 58, fats: 5 } },
      { title: 'Arroz con leche y whey', foods: ['180 g de arroz cocido', '200 ml de leche descremada', '1/2 scoop de whey', 'canela'], macros: { calories: 375, protein: 27, carbs: 64, fats: 3 } },
      { title: 'Wrap de pollo ligero', foods: ['1 tortilla integral', '100 g de pollo cocido', 'lechuga y tomate', 'salsa de yogur'], macros: { calories: 365, protein: 35, carbs: 39, fats: 7 } },
      { title: 'Platano con yogur y cereal', foods: ['220 g de yogur alto en proteina', '1 platano', '30 g de cereal de arroz', '10 g de mani'], macros: { calories: 395, protein: 29, carbs: 63, fats: 7 } },
    ],
    dinner: [
      { title: 'Cena de pescado blanco', foods: ['200 g de merluza', '220 g de papas cocidas', 'ensalada grande', '8 g de aceite de oliva'], macros: { calories: 490, protein: 45, carbs: 42, fats: 14 } },
      { title: 'Pollo con arroz y verduras', foods: ['160 g de pechuga de pollo', '150 g de arroz cocido', 'verduras salteadas', '8 g de aceite de oliva'], macros: { calories: 500, protein: 45, carbs: 45, fats: 14 } },
      { title: 'Omelette para la cena', foods: ['2 huevos', '180 g de claras', 'espinaca', '1 rebanada de pan integral'], macros: { calories: 420, protein: 38, carbs: 28, fats: 16 } },
      { title: 'Carne molida con arroz', foods: ['170 g de carne molida magra', '170 g de arroz cocido', 'tomate y cebolla', 'ensalada'], macros: { calories: 535, protein: 43, carbs: 56, fats: 15 } },
      { title: 'Jurel con papas', foods: ['1 tarro de jurel al agua', '250 g de papas cocidas', 'ensalada de tomate y cebolla'], macros: { calories: 520, protein: 40, carbs: 52, fats: 14 } },
      { title: 'Tortilla de atun', foods: ['1 lata de atun al agua', '2 huevos', '200 g de papas cocidas', 'ensalada'], macros: { calories: 485, protein: 42, carbs: 43, fats: 14 } },
    ],
  },
  bulk: {
    breakfast: [
      { title: 'Avena proteica grande', foods: ['85 g de avena', '1 scoop de whey', '1 platano', '15 g de mantequilla de mani'], macros: { calories: 620, protein: 40, carbs: 82, fats: 16 } },
      { title: 'Huevos con tostadas y fruta', foods: ['2 huevos', '150 g de claras', '3 rebanadas de pan integral', '1 fruta'], macros: { calories: 610, protein: 43, carbs: 72, fats: 16 } },
      { title: 'Bowl de yogur con avena', foods: ['300 g de yogur griego alto en proteina', '70 g de avena', '1 platano', '15 g de almendras'], macros: { calories: 650, protein: 48, carbs: 88, fats: 13 } },
      { title: 'Avena con leche y huevos', foods: ['75 g de avena', '250 ml de leche descremada', '3 huevos', '1 platano'], macros: { calories: 650, protein: 38, carbs: 88, fats: 18 } },
      { title: 'Yogur con avena y fruta', foods: ['300 g de yogur alto en proteina', '70 g de avena', '1 platano', '15 g de mani'], macros: { calories: 640, protein: 44, carbs: 94, fats: 14 } },
      { title: 'Tortilla de papa y pan', foods: ['2 huevos', '220 g de claras', '250 g de papa cocida', '2 rebanadas de pan integral'], macros: { calories: 670, protein: 50, carbs: 83, fats: 15 } },
    ],
    snack: [
      { title: 'Whey con nueces y platano', foods: ['1 scoop de whey', '1 platano', '25 g de nueces'], macros: { calories: 400, protein: 29, carbs: 36, fats: 17 } },
      { title: 'Sandwich de pavo y palta', foods: ['2 rebanadas de pan integral', '100 g de pavo', '60 g de palta', 'tomate'], macros: { calories: 430, protein: 34, carbs: 45, fats: 13 } },
      { title: 'Cottage con galletas de arroz', foods: ['250 g de cottage o quesillo', '3 galletas de arroz', '1 fruta'], macros: { calories: 390, protein: 35, carbs: 50, fats: 6 } },
      { title: 'Sandwich grande de atun', foods: ['1 lata grande de atun al agua', '3 rebanadas de pan integral', 'tomate y lechuga', '30 g de palta'], macros: { calories: 450, protein: 37, carbs: 59, fats: 10 } },
      { title: 'Rollitos de atun y arroz', foods: ['1 lata grande de atun al agua', '4 galletas de arroz', '70 g de palta', 'tomate'], macros: { calories: 430, protein: 36, carbs: 47, fats: 13 } },
      { title: 'Yogur con cereal y semillas', foods: ['300 g de yogur alto en proteina', '50 g de cereal integral', '1 fruta', '15 g de semillas de zapallo'], macros: { calories: 445, protein: 34, carbs: 65, fats: 10 } },
    ],
    lunch: [
      { title: 'Pollo con arroz alto en carbos', foods: ['180 g de pechuga de pollo', '330 g de arroz cocido', 'ensalada', '10 g de aceite de oliva'], macros: { calories: 790, protein: 55, carbs: 100, fats: 17 } },
      { title: 'Carne con pasta', foods: ['170 g de carne magra', '280 g de pasta cocida', 'verduras', '8 g de aceite de oliva'], macros: { calories: 780, protein: 50, carbs: 95, fats: 20 } },
      { title: 'Pescado con arroz y papas', foods: ['220 g de merluza', '220 g de arroz cocido', '180 g de papas', 'verduras'], macros: { calories: 760, protein: 54, carbs: 105, fats: 12 } },
      { title: 'Chili de pavo y porotos', foods: ['200 g de pavo molido magro', '220 g de porotos cocidos', '220 g de arroz cocido', 'tomate y pimenton'], macros: { calories: 815, protein: 59, carbs: 112, fats: 15 } },
      { title: 'Pollo con fideos', foods: ['220 g de pechuga de pollo', '300 g de fideos cocidos', 'salsa de tomate casera', 'ensalada', '8 g de aceite'], macros: { calories: 790, protein: 62, carbs: 106, fats: 13 } },
      { title: 'Atun con arroz y verduras', foods: ['2 latas grandes de atun al agua', '300 g de arroz cocido', 'verduras salteadas', '8 g de aceite'], macros: { calories: 835, protein: 65, carbs: 112, fats: 14 } },
    ],
    preworkout: [
      { title: 'Yogur alto en carbos', foods: ['250 g de yogur griego alto en proteina', '65 g de avena', '1 platano'], macros: { calories: 520, protein: 40, carbs: 78, fats: 7 } },
      { title: 'Sandwich preentreno de pavo', foods: ['3 rebanadas de pan integral', '100 g de pavo', '1 fruta'], macros: { calories: 500, protein: 36, carbs: 78, fats: 6 } },
      { title: 'Batido de whey con carbos', foods: ['1 scoop de whey', '70 g de avena', '1 platano', '250 ml de leche descremada'], macros: { calories: 620, protein: 43, carbs: 92, fats: 9 } },
      { title: 'Arroz con leche y whey', foods: ['260 g de arroz cocido', '250 ml de leche descremada', '1 scoop de whey', '1 platano pequeno'], macros: { calories: 560, protein: 39, carbs: 94, fats: 5 } },
      { title: 'Sandwich de pollo y palta', foods: ['3 rebanadas de pan integral', '130 g de pollo cocido', '50 g de palta', 'tomate y lechuga'], macros: { calories: 565, protein: 46, carbs: 65, fats: 17 } },
      { title: 'Platano con yogur y cereal', foods: ['250 g de yogur alto en proteina', '1 platano grande', '55 g de cereal de arroz', '15 g de mani'], macros: { calories: 585, protein: 35, carbs: 98, fats: 10 } },
    ],
    dinner: [
      { title: 'Salmon con arroz', foods: ['170 g de salmon', '240 g de arroz cocido', 'verduras verdes'], macros: { calories: 720, protein: 42, carbs: 72, fats: 27 } },
      { title: 'Pollo con papas', foods: ['180 g de pechuga de pollo', '380 g de papas cocidas', 'ensalada', '10 g de aceite de oliva'], macros: { calories: 690, protein: 53, carbs: 78, fats: 16 } },
      { title: 'Omelette con tostadas', foods: ['2 huevos', '220 g de claras', '2 rebanadas de pan integral', 'espinaca'], macros: { calories: 560, protein: 50, carbs: 48, fats: 18 } },
      { title: 'Carne molida con fideos', foods: ['200 g de carne molida magra', '250 g de fideos cocidos', 'salsa de tomate', 'ensalada'], macros: { calories: 720, protein: 53, carbs: 82, fats: 18 } },
      { title: 'Jurel con arroz', foods: ['1 tarro grande de jurel al agua', '250 g de arroz cocido', 'ensalada chilena', '5 g de aceite'], macros: { calories: 780, protein: 48, carbs: 96, fats: 20 } },
      { title: 'Tortilla de atun con papas', foods: ['2 latas pequenas de atun al agua', '3 huevos', '300 g de papas cocidas', 'ensalada'], macros: { calories: 690, protein: 58, carbs: 73, fats: 18 } },
    ],
  },
  finalCut: {
    breakfast: [
      { title: 'Avena proteica ligera', foods: ['50 g de avena', '1 scoop de whey', '150 g de berries', '5 g de mantequilla de mani'], macros: { calories: 390, protein: 35, carbs: 50, fats: 7 } },
      { title: 'Huevos altos en proteina', foods: ['1 huevo', '220 g de claras', '1 rebanada de pan integral', 'tomate'], macros: { calories: 340, protein: 36, carbs: 24, fats: 10 } },
      { title: 'Bowl ligero de yogur', foods: ['300 g de yogur griego alto en proteina', '35 g de avena', '1 manzana'], macros: { calories: 395, protein: 45, carbs: 50, fats: 3 } },
      { title: 'Avena con leche y huevos', foods: ['40 g de avena', '200 ml de leche descremada', '2 huevos', '1/2 platano'], macros: { calories: 390, protein: 27, carbs: 48, fats: 12 } },
      { title: 'Yogur con avena y fruta', foods: ['280 g de yogur alto en proteina', '35 g de avena', '1 manzana', '5 g de mani'], macros: { calories: 375, protein: 40, carbs: 52, fats: 6 } },
      { title: 'Tortilla de papa ligera', foods: ['1 huevo', '230 g de claras', '130 g de papa cocida', 'cebolla y tomate'], macros: { calories: 365, protein: 42, carbs: 30, fats: 8 } },
    ],
    snack: [
      { title: 'Whey ligero', foods: ['1 scoop de whey', '1 fruta'], macros: { calories: 220, protein: 25, carbs: 25, fats: 2 } },
      { title: 'Tostada de pavo y tomate', foods: ['1 rebanada de pan integral', '100 g de pavo', 'tomate'], macros: { calories: 240, protein: 30, carbs: 22, fats: 3 } },
      { title: 'Cottage con verduras', foods: ['250 g de cottage o quesillo', 'zanahoria', 'pepino'], macros: { calories: 230, protein: 35, carbs: 15, fats: 4 } },
      { title: 'Sandwich pequeno de atun', foods: ['1/2 lata de atun al agua', '2 rebanadas de pan integral', 'tomate y lechuga'], macros: { calories: 235, protein: 20, carbs: 27, fats: 5 } },
      { title: 'Rollitos de atun', foods: ['1 lata de atun al agua', '2 galletas de arroz', '20 g de palta', 'hojas verdes'], macros: { calories: 245, protein: 29, carbs: 18, fats: 6 } },
      { title: 'Yogur proteico', foods: ['250 g de yogur alto en proteina', '1 kiwi', '10 g de avena'], macros: { calories: 225, protein: 27, carbs: 25, fats: 2 } },
    ],
    lunch: [
      { title: 'Pollo magro con arroz', foods: ['190 g de pechuga de pollo', '200 g de arroz cocido', 'ensalada grande', '5 g de aceite de oliva'], macros: { calories: 560, protein: 56, carbs: 58, fats: 10 } },
      { title: 'Pescado blanco con papas', foods: ['240 g de merluza', '300 g de papas cocidas', 'brocoli'], macros: { calories: 520, protein: 52, carbs: 62, fats: 4 } },
      { title: 'Ensalada de atun y arroz', foods: ['1 lata de atun al agua', '180 g de arroz cocido', 'ensalada grande', '5 g de aceite de oliva'], macros: { calories: 520, protein: 42, carbs: 64, fats: 10 } },
      { title: 'Chili magro de pavo', foods: ['190 g de pavo molido magro', '130 g de porotos cocidos', '100 g de arroz cocido', 'tomate y pimenton'], macros: { calories: 575, protein: 54, carbs: 58, fats: 10 } },
      { title: 'Pollo con fideos', foods: ['220 g de pechuga de pollo', '180 g de fideos cocidos', 'salsa de tomate casera', 'ensalada'], macros: { calories: 535, protein: 62, carbs: 57, fats: 7 } },
      { title: 'Atun con arroz y verduras', foods: ['2 latas pequenas de atun al agua', '170 g de arroz cocido', 'verduras salteadas', '5 g de aceite'], macros: { calories: 585, protein: 55, carbs: 63, fats: 9 } },
    ],
    preworkout: [
      { title: 'Yogur preentreno ligero', foods: ['220 g de yogur griego alto en proteina', '1 platano', '25 g de avena'], macros: { calories: 330, protein: 34, carbs: 48, fats: 3 } },
      { title: 'Sandwich magro de pavo', foods: ['2 rebanadas de pan integral', '100 g de pavo'], macros: { calories: 310, protein: 34, carbs: 38, fats: 3 } },
      { title: 'Batido de whey y platano', foods: ['1 scoop de whey', '1 platano', 'agua'], macros: { calories: 260, protein: 25, carbs: 33, fats: 2 } },
      { title: 'Arroz con leche y whey', foods: ['150 g de arroz cocido', '200 ml de leche descremada', '1/2 scoop de whey', 'canela'], macros: { calories: 335, protein: 25, carbs: 56, fats: 3 } },
      { title: 'Wrap de pollo magro', foods: ['1 tortilla integral pequena', '100 g de pollo cocido', 'lechuga y tomate', 'salsa de yogur'], macros: { calories: 325, protein: 34, carbs: 34, fats: 5 } },
      { title: 'Platano con yogur', foods: ['220 g de yogur alto en proteina', '1 platano pequeno', '20 g de cereal de arroz'], macros: { calories: 305, protein: 28, carbs: 48, fats: 3 } },
    ],
    dinner: [
      { title: 'Pescado con ensalada', foods: ['240 g de merluza', '180 g de papas cocidas', 'ensalada grande', '8 g de aceite de oliva'], macros: { calories: 440, protein: 52, carbs: 34, fats: 10 } },
      { title: 'Pollo con verduras', foods: ['190 g de pechuga de pollo', '120 g de arroz cocido', 'verduras salteadas'], macros: { calories: 430, protein: 55, carbs: 36, fats: 5 } },
      { title: 'Omelette de definicion', foods: ['1 huevo', '250 g de claras', 'espinaca', '1 rebanada de pan integral'], macros: { calories: 360, protein: 43, carbs: 24, fats: 9 } },
      { title: 'Carne molida con arroz', foods: ['180 g de carne molida magra', '130 g de arroz cocido', 'tomate y cebolla', 'ensalada'], macros: { calories: 485, protein: 46, carbs: 42, fats: 13 } },
      { title: 'Jurel con papas', foods: ['1 tarro de jurel al agua', '180 g de papas cocidas', 'ensalada de tomate y cebolla'], macros: { calories: 490, protein: 39, carbs: 39, fats: 15 } },
      { title: 'Tortilla de atun', foods: ['1 lata de atun al agua', '2 huevos', '150 g de papas cocidas', 'ensalada'], macros: { calories: 425, protein: 42, carbs: 34, fats: 12 } },
    ],
  },
}

function getMealsForPlan(nutritionId: NutritionPlanId): Meal[] {
  return baseMeals.map((meal) => ({
    ...meal,
    examples: readyMealExamples[nutritionId][meal.id],
  }))
}

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
    meals: getMealsForPlan('cut'),
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
    meals: getMealsForPlan('bulk'),
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
    meals: getMealsForPlan('finalCut'),
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
