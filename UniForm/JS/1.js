const intro = document.querySelector('.intro');
const logo = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        logo.forEach((textLogo, ix) => {
            setTimeout(() => {
                textLogo.classList.add('active')
            }, (ix + 1) * 400);
        })
    });
    setTimeout(() => {
        logo.forEach((textLogo, ix) => {
            setTimeout(() => {
                textLogo.classList.remove('active');
                textLogo.classList.add('fade');
            }, (ix + 1) * 400);
        }, )
    }, 1800);
    setTimeout(() => {
        intro.style.top = '-100vh'
    }, 2800)

});
const activeBt = document.querySelector('.activeBackground');
const main = document.querySelector('.main');
const mentutext = document.querySelector('.menuText');
const background = document.querySelector('.img1');
mentutext.addEventListener('click', function() {
    setTimeout(() => {
        background.classList.remove('active');
        background.classList.add('fade2');

    }, );
    setTimeout(() => {
        main.classList.remove('disable');
        main.classList.add('active1');

    }, );
}, )
let thumbnail = document.getElementsByClassName('thumbnail');
let slider = document.getElementById('slider');
let leftButton = document.getElementById('left-slide');
let rightButton = document.getElementById('right-slide');

leftButton.addEventListener('click', function() {
    slider.scrollLeft -= 125;
})

rightButton.addEventListener('click', function() {
    slider.scrollLeft += 125;
})


const maxScrollLeft = slider.scrollWidth - slider.clientWidth;


function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1
    }
}


let play = setInterval(autoPlay, 50)


for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener('mouseover', () => {
        clearInterval(play)
    })
    thumbnail[i].addEventListener('mouseout', () => {
        return play = setInterval(autoPlay, 50);
    })
}