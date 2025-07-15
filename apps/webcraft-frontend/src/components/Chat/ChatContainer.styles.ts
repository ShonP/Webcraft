import styled from '@emotion/styled'

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--gray-1);
`

export const ChatHeader = styled.div`
  padding: var(--space-5) var(--space-6);
  background: var(--color-background);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--gray-4);
  
  h2 {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin: 0;
  }
`

export const MessagesContainer = styled.div`
  flex: 1;
  overflow: hidden;
  padding: var(--space-4) var(--space-2);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
` 