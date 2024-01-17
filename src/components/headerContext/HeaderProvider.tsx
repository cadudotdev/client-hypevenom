import { HeaderContext } from './HeaderContext'

interface HeaderProviderProps {
  children: JSX.Element
}

export function HeaderProvider({ children }: HeaderProviderProps) {
  return (
    <HeaderContext.Provider value={null}>{children}</HeaderContext.Provider>
  )
}
