import styled from '@emotion/styled'

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const LeftPanel = styled.div`
  flex: 1;
  min-width: 400px;
  border-right: 1px solid var(--gray-6);
  background: var(--color-background);
`

export const RightPanel = styled.div`
  flex: 2;
  background: var(--gray-2);
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
` 