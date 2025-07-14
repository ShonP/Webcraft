import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex, Heading, Card, Text, Select, RadioGroup, Grid } from '@radix-ui/themes'
import { useSettingsContext } from '../../context/SettingsContext'
import { THEME_COLORS, BORDER_RADIUS_OPTIONS, LANGUAGES } from '../../constants'
import { PageContainer, ColorButton } from './Settings.styles'

export const Settings: FC = () => {
  const { t } = useTranslation()
  const { settings, updateThemeSettings, updateLanguageSettings } = useSettingsContext()

  return (
    <PageContainer>
      <Flex direction="column" gap="6">
        <Heading size="8">{t('settings.title')}</Heading>
        
        <Card>
          <Flex direction="column" gap="4">
            <Heading size="6">{t('settings.theme.title')}</Heading>
            
            <Flex direction="column" gap="3">
              <Text weight="medium">Theme Mode</Text>
              <RadioGroup.Root
                value={settings.theme.mode}
                onValueChange={(value) => updateThemeSettings({ mode: value as 'light' | 'dark' | 'system' })}
              >
                <Flex gap="4">
                  <RadioGroup.Item value="light">{t('settings.theme.light')}</RadioGroup.Item>
                  <RadioGroup.Item value="dark">{t('settings.theme.dark')}</RadioGroup.Item>
                  <RadioGroup.Item value="system">{t('settings.theme.system')}</RadioGroup.Item>
                </Flex>
              </RadioGroup.Root>
            </Flex>

            <Flex direction="column" gap="3">
              <Text weight="medium">{t('settings.appearance.accent_color')}</Text>
              <Grid columns="6" gap="2">
                {THEME_COLORS.map((color) => (
                  <ColorButton
                    key={color}
                    onClick={() => updateThemeSettings({ accentColor: color })}
                    isSelected={settings.theme.accentColor === color}
                    color={color}
                  />
                ))}
              </Grid>
            </Flex>

            <Flex direction="column" gap="3">
              <Text weight="medium">{t('settings.appearance.radius')}</Text>
              <Select.Root
                value={settings.theme.radius}
                onValueChange={(value) => updateThemeSettings({ radius: value as 'none' | 'small' | 'medium' | 'large' | 'full' })}
              >
                <Select.Trigger />
                <Select.Content>
                  {BORDER_RADIUS_OPTIONS.map((option) => (
                    <Select.Item key={option.value} value={option.value}>
                      {option.label}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>
        </Card>

        <Card>
          <Flex direction="column" gap="4">
            <Heading size="6">{t('settings.language.title')}</Heading>
            
            <Flex direction="column" gap="3">
              <Text weight="medium">Language</Text>
              <Select.Root
                value={settings.language.locale}
                onValueChange={(value) => updateLanguageSettings({ locale: value })}
              >
                <Select.Trigger />
                <Select.Content>
                  {LANGUAGES.map((lang) => (
                    <Select.Item key={lang.code} value={lang.code}>
                      {lang.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </PageContainer>
  )
} 