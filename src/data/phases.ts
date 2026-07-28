import type { FitnessPhase, PhaseId } from '../types/fitness'

export const phases: FitnessPhase[] = [
  {
    id: 'phase-1',
    shortName: 'Fase 1',
    title: 'Definicion inicial',
    subtitle: 'Bajar grasa sin perder fuerza ni habitos sostenibles.',
    accent: 'orange',
    duration: '4-6 meses',
    objective: 'Bajar aproximadamente de 20% a 13-14% de grasa corporal manteniendo masa muscular.',
    dashboardSummary: 'El objetivo es reducir grasa mientras conservas la mayor cantidad posible de fuerza y masa muscular.',
    bodyFatGoal: '13-14%',
    priorities: ['Mantener cargas', 'Mejorar tecnica', 'Recuperacion estable', 'Pasos diarios', 'Control del deficit'],
    trainingGoal: 'Mantener músculo y fuerza durante el déficit.',
    trainingAdjustments: [
      'Mantener las cargas siempre que sea posible.',
      'Trabajar con una o dos repeticiones en reserva en la mayoria de las series.',
      'Priorizar tecnica, recorrido y control.',
      'No aumentar el volumen si la recuperacion empeora.',
      'Evitar el fallo en ejercicios compuestos.',
      'Priorizar sueno, pasos diarios y recuperacion.',
    ],
    nutritionId: 'cut',
  },
  {
    id: 'phase-2',
    shortName: 'Fase 2',
    title: 'Volumen limpio',
    subtitle: 'Ganar musculo lentamente con grasa bajo control.',
    accent: 'green',
    duration: '6-9 meses',
    objective: 'Aumentar fuerza y masa muscular priorizando espalda, hombros y pecho superior.',
    dashboardSummary: 'El objetivo es ganar músculo y fuerza mediante un superávit moderado y una progresión controlada.',
    bodyFatGoal: 'Ganancia controlada',
    priorities: ['Doble progresion', 'Volumen efectivo', 'Recuperacion alta', 'Forma en V', 'Ejecucion consistente'],
    trainingGoal: 'Ganar fuerza y masa muscular con progresion controlada.',
    trainingAdjustments: [
      'Aplicar doble progresion: primero repeticiones y despues peso.',
      'Subir la carga al completar el maximo del rango con buena tecnica.',
      'Buscar progresion frecuente sin sacrificar ejecucion.',
      'Anadir una serie opcional en elevaciones laterales cuando exista buena recuperacion.',
      'Anadir una serie opcional en espalda o pecho superior segun la prioridad.',
      'Mantener una o dos repeticiones en reserva en ejercicios compuestos.',
    ],
    nutritionId: 'bulk',
  },
  {
    id: 'phase-3',
    shortName: 'Fase 3',
    title: 'Definicion final',
    subtitle: 'Refinar definicion conservando el mayor musculo posible.',
    accent: 'violet',
    duration: '8-12 semanas',
    objective: 'Llegar a 10-12% de grasa corporal manteniendo intensidad y rendimiento.',
    dashboardSummary: 'El objetivo es reducir la grasa restante conservando el rendimiento y la masa muscular desarrollada.',
    bodyFatGoal: '10-12%',
    priorities: ['Intensidad estable', 'Fatiga controlada', 'Tecnica precisa', 'Recuperacion alta', 'Carga conservada'],
    trainingGoal: 'Conservar la mayor cantidad posible de fuerza y músculo.',
    trainingAdjustments: [
      'Mantener la intensidad y las cargas lo maximo posible.',
      'Reducir volumen antes que peso cuando aparezca fatiga.',
      'Evitar el fallo en ejercicios compuestos.',
      'Mantener una o dos repeticiones en reserva.',
      'No anadir volumen durante el deficit.',
      'Priorizar recuperacion y calidad de ejecucion.',
    ],
    nutritionId: 'finalCut',
  },
]

export const defaultPhaseId: PhaseId = 'phase-1'

export function getPhaseById(phaseId: PhaseId): FitnessPhase {
  return phases.find((phase) => phase.id === phaseId) ?? phases[0]
}
