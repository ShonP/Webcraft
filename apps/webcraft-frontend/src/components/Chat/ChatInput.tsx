import React, { useState } from 'react'
import type { FC } from 'react'
import { Button, TextArea, Flex } from '@radix-ui/themes'
import { InputContainer } from './ChatInput.styles'

interface IChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
}

export const ChatInput: FC<IChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <InputContainer>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <TextArea
            placeholder="Type your message... (Enter to send, Shift+Enter for new line)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            disabled={isLoading}
          />
          <Flex justify="end">
            <Button 
              type="submit" 
              disabled={!message.trim() || isLoading}
              loading={isLoading}
            >
              Send
            </Button>
          </Flex>
        </Flex>
      </form>
    </InputContainer>
  )
} 