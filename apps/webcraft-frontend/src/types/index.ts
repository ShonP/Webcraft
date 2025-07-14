export interface IChatMessage {
  id: string
  content: string
  timestamp: Date
  isUser: boolean
  status: 'sending' | 'sent' | 'error'
}

export interface IClaudeResponse {
  success: boolean
  output: string
  error?: string
} 