import React, { useState, useRef, useEffect } from 'react'
import type { FC } from 'react'
import { InputContainer, InputWrapper, TextInput, SendButton } from './ChatInput.styles'

interface IChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
}

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
  </svg>
)

export const ChatInput: FC<IChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }

  useEffect(() => {
    adjustTextareaHeight()
  }, [message])

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const isDisabled = !message.trim() || isLoading

  return (
    <InputContainer>
      <InputWrapper>
        <TextInput
          ref={textareaRef}
          placeholder="Message Claude..."
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          rows={1}
        />
        <SendButton 
          type="button"
          onClick={handleSubmit}
          disabled={isDisabled}
          isDisabled={isDisabled}
        >
          {isLoading ? (
            <div style={{ width: 16, height: 16, border: '2px solid currentColor', borderTop: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          ) : (
            <SendIcon />
          )}
        </SendButton>
      </InputWrapper>
    </InputContainer>
  )
} 