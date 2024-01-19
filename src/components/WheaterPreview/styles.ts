import styled from 'styled-components'

export interface CardsProps {
  bgColor?: string
  color?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8.9rem;
  height: 10em;
  padding-block: 1rem 1.25rem;
  border-radius: 0.4rem;
  user-select: none;
  cursor: pointer;
`

export const HumidityTitle = styled.p`
  font-size: var(--normal-font-size);
  font-weight: var(--light);
  margin-top: 0.5rem;
`

export const Humidity = styled.h3``

export const DayTitle = styled.h1`
  font-size: var(--normal-font-size);
  font-weight: var(--bold);
  text-align: center;
  margin-bottom: 0.5rem;
`
