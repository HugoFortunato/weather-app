import React from 'react'
import { render } from '@testing-library/react'
import { WheaterPreview } from '../components/WheaterPreview'

const data = {
  conditions: 'Moderate rain',
  classname: 'default',
  day: 'hoje',
  humidity: 44,
  onclick: jest.fn()
}

describe('WheaterPreview Test', () => {
  test('Testing if it can get Image from Wheater Preview Component', () => {
    const { getByRole } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImg = getByRole('img')
    expect(getImg).toBeInTheDocument()
  })

  test('Testing if an image Alt Text exists in the Wheater Preview component', () => {
    const { getByRole } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByRole('img', {
      name: 'Wheater Icon'
    })
    expect(getImage).toBeInTheDocument()
  })

  test('Testing if an heading tag "Humidity" exists in the Wheater Preview component', () => {
    const { getByText } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getHeading = getByText(/humidity/i)
    expect(getHeading).toBeInTheDocument()
  })

  test('Testing if get the text "%" in the Wheater Preview component', () => {
    const { getByText } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getPercent = getByText(/%/i)
    expect(getPercent).toBeInTheDocument()
  })

  test('Testing if get case "Few clouds" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Few clouds"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "scattered clouds" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="scattered clouds"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "clear sky" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="clear sky"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "storm" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="storm"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "light rain" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="light rain"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Heavy rain" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Heavy rain"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case {data.conditions} in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions={data.conditions}
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Broken Clouds" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Broken Clouds"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Storm with heavy rain" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Storm with heavy rain"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })

  test('Testing if get case "Snowing" in Wheater Preview', () => {
    const { getByAltText } = render(
      <WheaterPreview
        conditions="Snowing"
        humidity={data.humidity}
        className={data.classname}
        day={data.day}
        onClick={data.onclick}
      />
    )
    const getImage = getByAltText('Wheater Icon')
    expect(getImage).toHaveAttribute('src')
  })
})
