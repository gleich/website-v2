import dayjs, { Dayjs } from 'dayjs'

const bday = dayjs('2004/04/08')

const startedCoding = dayjs('2019/01/19')

function yearsSince(date: Dayjs): number {
  const roundPlaces = 7
  const value =
    (dayjs().diff(date, 'years', true) * Math.pow(10, roundPlaces)) /
    Math.pow(10, roundPlaces)
  return value
}

const isToday = (): boolean => {
  const now = new Date()
  return now.getDay() == bday.day() && now.getMonth() == bday.month()
}

export default {
  bday: bday,
  age: yearsSince(bday),
  today: isToday(),
  full: Math.trunc(yearsSince(bday)) + '-year-old',
  startedCoding: startedCoding,
  yearsSince: yearsSince,
}
