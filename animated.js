const sentence = 'I am a web developer';
let counter = 0;
let splitted = sentence.split('');
const mySection = document.querySelector('section');

function comingLetters() {
   let timer= setInterval(() => {
        if (counter === splitted.length) {
            clearInterval(timer);
        }
        let span = document.createElement('span');

        if (splitted[counter] === ' ') {
            span.innerHTML = ' ';
        } else {
            span.innerHTML += splitted[counter];
        }

        mySection.appendChild(span);
        counter++;
    }, 100)
}




document.addEventListener('DOMContentLoaded', comingLetters)

