import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Flex, Button } from '@radix-ui/themes'
import { NavigationContainer } from './Navigation.styles'

export const Navigation: FC = () => {
  const { t } = useTranslation()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <NavigationContainer>
      <Flex gap="4" align="center">
        <Button 
          asChild 
          variant={isActive('/') ? 'solid' : 'ghost'}
        >
          <Link to="/">{t('app.navigation.home')}</Link>
        </Button>
        <Button 
          asChild 
          variant={isActive('/settings') ? 'solid' : 'ghost'}
        >
          <Link to="/settings">{t('app.navigation.settings')}</Link>
        </Button>
      </Flex>
    </NavigationContainer>
  )
} 