const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayAbbr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const getDaysDifference = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    return (today.getTime() - date.getTime())/(1000*3600*24)
}
export const getHoursMin = (dateString) => {
    const date = new Date(dateString)
    return date.getHours() + ':' + date.getMinutes()
}
export const getFullDay = (dateString) => {
    const date = new Date(dateString)
    const today = new Date()
    if (date.toDateString().substring(4,14) === today.toDateString().substring(4,14)) {
        return 'Today'
    }
    if(getDaysDifference(dateString) < 7) {
        return dayNames[date.getDay()]
    } else {
        return date.toDateString().substring(4,10)
    }
}
export const areSameDays = (dateString1, dateString2) => {
    const date1 = new Date(dateString1)
    const date2 = new Date(dateString2)
    if (date1.toDateString().substring(4,14) === date2.toDateString().substring(4,14)) {
        return true
    }
    return false
}
export const getDateTime = (dateString)=> {
    const date = new Date(dateString)
    const daysDiff = getDaysDifference(dateString)
    let dateTime = ''
    if (daysDiff < 1) {// returns  hours and min
        dateTime = getHoursMin(dateString)
    } else if(daysDiff < 7){
        dateTime = dayAbbr[date.getDay()]
    } else {
        dateTime = date.toDateString().substring(4,10)
    }
    return dateTime
}
