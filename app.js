const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const expires = document.querySelector('.info h3')
const timer = document.querySelector('.timer')
const items = document.querySelectorAll('.timer h4')

const expiresDate = new Date(2023, 11, 24, 23, 59, 0)

const year = expiresDate.getFullYear()
const hours = expiresDate.getHours()
const minutes = expiresDate.getMinutes()
const month = expiresDate.getMonth()
const date = expiresDate.getDate()
const day = expiresDate.getDay()

expires.textContent = `giveaway offer expires ${days[day]}, ${months[month]} ${date}, ${year} at ${hours}:${minutes}`

setInterval(update, 1000)

function update() {
    const remaining = getTimeRemaining()

    items[0].textContent = remaining.days
    items[1].textContent = remaining.hours
    items[2].textContent = remaining.minutes
    items[3].textContent = remaining.seconds
}

function getTimeRemaining() {
    const now = new Date()
    const timems = now.getTime()
    let remaining = expiresDate.getTime() - timems

    const days = Math.floor(remaining / (24 * 60 * 60 * 1000))
    remaining = remaining - (days * 24 * 60 * 60 * 1000)
    const hours = Math.floor(remaining / (60 * 60 * 1000))
    remaining = remaining - (hours * 60 * 60 * 1000)
    const minutes = Math.floor(remaining / (60 * 1000))
    remaining = remaining - (minutes * 60 * 1000)
    const seconds = Math.floor(remaining / 1000)

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}