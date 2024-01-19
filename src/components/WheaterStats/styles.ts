import styled from 'styled-components'

export const Container = styled.div`
  width: 20rem;
  margin-bottom: 1.25rem;
`

export const Stats = styled.div`
  text-align: center;

  h1,
  h2 {
    font-weight: var(--bold);
    font-size: var(--biggest-font-size);
    color: var(--text-black-color);
  }
  h2 {
    height: 5.625rem;
  }

  @media (max-width: 530px) {
    h2 {
      font-weight: var(--bold);
      font-size: var(--big-font-size);
    }
  }
`

export const TemperatureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`

export const Label = styled.label``

export const Input = styled.input`
  margin-right: 10px;
`

export const ImageAling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.0625rem;
  gap: 1rem;
`

export const H1 = styled.h1``

export const H2 = styled.h2``
export const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  text-align: center;
`
export const WeatherData = styled.div``

export const H3 = styled.h3`
  font-weight: var(--normal);
  color: var(--text-grey-color);
`

export const P = styled.p`
  font-size: var(--normal-font-size);
  color: var(--text-black-color);
`
