import styled from '@emotion/styled'

interface IMessageContainerProps {
  isUser: boolean
}

export const MessageContainer = styled.div<IMessageContainerProps>`
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
  margin-block: var(--space-2);
  max-width: 85%;
  align-self: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`

export const MessageBubble = styled.div<IMessageContainerProps>`
  background: ${props => props.isUser ? 'var(--accent-9)' : 'var(--gray-3)'};
  color: ${props => props.isUser ? 'white' : 'var(--gray-12)'};
  padding: var(--space-4) var(--space-5);
  border-radius: 20px;
  border-top-${props => props.isUser ? 'right' : 'left'}-radius: 8px;
  max-width: 100%;
  word-wrap: break-word;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  p {
    font-size: 16px;
    line-height: 1.4;
    margin: 0;
    white-space: pre-wrap;
  }
`

export const MessageStatus = styled.div`
  margin-top: var(--space-2);
  font-size: 13px;
  opacity: 0.7;
`

export const MessageAvatar = styled.div<IMessageContainerProps>`
  flex-shrink: 0;
  order: ${props => props.isUser ? 1 : 0};
  
  [data-radix-avatar-root] {
    width: 36px;
    height: 36px;
    border: 2px solid var(--gray-4);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
` 