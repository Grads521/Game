import {Game} from './src/game.js';

const myInfo = document.createElement('div');
myInfo.setAttribute('class', 'myInfo');
document.querySelector('.begin').append(myInfo);

const mainQuestion = document.createElement('div');
mainQuestion.setAttribute('class', 'nameGame');
mainQuestion.innerText = 'Кто хочет стать миллионером?';
document.querySelector('.myInfo').append(mainQuestion);

// const createDivStartButton = document.createElement('div');
// createDivStartButton.setAttribute('class', 'startButton');
// document.querySelector('.begin').append(createDivStartButton);

new Game();
