import { AppLayout } from '../components/layout/AppLayout'
import { DashboardPage } from '../pages/DashboardPage'
import { NutritionPage } from '../pages/NutritionPage'
import { RoutinePage } from '../pages/RoutinePage'
import { useNavigation } from './navigation-context'
import { NavigationProvider } from './navigation'

function CurrentPage() {
  const { pathname } = useNavigation()

  if (pathname === '/rutina') {
    return <RoutinePage />
  }

  if (pathname === '/alimentacion') {
    return <NutritionPage />
  }

  return <DashboardPage />
}

export function AppRouter() {
  return (
    <NavigationProvider>
      <AppLayout>
        <CurrentPage />
      </AppLayout>
    </NavigationProvider>
  )
}
