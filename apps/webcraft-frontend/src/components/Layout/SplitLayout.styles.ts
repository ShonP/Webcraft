import styled from '@emotion/styled'

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: var(--gray-1);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`

export const LeftPanel = styled.div`
  flex: 1;
  min-width: 450px;
  border-right: 1px solid var(--gray-4);
  background: var(--color-background);
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
`

export const RightPanel = styled.div`
  flex: 2;
  background: var(--gray-2);
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
` 