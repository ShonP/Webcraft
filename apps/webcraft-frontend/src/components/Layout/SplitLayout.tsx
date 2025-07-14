import React from 'react'
import type { FC, ReactNode } from 'react'
import { LayoutContainer, LeftPanel, RightPanel } from './SplitLayout.styles'

interface ISplitLayoutProps {
  leftContent: ReactNode
  rightContent: ReactNode
}

export const SplitLayout: FC<ISplitLayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <LayoutContainer>
      <LeftPanel>{leftContent}</LeftPanel>
      <RightPanel>{rightContent}</RightPanel>
    </LayoutContainer>
  )
} 