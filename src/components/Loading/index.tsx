import Image from 'next/image'
import * as S from './styles'

export const LoadingScreen = () => {
  return (
    <>
      <S.Img>
        <Image
          src={'/images/cloud.svg'}
          alt="Wheater Icon"
          width={250}
          height={500}
        />
      </S.Img>

      <S.Container>
        <S.Progress>
          <S.ProgressValue />
        </S.Progress>
      </S.Container>
    </>
  )
}
