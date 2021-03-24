export class User {
    userSumAnswer = 0;
    createNode(element, attributes) {
        const elem = document.createElement(element);
        Object.assign(elem, attributes);
        return elem;
    }
    createSumUserAnswer() {
        const divUserSumAnswer = this.createNode('div', {
            className: 'userSumAnswer',
            value: this.userSumAnswer,
        });
        document.querySelector('nameGame').append(divUserSumAnswer);
    }
    constructor() {
        document.addEventListener('my-event', (event) => {
            this.userAnswerChecked = event.detail.userAnswerChecked;
            this.userLastQuestion = event.detail.userNumberAnswerChecked;
            if (this.userAnswerChecked === true) {
                this.userSumAnswer += 1;
            }
            if (this.userLastQuestion === true) {
                this.createSumUserAnswer();
                document.querySelector('.question').innerHTML = '';
                document.querySelector('.allAnswer').innerHTML = '';
                document.querySelector('.acceptButton').innerHTML = '';
            }
        });
    }
}
