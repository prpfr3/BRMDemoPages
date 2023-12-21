const left = document.querySelector('.left')
const center = document.querySelector('.center')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

/* mouseenter event is basically a hover */
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

center.addEventListener('mouseenter', () => container.classList.add('hover-center'))
center.addEventListener('mouseleave', () => container.classList.remove('hover-center'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))