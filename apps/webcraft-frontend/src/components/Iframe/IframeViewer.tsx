import React, { useState } from 'react'
import type { FC } from 'react'
import { Heading } from '@radix-ui/themes'
import { IframeContainer, IframeHeader, IframeContent, IframeWrapper, ViewportButtons, ViewportButton, HeaderLeft, ViewportSize, LoadingOverlay, LoadingSpinner, LoadingText, LoadingSubtext } from './IframeViewer.styles'

interface IIframeViewerProps {
  src?: string
  title?: string
  isLoading?: boolean
}

type ViewportType = 'desktop' | 'tablet' | 'mobile'

interface IViewport {
  type: ViewportType
  width: string
  height: string
  label: string
  icon: React.ReactNode
}

const DesktopIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
  </svg>
)

const TabletIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 1H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H5V5h14v14z"/>
  </svg>
)

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>
  </svg>
)

const viewports: IViewport[] = [
  {
    type: 'desktop',
    width: '100%',
    height: '100%',
    label: 'Responsive',
    icon: <DesktopIcon />
  },
  {
    type: 'tablet',
    width: '768px',
    height: '1024px',
    label: '768 × 1024px',
    icon: <TabletIcon />
  },
  {
    type: 'mobile',
    width: '375px',
    height: '667px',
    label: '375 × 667px',
    icon: <MobileIcon />
  }
]

export const IframeViewer: FC<IIframeViewerProps> = ({ 
  src = 'http://localhost:5173',
  title = 'Custom App Preview',
  isLoading = false
}) => {
  const [activeViewport, setActiveViewport] = useState<ViewportType>('desktop')
  
  const currentViewport = viewports.find(v => v.type === activeViewport)!

  return (
    <IframeContainer>
      <IframeHeader>
        <HeaderLeft>
          <Heading size="6">{title}</Heading>
          <ViewportSize>{currentViewport.label}</ViewportSize>
        </HeaderLeft>
        <ViewportButtons>
          {viewports.map((viewport) => (
            <ViewportButton
              key={viewport.type}
              isActive={activeViewport === viewport.type}
              onClick={() => setActiveViewport(viewport.type)}
              title={viewport.label}
            >
              {viewport.icon}
              {viewport.type.charAt(0).toUpperCase() + viewport.type.slice(1)}
            </ViewportButton>
          ))}
        </ViewportButtons>
      </IframeHeader>
      
      <IframeContent>
        <IframeWrapper 
          width={currentViewport.width} 
          height={currentViewport.height}
        >
          <iframe 
            src={src}
            title={title}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </IframeWrapper>
        
        <LoadingOverlay isVisible={isLoading}>
          <LoadingSpinner />
          <div>
            <LoadingText>We are enhancing your experience</LoadingText>
            <LoadingSubtext>Claude is working on your request...</LoadingSubtext>
          </div>
        </LoadingOverlay>
      </IframeContent>
    </IframeContainer>
  )
} 