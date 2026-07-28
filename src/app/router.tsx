import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from '../components/layout/AppLayout'
import { DashboardPage } from '../pages/DashboardPage'
import { NutritionPage } from '../pages/NutritionPage'
import { RoutinePage } from '../pages/RoutinePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'rutina', element: <RoutinePage /> },
      { path: 'alimentacion', element: <NutritionPage /> },
    ],
  },
])
