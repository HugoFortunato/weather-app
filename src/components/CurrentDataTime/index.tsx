import { RealTime } from './styles'
export const CurrentDataTime = () => {
  const currentDate = new Date()

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const day = daysOfWeek[currentDate.getDay()]

  const date = currentDate.getDate()

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const month = months[currentDate.getMonth()]

  const year = currentDate.getFullYear()
  const timer = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })

  return <RealTime>{`${timer}, ${day}, ${date} of ${month}, ${year}`}</RealTime>
}
