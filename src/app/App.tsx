import { PhaseProvider } from '../context/PhaseContext'
import { AppRouter } from './router'

export function App() {
  return (
    <PhaseProvider>
      <AppRouter />
    </PhaseProvider>
  )
}
