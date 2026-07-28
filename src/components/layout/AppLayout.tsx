import { Outlet } from 'react-router-dom'
import { usePhase } from '../../context/phase'
import { MobileNavigation } from './MobileNavigation'
import { Sidebar } from './Sidebar'

export function AppLayout() {
  const { selectedPhase } = usePhase()

  return (
    <div className={`app-shell accent-${selectedPhase.accent}`}>
      <Sidebar />
      <MobileNavigation />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}
