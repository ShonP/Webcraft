import React from 'react'
import type { FC } from 'react'
import { Text, Avatar, Flex } from '@radix-ui/themes'
import type { IChatMessage } from '../../types'
import { MessageContainer, MessageContent, MessageAvatar } from './ChatMessage.styles'

interface IChatMessageProps {
  message: IChatMessage
}

export const ChatMessage: FC<IChatMessageProps> = ({ message }) => {
  return (
    <MessageContainer isUser={message.isUser}>
      <Flex gap="3" align="start">
        <MessageAvatar>
          <Avatar
            size="2"
            fallback={message.isUser ? 'U' : 'C'}
            color={message.isUser ? 'blue' : 'green'}
          />
        </MessageAvatar>
        <MessageContent>
          <Text size="2">{message.content}</Text>
          {message.status === 'sending' && (
            <Text size="1" color="gray">Sending...</Text>
          )}
          {message.status === 'error' && (
            <Text size="1" color="red">Failed to send</Text>
          )}
        </MessageContent>
      </Flex>
    </MessageContainer>
  )
} 