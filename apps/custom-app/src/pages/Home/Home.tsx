import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex, Heading, Text, Card } from '@radix-ui/themes'
import { PageContainer } from './Home.styles'

export const Home: FC = () => {
  const { t } = useTranslation()

  return (
    <PageContainer>
      <Flex direction="column" gap="6">
        <Heading size="8">{t('app.title')}</Heading>
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="6">Welcome to your starter app!</Heading>
            <Text>
              This is a fully configured React app with:
            </Text>
            <Flex direction="column" gap="2" style={{ marginInlineStart: 'var(--space-4)' }}>
              <Text>• Radix UI Themes for beautiful components</Text>
              <Text>• React Router for navigation</Text>
              <Text>• React i18next for internationalization</Text>
              <Text>• Settings page for theme and language configuration</Text>
              <Text>• Emotion for custom styling</Text>
              <Text>• TypeScript for type safety</Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </PageContainer>
  )
} 