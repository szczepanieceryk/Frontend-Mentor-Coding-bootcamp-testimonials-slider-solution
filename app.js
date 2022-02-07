// HTML elements
const userImage = document.getElementsByClassName('img');
const userTxt = document.getElementsByClassName('txt');
const userName = document.getElementsByClassName('name')
const userOccupation = document.getElementsByClassName('occupation')
const slider = document.getElementById('slider')

// testimonials data
const userTestimonials = [
    {
        img: './images/image-tanya.jpg',
        text: ' “ I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
        name: 'Tanya Sinclair',
        occupation: 'UX Engineer'
    },
    {
        img: './images/image-john.jpg',
        text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
        name: 'John Tarkpor',
        occupation: 'Junior Front-end Developer'
    },
]

// initail data load
window.onload = () => {
    for (let i = 0; i < userTestimonials.length; i++) {
        userImage[i].src = userTestimonials[i].img;
        userTxt[i].innerText = userTestimonials[i].text
        userName[i].innerText = userTestimonials[i].name
        userOccupation[i].innerText = userTestimonials[i].occupation
    }
}

// function for slider handler
let active = 0;
slider.addEventListener('click', () => {
    active++
    if (active === userTestimonials.length) {
        active = 0;
    }
    for (let i = 0; i < userTestimonials.length; i++) {
        userImage[i].src = userTestimonials[active].img;
        userTxt[i].innerText = userTestimonials[active].text
        userName[i].innerText = userTestimonials[active].name
        userOccupation[i].innerText = userTestimonials[active].occupation
    }
})