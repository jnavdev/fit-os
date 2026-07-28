import { useMemo, useState, type ReactNode } from 'react'
import { defaultPhaseId, getPhaseById } from '../data/phases'
import type { PhaseId } from '../types/fitness'
import { PhaseContext, type PhaseContextValue } from './phase'

export function PhaseProvider({ children }: { children: ReactNode }) {
  const [selectedPhaseId, setSelectedPhaseId] = useState<PhaseId>(defaultPhaseId)

  const value = useMemo<PhaseContextValue>(
    () => ({
      selectedPhaseId,
      selectedPhase: getPhaseById(selectedPhaseId),
      setSelectedPhaseId,
    }),
    [selectedPhaseId],
  )

  return <PhaseContext.Provider value={value}>{children}</PhaseContext.Provider>
}
