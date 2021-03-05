const bday = new Date(2004, 4, 8, 5, 14, 0, 0)

const getAge = (): number => {
  const ageDiff = new Date(new Date().getTime() - bday.getTime())
  return Math.abs(ageDiff.getUTCFullYear() - 1970)
}

const isToday = (): boolean => {
  const now = new Date()
  return now.getDay() == bday.getDay() && now.getMonth() == bday.getMonth()
}

export default {
  date: bday,
  age: getAge(),
  today: isToday(),
  full: getAge() + '-year-old',
}
