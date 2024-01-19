import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Search } from '../components/Search'

jest.mock('../contexts/weather', () => ({
  useWheater: () => ({ setLocationValue: jest.fn() })
}))

describe('Search Test', () => {
  test('Testing if it can get the "Insert City" text from the placeholder input in Search Component', () => {
    const { getByPlaceholderText } = render(
      <Search placeholder="Insert City" />
    )
    const getPlaceholder = getByPlaceholderText('Insert City')
    expect(getPlaceholder).toBeInTheDocument()
  })

  test('Testing if it can get type "searchbox" of the input from Search Component', () => {
    const { getByRole } = render(
      <Search name="search" id="search" type="search" />
    )
    const getRole = getByRole('searchbox')
    expect(getRole).toBeInTheDocument()
  })

  test('Testing if you can get the input value', () => {
    const { queryByPlaceholderText } = render(
      <Search placeholder="Insert City" />
    )
    const searchInput = queryByPlaceholderText('Insert City')
    fireEvent.change(searchInput, { target: { value: 'São Paulo' } })
    expect(searchInput.value).toBe('São Paulo')
  })

  test('Testing if the name attribute has the value "search"', () => {
    const { queryByPlaceholderText } = render(
      <Search
        name="search"
        id="search"
        type="search"
        placeholder="Insert City"
      />
    )
    const getInput = queryByPlaceholderText('Insert City')
    expect(getInput).toHaveAttribute('name', 'search')
  })

  test('Testing if get input value with key "Enter" is "Belo Horizonte"', () => {
    const { getByDisplayValue } = render(<Search />)
    const valueInput = getByDisplayValue(/são paulo/i)

    fireEvent.change(valueInput, {
      target: { value: 'Belo Horizonte' }
    })
    fireEvent.keyPress(valueInput, { key: 'Enter', charCode: 13 })
    expect(valueInput.value).toBe('Belo Horizonte')
  })

  test('Testing if get input value with key "a" is "Belo Horizonte"', () => {
    const { getByDisplayValue } = render(<Search />)
    const valueInput = getByDisplayValue(/são paulo/i)

    fireEvent.change(valueInput, {
      target: { value: 'Belo Horizonte' }
    })
    fireEvent.keyPress(valueInput, { key: 'a', charCode: 13 })
    expect(valueInput.value).toBe('Belo Horizonte')
  })
})
