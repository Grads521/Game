import {Game} from './src/game.js';

const mainQuestion = document.createElement('div');
mainQuestion.setAttribute('class', 'nameGame');
mainQuestion.innerText = 'Кто хочет стать миллионером?';
document.querySelector('.begin').append(mainQuestion);

// const createDivStartButton = document.createElement('div');
// createDivStartButton.setAttribute('class', 'startButton');
// document.querySelector('.begin').append(createDivStartButton);

new Game();
