import { formattedDate } from '../utils/formattedDate'

describe('Token Generator', function () {
  test('The format date cannot be equal to anything', () => {
    expect(formattedDate('2022-07-21')).not.toBe('')
  })

  test('The data formated is string', () => {
    expect(typeof formattedDate('2022-07-21')).toBe('string')
  })

  test('The data formated 20/07/22', () => {
    expect(formattedDate('2022-07-20')).toBe('07/20/2022')
  })
})
