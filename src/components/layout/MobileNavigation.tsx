import { Activity, Apple, Dumbbell, LayoutDashboard } from 'lucide-react'
import { NavLink } from '../../app/navigation'
import { PhaseSelector } from './PhaseSelector'

const navItems = [
  { to: '/', label: 'Resumen', icon: LayoutDashboard, end: true },
  { to: '/rutina', label: 'Rutina', icon: Dumbbell, end: false },
  { to: '/alimentacion', label: 'Comidas', icon: Apple, end: false },
]

export function MobileNavigation() {
  return (
    <>
      <header className="mobile-header">
        <div className="brand">
          <span className="brand__mark">
            <Activity size={20} aria-hidden="true" />
          </span>
          <strong>Fit OS</strong>
        </div>
        <PhaseSelector />
      </header>
      <nav className="mobile-nav" aria-label="Navegacion movil">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink className="mobile-nav__link" end={end} key={to} to={to}>
            <Icon size={19} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}
