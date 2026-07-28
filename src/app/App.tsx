import { RouterProvider } from 'react-router-dom'
import { PhaseProvider } from '../context/PhaseContext'
import { router } from './router'

export function App() {
  return (
    <PhaseProvider>
      <RouterProvider router={router} />
    </PhaseProvider>
  )
}
