import React from 'react'
import type { FC } from 'react'
import { Heading } from '@radix-ui/themes'
import { IframeContainer, IframeHeader, IframeContent } from './IframeViewer.styles'

interface IIframeViewerProps {
  src?: string
  title?: string
}

export const IframeViewer: FC<IIframeViewerProps> = ({ 
  src = 'http://localhost:5173',
  title = 'Custom App Preview'
}) => {
  return (
    <IframeContainer>
      <IframeHeader>
        <Heading size="4">{title}</Heading>
      </IframeHeader>
      <IframeContent>
        <iframe 
          src={src}
          title={title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </IframeContent>
    </IframeContainer>
  )
} 