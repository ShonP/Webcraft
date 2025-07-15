import styled from '@emotion/styled'

export const InputContainer = styled.div`
  padding: var(--space-5) var(--space-6);
  background: var(--color-background);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--gray-4);
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-3);
  background: var(--gray-2);
  border: 1px solid var(--gray-6);
  border-radius: 24px;
  padding: var(--space-3);
  transition: all 0.2s ease;
  
  &:focus-within {
    border-color: var(--accent-8);
    box-shadow: 0 0 0 3px var(--accent-3);
    transform: translateY(-1px);
  }
`

export const TextInput = styled.textarea`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  font-size: 16px;
  line-height: 1.4;
  padding: var(--space-2) 0;
  color: var(--gray-12);
  font-family: inherit;
  min-height: 24px;
  max-height: 120px;
  
  &::placeholder {
    color: var(--gray-9);
    font-size: 16px;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`

export const SendButton = styled.button<{ isDisabled: boolean }>`
  background: ${props => props.isDisabled ? 'var(--gray-6)' : 'var(--accent-9)'};
  color: white;
  border: none;
  border-radius: 18px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover:not(:disabled) {
    background: var(--accent-10);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
` 