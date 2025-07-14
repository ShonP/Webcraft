import React, { FC, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import { SettingsProvider, useSettingsContext } from './context/SettingsContext'
import { Navigation } from './components/Navigation'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { Settings } from './pages/Settings'
import { getEffectiveTheme } from './utils/theme'
import './i18n'

const AppContent: FC = () => {
  const { settings } = useSettingsContext()
  const effectiveTheme = getEffectiveTheme(settings.theme.mode)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', effectiveTheme)
  }, [effectiveTheme])

  return (
    <Theme
      appearance={effectiveTheme}
      accentColor={settings.theme.accentColor as any}
      radius={settings.theme.radius}
    >
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </Theme>
  )
}

const App: FC = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  )
}

export default App 