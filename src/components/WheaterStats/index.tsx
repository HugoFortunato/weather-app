import Image from 'next/image'
import { CurrentDataTime } from '../CurrentDataTime'
import { imageConditionRender } from '../ImageCondition'
import { Search } from '../Search'
import * as S from './styles'
import { useState } from 'react'

interface iWheaterStatsProps {
  wind: number
  humidity: number
  conditions: string
  temperatureCelcius: number
  temperatureFahrenheit?: number
}
export const WheaterStats = ({
  temperatureCelcius,
  humidity,
  wind,
  conditions
}: iWheaterStatsProps) => {
  const [isCelsius, setIsCelsius] = useState(true)
  const [temperature, setTemperature] = useState('celsius')

  const temperatureFahrenheit = (temperatureCelcius * 9) / 5 + 32
  const handleToggleUnit = (currentTemperature: string) => {
    setIsCelsius(prev => !prev)

    setTemperature(currentTemperature)
  }

  return (
    <S.Container>
      <Search
        htmlFor="label"
        name="search"
        id="search"
        type="search"
        placeholder="Insert City"
      />

      <S.Stats>
        <CurrentDataTime />

        <S.TemperatureContainer>
          <S.Label>
            <S.Input
              type="radio"
              name="temperatureUnit"
              checked={isCelsius}
              onChange={() => handleToggleUnit('celsius')}
            />
            Celsius
          </S.Label>

          <S.Label>
            <S.Input
              type="radio"
              name="temperatureUnit"
              checked={!isCelsius}
              onChange={() => handleToggleUnit('fahrenheit')}
            />
            Fahrenheit
          </S.Label>
        </S.TemperatureContainer>

        <S.ImageAling>
          {imageConditionRender({ condition: conditions })}

          <S.H1>
            {temperature === 'celsius'
              ? `${Math.floor(temperatureCelcius)}°C`
              : `${Math.floor(temperatureFahrenheit)}°F`}
          </S.H1>
        </S.ImageAling>

        <S.H2>{conditions}</S.H2>
      </S.Stats>

      <S.Footer>
        <S.WeatherData>
          <S.H3>Humidity</S.H3>
          <S.P>{humidity} %</S.P>
        </S.WeatherData>

        <S.WeatherData>
          <S.H3>Wind speed</S.H3>
          <S.P>
            <Image src="/arrowWind.svg" width={25} height={15} />
            {Math.floor(wind * 3.6)} km/h
          </S.P>
        </S.WeatherData>
      </S.Footer>
    </S.Container>
  )
}
