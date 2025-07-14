import styled from '@emotion/styled'

export const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-gray-2) 100%);
`

export const HeroSection = styled.section`
  text-align: center;
  max-width: 800px;
  margin-bottom: var(--space-8);
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-4);
  width: 100%;
  max-width: 1200px;
  margin-top: var(--space-6);
`

export const CTASection = styled.section`
  margin-top: var(--space-8);
  text-align: center;
`