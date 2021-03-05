var bday = new Date(2004, 4, 8, 5, 14, 0, 0)

const getAge = () => {
    var ageDiff = new Date(new Date().getTime() - bday.getTime())
    return Math.abs(ageDiff.getUTCFullYear() - 1970)
}

const isToday = () => {
    const now = new Date()
    return now.getDay() == 8 && now.getMonth() == 4
}

export default {
    date: bday,
    age: getAge(),
    today: isToday(),
    full: getAge() + "-year-old"
}
