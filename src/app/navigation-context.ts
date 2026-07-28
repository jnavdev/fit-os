import { createContext, useContext } from 'react'

export type NavigationContextValue = {
  pathname: string
  navigate: (to: string) => void
}

export const NavigationContext = createContext<NavigationContextValue | null>(null)

export function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.replace(/\/+$/, '')
}

export function useNavigation() {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }

  return context
}
