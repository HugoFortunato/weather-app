import { imageConditionRender } from '../ImageCondition'
import * as S from './styles'

interface iWheaterPreviewProps {
  conditions: string
  className: string
  day: string
  humidity: number
  onClick: () => void
}
export const WheaterPreview = ({
  conditions,
  className,
  day,
  humidity,
  onClick
}: iWheaterPreviewProps) => {
  return (
    <>
      <S.Container data-testid={day} className={className} onClick={onClick}>
        <S.DayTitle>{day}</S.DayTitle>

        {imageConditionRender({ condition: conditions })}
        <S.HumidityTitle>Humidity</S.HumidityTitle>

        <S.Humidity>{humidity}%</S.Humidity>
      </S.Container>
    </>
  )
}
