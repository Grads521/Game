export class User {
    sumAnswer = 0;
    constructor() {
        document.addEventListener('my-event', (event) => {
            const {userAnswerChecked, userNumberAnswerChecked} = event.detail;
            if (userAnswerChecked) {
                this.sumAnswer += 1;
            }
            if (userNumberAnswerChecked) {
                this.createSumAnswer();
                document.querySelector('.question').innerHTML = '';
                document.querySelector('.allAnswer').innerHTML = '';
                document.querySelector('.acceptButton').innerHTML = '';
            }
        });
    }
    createNode(element, attributes) {
        const elem = document.createElement(element);
        Object.assign(elem, attributes);
        return elem;
    }
    createSumAnswer() {
        const divSumAnswer = this.createNode('div', {
            className: 'sumAnswer',
            textContent: `Правильных ответов: ${this.sumAnswer}`,
        });
        document.querySelector('.nameGame').append(divSumAnswer);
    }
}
