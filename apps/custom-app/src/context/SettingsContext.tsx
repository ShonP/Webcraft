import React, { createContext, useContext, FC, ReactNode } from 'react'
import { ISettingsContextValue } from '../types'
import { useSettings } from '../hooks/useSettings'

interface ISettingsProviderProps {
  children: ReactNode
}

const SettingsContext = createContext<ISettingsContextValue | undefined>(undefined)

export const SettingsProvider: FC<ISettingsProviderProps> = ({ children }) => {
  const settingsValue = useSettings()

  return (
    <SettingsContext.Provider value={settingsValue}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettingsContext = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider')
  }
  return context
} 