export function formattedDate(input: string) {
  const datePart = input.split('-')

  const formattedDateToUsaTime = `${datePart[1]}/${datePart[2]}/${datePart[0]}`

  return formattedDateToUsaTime
}
