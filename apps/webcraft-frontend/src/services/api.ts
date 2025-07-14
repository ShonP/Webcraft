import axios from 'axios'
import type { IClaudeResponse } from '../types'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const chatApi = {
  sendMessage: async (prompt: string): Promise<IClaudeResponse> => {
    const response = await api.post<IClaudeResponse>('/claude', { prompt })
    return response.data
  },
}

export default api 