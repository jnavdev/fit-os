import { Activity, Apple, Dumbbell, LayoutDashboard } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { PhaseSelector } from './PhaseSelector'

const navItems = [
  { to: '/', label: 'Resumen', icon: LayoutDashboard, end: true },
  { to: '/rutina', label: 'Rutina', icon: Dumbbell, end: false },
  { to: '/alimentacion', label: 'Alimentacion', icon: Apple, end: false },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand__mark">
          <Activity size={21} aria-hidden="true" />
        </span>
        <div>
          <strong>Fit OS</strong>
          <small>Sistema fisico personal</small>
        </div>
      </div>
      <nav className="sidebar__nav" aria-label="Navegacion principal">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink className="nav-link" end={end} key={to} to={to}>
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar__phase">
        <span>Fase activa</span>
        <PhaseSelector />
      </div>
    </aside>
  )
}
