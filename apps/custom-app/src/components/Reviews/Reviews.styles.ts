import styled from '@emotion/styled'

export const ReviewsContainer = styled.div`
  padding: 4rem 2rem;
  background: var(--color-surface);
`

export const ReviewCard = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 380px;
  
  & > div {
    height: 100%;
  }
`

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`

export const StarsContainer = styled.div`
  display: flex;
  gap: 2px;
  color: var(--amber-9);
  flex-shrink: 0;
`