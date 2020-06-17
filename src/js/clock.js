import moment from 'moment'

const showClock = document.querySelector(".footer__paragraph--js");
showClock.innerHTML = moment().format("MMMM Do YYYY");;