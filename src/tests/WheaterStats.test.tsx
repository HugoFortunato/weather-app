import React from 'react'
import { render } from '@testing-library/react'
import { WheaterStats } from '../components/WheaterStats'

const data = {
  conditions: 'Poucas nuvens',
  temperatureCelcius: 21,
  humidity: 44,
  wind: 10
}

describe('WheaterStats Test', () => {
  test('Testing if it can get the "Insert City" text from the placeholder input in Wheater Stats Component', () => {
    const { getByPlaceholderText } = render(
      <WheaterStats
        conditions={data.conditions}
        temperatureCelcius={data.temperatureCelcius}
        humidity={data.humidity}
        wind={data.wind}
      />
    )
    const getPlaceholder = getByPlaceholderText('Insert City')
    expect(getPlaceholder).toBeInTheDocument()
  })

  test('Testing manages to get the value of celsius in wheater stats', () => {
    const { getByText } = render(
      <WheaterStats
        conditions={data.conditions}
        temperatureCelcius={data.temperatureCelcius}
        humidity={data.humidity}
        wind={data.wind}
      />
    )
    const getCelsiusText = getByText(/°c/i)
    expect(getCelsiusText).toBeInTheDocument()
  })

  test('Testing if an heading tag "Humidity" exists in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions={data.conditions}
        temperatureCelcius={data.temperatureCelcius}
        humidity={data.humidity}
        wind={data.wind}
      />
    )
    const getHumidity = getByText('Humidity')
    expect(getHumidity).toBeInTheDocument()
  })

  test('Testing if get the text "%" in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions={data.conditions}
        temperatureCelcius={data.temperatureCelcius}
        humidity={data.humidity}
        wind={data.wind}
      />
    )
    const getPercent = getByText(/%/i)
    expect(getPercent).toBeInTheDocument()
  })

  test('Testing if an heading tag "Wind speed" exists in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions={data.conditions}
        temperatureCelcius={data.temperatureCelcius}
        humidity={data.humidity}
        wind={data.wind}
      />
    )
    const getWPH = getByText('Wind speed')
    expect(getWPH).toBeInTheDocument()
  })

  test('Testing if get the text "km/h" in the Wheater Stats component', () => {
    const { getByText } = render(
      <WheaterStats
        conditions={data.conditions}
        temperatureCelcius={data.temperatureCelcius}
        humidity={data.humidity}
        wind={data.wind}
      />
    )
    const getKmPerHour = getByText(/km\/h/i)
    expect(getKmPerHour).toBeInTheDocument()
  })
})
