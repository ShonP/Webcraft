import { IAppSettings } from '../types'

export const DEFAULT_SETTINGS: IAppSettings = {
  theme: {
    mode: 'system',
    accentColor: 'blue',
    radius: 'medium'
  },
  language: {
    locale: 'en'
  }
}

export const THEME_COLORS = [
  'gray', 'gold', 'bronze', 'brown', 'yellow', 'amber', 'orange', 'tomato',
  'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet', 'iris',
  'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'lime', 'mint', 'sky'
]

export const BORDER_RADIUS_OPTIONS = [
  { value: 'none', label: 'None' },
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'full', label: 'Full' }
]

export const LANGUAGES = [
  { code: 'en', name: 'English' }
] 