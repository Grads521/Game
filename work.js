import {Game} from './src/game.js';

import {User} from './src/user.js';

const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
document.querySelector('.begin').append(wrapper);

const mainQuestion = document.createElement('div');
mainQuestion.setAttribute('class', 'nameGame');
mainQuestion.innerText = 'Кто хочет стать миллионером?';
document.querySelector('.wrapper').append(mainQuestion);

new Game();

new User();
