import React from 'react'
import type { FC } from 'react'
import { SplitLayout } from './components/Layout'
import { ChatContainer } from './components/Chat'
import { IframeViewer } from './components/Iframe'

const App: FC = () => {
  return (
    <SplitLayout
      leftContent={<ChatContainer />}
      rightContent={<IframeViewer />}
    />
  )
}

export default App
