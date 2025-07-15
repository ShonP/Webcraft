import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Flex, Heading, Text, Card, Button, Badge } from '@radix-ui/themes'
import { LandingContainer, HeroSection, FeatureGrid, CTASection } from './Landing.styles'
import { Reviews } from '../../components/Reviews'

export const Landing: FC = () => {
  const { t } = useTranslation()

  return (
    <LandingContainer>
      <HeroSection>
        <Flex direction="column" gap="4" align="center">
          <Badge color="blue" size="2">{t('landing.hero.badge')}</Badge>
          <Heading size="9" style={{ textAlign: 'center' }}>
            {t('landing.hero.title')}
          </Heading>
          <Text size="5" color="gray" style={{ textAlign: 'center', maxWidth: '600px' }}>
            {t('landing.hero.description')}
          </Text>
        </Flex>
      </HeroSection>

      <FeatureGrid>
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">{t('landing.features.design.title')}</Heading>
            <Text>
              {t('landing.features.design.description')}
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">{t('landing.features.scale.title')}</Heading>
            <Text>
              {t('landing.features.scale.description')}
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">{t('landing.features.global.title')}</Heading>
            <Text>
              {t('landing.features.global.description')}
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">{t('landing.features.fast.title')}</Heading>
            <Text>
              {t('landing.features.fast.description')}
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">{t('landing.features.customizable.title')}</Heading>
            <Text>
              {t('landing.features.customizable.description')}
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">{t('landing.features.responsive.title')}</Heading>
            <Text>
              {t('landing.features.responsive.description')}
            </Text>
          </Flex>
        </Card>
      </FeatureGrid>

      <Reviews />

      <CTASection>
        <Flex direction="column" gap="4" align="center">
          <Heading size="6">{t('landing.cta.title')}</Heading>
          <Flex gap="3">
            <Button size="3" asChild>
              <Link to="/home">{t('landing.cta.explore')}</Link>
            </Button>
            <Button size="3" variant="outline" asChild>
              <Link to="/settings">{t('landing.cta.customize')}</Link>
            </Button>
          </Flex>
        </Flex>
      </CTASection>
    </LandingContainer>
  )
}