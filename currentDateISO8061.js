// Convert current date to ISO8061 (YYY-MM-DDThh:mm)
const convertedDate = addHours => {

    if(typeof addHours !== 'number' && addHours !== undefined) {
        return null
    }

    const currentDate = new Date()
    const estimatedHour = currentDate.getHours() + addHours
    const month = (currentDate.getMonth() + 1) < 10 ?
        `0${(currentDate.getMonth() + 1)}` :
        (currentDate.getMonth() + 1)

    const hours = addHours === undefined ?
        currentDate.getHours() :
        estimatedHour > 24 ?
            estimatedHour % 24 :
            estimatedHour

    const additionalDays = estimatedHour > 24 ?
        Math.floor(estimatedHour / 24) :
        0

    const today = currentDate.getDate()
    const day = today + additionalDays < 10 ?
        `0${today + additionalDays}` :
        today + additionalDays

    const initialDate = `${currentDate.getFullYear()}-${month}-${day}T${hours < 10 ? '0' + hours : hours}:${currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes()}`

    return initialDate
}