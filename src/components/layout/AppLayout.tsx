import type { ReactNode } from 'react'
import { usePhase } from '../../context/phase'
import { MobileNavigation } from './MobileNavigation'
import { Sidebar } from './Sidebar'

export function AppLayout({ children }: { children: ReactNode }) {
  const { selectedPhase } = usePhase()

  return (
    <div className={`app-shell accent-${selectedPhase.accent}`}>
      <Sidebar />
      <MobileNavigation />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}
