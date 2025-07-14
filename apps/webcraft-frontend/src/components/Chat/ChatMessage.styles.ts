import styled from '@emotion/styled'

interface IMessageContainerProps {
  isUser: boolean
}

export const MessageContainer = styled.div<IMessageContainerProps>`
  padding: var(--space-3);
  margin-block: var(--space-2);
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  max-width: 80%;
`

export const MessageContent = styled.div`
  background: var(--color-surface);
  padding: var(--space-3);
  border-radius: var(--radius-3);
  border: 1px solid var(--gray-6);
`

export const MessageAvatar = styled.div`
  flex-shrink: 0;
` 