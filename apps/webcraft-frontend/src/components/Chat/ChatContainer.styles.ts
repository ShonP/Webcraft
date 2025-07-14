import styled from '@emotion/styled'

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ChatHeader = styled.div`
  padding: var(--space-4);
  border-bottom: 1px solid var(--gray-6);
  background: var(--color-background);
`

export const MessagesContainer = styled.div`
  flex: 1;
  overflow: hidden;
  padding: var(--space-2);
  display: flex;
  flex-direction: column;
` 