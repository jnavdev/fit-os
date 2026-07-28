import { type AnchorHTMLAttributes, type MouseEvent, type ReactNode, useEffect, useMemo, useState } from 'react'
import { NavigationContext, type NavigationContextValue, normalizePath, useNavigation } from './navigation-context'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
}

type NavLinkProps = LinkProps & {
  end?: boolean
}

function getCurrentPathname() {
  return normalizePath(window.location.pathname)
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(getCurrentPathname)

  useEffect(() => {
    const handlePopState = () => setPathname(getCurrentPathname())

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const value = useMemo<NavigationContextValue>(
    () => ({
      pathname,
      navigate: (to: string) => {
        const nextPath = normalizePath(to)

        if (nextPath !== getCurrentPathname()) {
          window.history.pushState(null, '', nextPath)
          setPathname(nextPath)
        }
      },
    }),
    [pathname],
  )

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

export function Link({ children, onClick, to, ...props }: LinkProps) {
  const { navigate } = useNavigation()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      props.target
    ) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}

export function NavLink({ className, end = false, to, ...props }: NavLinkProps) {
  const { pathname } = useNavigation()
  const normalizedTo = normalizePath(to)
  const isActive = end ? pathname === normalizedTo : pathname === normalizedTo || pathname.startsWith(`${normalizedTo}/`)
  const resolvedClassName = typeof className === 'string' && isActive ? `${className} active` : className

  return <Link aria-current={isActive ? 'page' : undefined} className={resolvedClassName} to={to} {...props} />
}
