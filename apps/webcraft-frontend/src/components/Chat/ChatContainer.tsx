import React, { useState, useRef, useEffect } from 'react'
import type { FC } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Heading, ScrollArea } from '@radix-ui/themes'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { chatApi } from '../../services/api'
import type { IChatMessage } from '../../types'
import { ChatWrapper, ChatHeader, MessagesContainer } from './ChatContainer.styles'

export const ChatContainer: FC = () => {
  const [messages, setMessages] = useState<IChatMessage[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const sendMessageMutation = useMutation({
    mutationFn: chatApi.sendMessage,
    onSuccess: (data, variables) => {
      const userMessageIndex = messages.findIndex(
        msg => msg.content === variables && msg.status === 'sending'
      )
      
      if (userMessageIndex !== -1) {
        setMessages(prev => {
          const updated = [...prev]
          updated[userMessageIndex].status = 'sent'
          return updated
        })
      }

      if (data.success) {
        const claudeMessage: IChatMessage = {
          id: Date.now().toString() + '-claude',
          content: data.output,
          timestamp: new Date(),
          isUser: false,
          status: 'sent'
        }
        setMessages(prev => [...prev, claudeMessage])
      } else {
        const errorMessage: IChatMessage = {
          id: Date.now().toString() + '-error',
          content: data.error || 'An error occurred',
          timestamp: new Date(),
          isUser: false,
          status: 'error'
        }
        setMessages(prev => [...prev, errorMessage])
      }
    },
    onError: (error, variables) => {
      const userMessageIndex = messages.findIndex(
        msg => msg.content === variables && msg.status === 'sending'
      )
      
      if (userMessageIndex !== -1) {
        setMessages(prev => {
          const updated = [...prev]
          updated[userMessageIndex].status = 'error'
          return updated
        })
      }
    }
  })

  const handleSendMessage = (content: string) => {
    const userMessage: IChatMessage = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      isUser: true,
      status: 'sending'
    }
    
    setMessages(prev => [...prev, userMessage])
    sendMessageMutation.mutate(content)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <ChatWrapper>
      <ChatHeader>
        <Heading size="4">Claude Chat</Heading>
      </ChatHeader>
      
      <MessagesContainer>
        <ScrollArea style={{ height: '100%' }}>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </MessagesContainer>

      <ChatInput 
        onSendMessage={handleSendMessage}
        isLoading={sendMessageMutation.isPending}
      />
    </ChatWrapper>
  )
} 