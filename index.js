const toggleMenu = () => {
    document.querySelector('.res-menu').classList.toggle('active');
}



window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const showPoint = 150;

        if (sectionTop < windowHeight - showPoint) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const showPoint = 150;

        if (sectionTop < windowHeight - showPoint) {
            section.classList.add('active');
        }
    });
});



const lightModeBtn = document.getElementById('sun');
const darkModeBtn = document.getElementById('moon');

const isLightMode = localStorage.getItem('lightMode') === 'enabled';
setLightMode(isLightMode);
console.log(isLightMode)

lightModeBtn.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('lightMode', isLightMode ? 'enabled' : 'disabled');
    setLightMode(isLightMode);
});

darkModeBtn.addEventListener('click', () => {
    const isLightMode = document.body.classList.toggle('light-mode');
    localStorage.setItem('lightMode', isLightMode ? 'enabled' : 'disabled');
    setLightMode(isLightMode);
});

function setLightMode(isLightMode) {
    if (isLightMode) {
        lightModeBtn.style.display = 'none';
        darkModeBtn.style.display = 'inline-block';
        document.body.classList.add('light-mode');
    } else {
        lightModeBtn.style.display = 'inline-block';
        darkModeBtn.style.display = 'none';
        document.body.classList.remove('light-mode');
    }
}




