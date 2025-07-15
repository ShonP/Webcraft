import styled from '@emotion/styled'

export const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--gray-1);
  position: relative;
`

export const IframeHeader = styled.div`
  padding: var(--space-5) var(--space-6);
  background: var(--color-background);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--gray-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  flex: 1;
  min-width: 0;
  
  h2 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin: 0;
  }
`

export const ViewportSize = styled.div`
  font-size: 13px;
  color: var(--gray-10);
  font-weight: 500;
`

export const ViewportButtons = styled.div`
  display: flex;
  gap: var(--space-2);
  align-items: center;
  flex-shrink: 0;
  margin-left: var(--space-4);
`

export const ViewportButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? 'var(--accent-9)' : 'var(--gray-3)'};
  color: ${props => props.isActive ? 'white' : 'var(--gray-11)'};
  border: none;
  border-radius: 8px;
  padding: var(--space-2) var(--space-3);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: var(--space-1);
  
  &:hover {
    background: ${props => props.isActive ? 'var(--accent-10)' : 'var(--gray-4)'};
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`

export const IframeContent = styled.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-4);
  position: relative;
`

export const IframeWrapper = styled.div<{ width: string; height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: 100%;
  max-height: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
  }
`

export const LoadingOverlay = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-4);
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 10;
`

export const LoadingSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid var(--accent-9);
  border-radius: 50%;
  animation: spin 1s linear infinite;
`

export const LoadingText = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.01em;
`

export const LoadingSubtext = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  text-align: center;
  margin-top: var(--space-1);
` 