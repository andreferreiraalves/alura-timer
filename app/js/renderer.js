const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkSobre = document.querySelector('#link-sobre');
let tempo = document.querySelector('.tempo');
let botaoPlay = document.querySelector('.botao-play');

let play = false;
let imgs = ['img/play-button.svg', 'img/stop-button.svg'];

linkSobre.addEventListener('click', () => {
    ipcRenderer.send('abrir-janela-sobre');
});

botaoPlay.addEventListener('click', () => {
    if (play) {
        timer.parar();
        play = false;
    } else {
        timer.iniciar(tempo);
        play = true;
    }

    imgs = imgs.reverse();
    botaoPlay.src = imgs[0];
});