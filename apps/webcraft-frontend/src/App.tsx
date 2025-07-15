import React, { useState } from 'react'
import type { FC } from 'react'
import { SplitLayout } from './components/Layout'
import { ChatContainer } from './components/Chat'
import { IframeViewer } from './components/Iframe'

const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <SplitLayout
      leftContent={<ChatContainer onLoadingChange={setIsLoading} />}
      rightContent={<IframeViewer isLoading={isLoading} />}
    />
  )
}

export default App
