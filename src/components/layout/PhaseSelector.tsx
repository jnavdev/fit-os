import { phases } from '../../data/phases'
import { usePhase } from '../../context/phase'
import type { PhaseId } from '../../types/fitness'

export function PhaseSelector() {
  const { selectedPhaseId, setSelectedPhaseId } = usePhase()

  return (
    <div className="phase-selector" aria-label="Selector de fase">
      {phases.map((phase) => (
        <button
          className="phase-selector__option"
          data-active={phase.id === selectedPhaseId}
          key={phase.id}
          onClick={() => setSelectedPhaseId(phase.id as PhaseId)}
          type="button"
        >
          <span className={`phase-dot phase-dot--${phase.accent}`} aria-hidden="true" />
          <span>
            <strong>{phase.shortName}</strong>
            <small>{phase.title}</small>
          </span>
        </button>
      ))}
    </div>
  )
}
