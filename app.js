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