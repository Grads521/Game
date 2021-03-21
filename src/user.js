export class User {
    userRightAnswer = 0;
    questionNumber = 0;
    constructor() {
        this.createSumUserAnswer();
    }
    createNode(element, attributes) {
        const elem = document.createElement(element);
        Object.assign(elem, attributes);
        return elem;
    }
    createSumUserAnswer() {
        let userSumAnswer = this.createNode('div', {
            className: 'userSumAnswer',
            textContent: this.userRightAnswer,
        });
        userSumAnswer.addEventListener('my-event', (event) => {
            this.questionNumber = event.detail.number1;
            this.userRightAnswer = event.detail.number2;
        });
        document.querySelector('nameGame').append(userSumAnswer);
        if (this.questionNumber === 4) {
            document.querySelector('.question').innerHTML = '';
            document.querySelector('.allAnswer').innerHTML = '';
            document.querySelector('acceptButton').innerHTML = '';
        }
    }
}
