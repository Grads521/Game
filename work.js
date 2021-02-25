let mainQuestion = document.createElement('div');
mainQuestion.innerText = 'Кто хочет стать миллионером?';
document.querySelector('.begin').append(mainQuestion);

let createDivStartButton = document.createElement('div');
createDivStartButton.setAttribute('class','startButton');
document.querySelector('.begin').append(createDivStartButton);

import {Game} from './src/game.js';

let game = new Game;


