const body = document.querySelector('body');
const aside = document.querySelector('aside');
const btt = document.getElementById('bttAside');

body.addEventListener('click', (event) => {
    if (!aside.contains(event.target)) {
        aside.classList.remove('asideActive');
    }
})

btt.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    aside.classList.toggle('asideActive');
})