import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { IAppSettings, IThemeSettings, ILanguageSettings } from '../types'
import { DEFAULT_SETTINGS } from '../constants'

const STORAGE_KEY = 'webcraft-settings'

export const useSettings = () => {
  const { i18n } = useTranslation()
  const [settings, setSettings] = useState<IAppSettings>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : DEFAULT_SETTINGS
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  useEffect(() => {
    i18n.changeLanguage(settings.language.locale)
  }, [settings.language.locale, i18n])

  const updateThemeSettings = (themeSettings: Partial<IThemeSettings>) => {
    setSettings(prev => ({
      ...prev,
      theme: { ...prev.theme, ...themeSettings }
    }))
  }

  const updateLanguageSettings = (languageSettings: Partial<ILanguageSettings>) => {
    setSettings(prev => ({
      ...prev,
      language: { ...prev.language, ...languageSettings }
    }))
  }

  return {
    settings,
    updateThemeSettings,
    updateLanguageSettings
  }
} 