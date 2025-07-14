import styled from '@emotion/styled'

export const PageContainer = styled.div`
  padding: var(--space-6);
  max-width: 800px;
  margin-inline: auto;
`

interface IColorButtonProps {
  color: string
  isSelected: boolean
}

export const ColorButton = styled.button<IColorButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-2);
  border: 2px solid ${props => props.isSelected ? `var(--${props.color}-9)` : 'var(--gray-6)'};
  background: var(--${props => props.color}-9);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
  }
` 