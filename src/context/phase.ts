import { createContext, useContext } from 'react'
import type { FitnessPhase, PhaseId } from '../types/fitness'

export interface PhaseContextValue {
  selectedPhaseId: PhaseId
  selectedPhase: FitnessPhase
  setSelectedPhaseId: (phaseId: PhaseId) => void
}

export const PhaseContext = createContext<PhaseContextValue | null>(null)

export function usePhase() {
  const context = useContext(PhaseContext)

  if (!context) {
    throw new Error('usePhase debe usarse dentro de PhaseProvider')
  }

  return context
}
