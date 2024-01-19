import { useState } from 'react'
import { useWheater } from '../../contexts/weather'
import * as S from './styles'

interface iSearchProps {
  htmlFor: string
  name: string
  id: string
  type: string
  placeholder: string
}

export const Search = ({
  htmlFor,
  name,
  id,
  type,
  placeholder
}: iSearchProps) => {
  const { setLocationValue } = useWheater()
  const [inputValue, setInputValue] = useState('São Paulo')
  function handleSubmit(e: { key: string }) {
    if (e.key === 'Enter') {
      setLocationValue(inputValue)
    }
  }
  return (
    <S.Container>
      <S.Label htmlFor={htmlFor}>Location</S.Label>

      <S.Input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
        onKeyPress={handleSubmit}
      />
    </S.Container>
  )
}
