export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

export const getEffectiveTheme = (mode: 'light' | 'dark' | 'system'): 'light' | 'dark' => {
  if (mode === 'system') {
    return getSystemTheme()
  }
  return mode
}

export const isRTLLanguage = (language: string): boolean => {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'yi']
  return rtlLanguages.includes(language)
} 