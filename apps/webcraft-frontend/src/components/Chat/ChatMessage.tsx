import React from 'react'
import type { FC } from 'react'
import { Text, Avatar } from '@radix-ui/themes'
import type { IChatMessage } from '../../types'
import { MessageContainer, MessageBubble, MessageStatus, MessageAvatar } from './ChatMessage.styles'

interface IChatMessageProps {
  message: IChatMessage
}

export const ChatMessage: FC<IChatMessageProps> = ({ message }) => {
  return (
    <MessageContainer isUser={message.isUser}>
      <MessageAvatar isUser={message.isUser}>
        <Avatar
          size="3"
          fallback={message.isUser ? 'U' : 'C'}
          color={message.isUser ? 'blue' : 'green'}
        />
      </MessageAvatar>
      <div>
        <MessageBubble isUser={message.isUser}>
          <Text as="p">{message.content}</Text>
        </MessageBubble>
        {(message.status === 'sending' || message.status === 'error') && (
          <MessageStatus>
            {message.status === 'sending' && (
              <Text size="1" color="gray">Sending...</Text>
            )}
            {message.status === 'error' && (
              <Text size="1" color="red">Failed to send</Text>
            )}
          </MessageStatus>
        )}
      </div>
    </MessageContainer>
  )
} 