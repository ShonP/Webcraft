import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';
import {
  SettingsProvider,
  useSettingsContext,
} from './context/SettingsContext';
import { Navigation } from './components/Navigation';
import { Landing } from './pages/Landing';
import { Settings } from './pages/Settings';
import { getEffectiveTheme, isRTLLanguage } from './utils/theme';
import './i18n';

const AppContent: FC = () => {
  const { settings } = useSettingsContext();
  const { i18n } = useTranslation();
  const effectiveTheme = getEffectiveTheme(settings.theme.mode);
  const isRTL = isRTLLanguage(i18n.language);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', effectiveTheme);
  }, [effectiveTheme]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  }, [isRTL]);

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
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </Theme>
  );
};

const App: FC = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
};

export default App;
