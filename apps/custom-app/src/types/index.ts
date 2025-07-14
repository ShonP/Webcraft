export interface IThemeSettings {
  mode: 'light' | 'dark' | 'system'
  accentColor: string
  radius: 'none' | 'small' | 'medium' | 'large' | 'full'
}

export interface ILanguageSettings {
  locale: string
}

export interface IAppSettings {
  theme: IThemeSettings
  language: ILanguageSettings
}

export interface ISettingsContextValue {
  settings: IAppSettings
  updateThemeSettings: (settings: Partial<IThemeSettings>) => void
  updateLanguageSettings: (settings: Partial<ILanguageSettings>) => void
} 