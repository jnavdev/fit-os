import type { Supplement } from '../../types/fitness'
import { Card } from './Card'

interface SupplementListProps {
  supplements: Supplement[]
}

export function SupplementList({ supplements }: SupplementListProps) {
  return (
    <div className="supplement-grid">
      {supplements.map((supplement) => (
        <Card className="supplement-card" key={supplement.name}>
          <strong>{supplement.name}</strong>
          <span>{supplement.dose}</span>
          <p>{supplement.note}</p>
        </Card>
      ))}
    </div>
  )
}
