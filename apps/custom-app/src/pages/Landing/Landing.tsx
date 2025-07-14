import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Flex, Heading, Text, Card, Button, Badge } from '@radix-ui/themes'
import { LandingContainer, HeroSection, FeatureGrid, CTASection } from './Landing.styles'

export const Landing: FC = () => {
  const { t } = useTranslation()

  return (
    <LandingContainer>
      <HeroSection>
        <Flex direction="column" gap="4" align="center">
          <Badge color="blue" size="2">Shon's website</Badge>
          <Heading size="9" style={{ textAlign: 'center' }}>
            Welcome to my website
          </Heading>
          <Text size="5" color="gray" style={{ textAlign: 'center', maxWidth: '600px' }}>
            A modern React starter template with everything you need to build amazing user experiences
          </Text>
        </Flex>
      </HeroSection>

      <FeatureGrid>
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">🎨 Beautiful Design</Heading>
            <Text>
              Built with Radix UI Themes for consistent, accessible, and beautiful components out of the box
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">🚀 Ready to Scale</Heading>
            <Text>
              TypeScript, React Router, and modern tooling configured for building production-ready applications
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">🌍 Global Ready</Heading>
            <Text>
              Internationalization support with React i18next, making your app accessible to users worldwide
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">⚡ Lightning Fast</Heading>
            <Text>
              Powered by Vite for instant development feedback and optimized production builds
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">🎯 Customizable</Heading>
            <Text>
              Theme system with dark/light mode support and customizable accent colors and layouts
            </Text>
          </Flex>
        </Card>
        
        <Card>
          <Flex direction="column" gap="3">
            <Heading size="4">📱 Responsive</Heading>
            <Text>
              Mobile-first design that works perfectly on all devices and screen sizes
            </Text>
          </Flex>
        </Card>
      </FeatureGrid>

      <CTASection>
        <Flex direction="column" gap="4" align="center">
          <Heading size="6">Ready to Get Started?</Heading>
          <Flex gap="3">
            <Button size="3" asChild>
              <Link to="/home">Explore App</Link>
            </Button>
            <Button size="3" variant="outline" asChild>
              <Link to="/settings">Customize</Link>
            </Button>
          </Flex>
        </Flex>
      </CTASection>
    </LandingContainer>
  )
}