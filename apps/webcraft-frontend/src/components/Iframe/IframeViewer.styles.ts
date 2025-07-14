import styled from '@emotion/styled'

export const IframeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const IframeHeader = styled.div`
  padding: var(--space-4);
  border-bottom: 1px solid var(--gray-6);
  background: var(--color-background);
`

export const IframeContent = styled.div`
  flex: 1;
  overflow: hidden;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
` 