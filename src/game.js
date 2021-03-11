export class Game {
    myQuestions = [
        {
            question: 'Мой вопрос 1',
            answer: ['Нет', 'Да', 'Может быть', 'Конечно'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 2',
            answer: ['Да', 'Нет', 'Может быть', 'Много'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 3',
            answer: ['ывфыв', '1', '2', '3'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 4',
            answer: ['0', 'ыфв1', '2', '3'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 5',
            answer: ['0', '1', '2ыфвф', '3'],
            rightAnswer: 3,
        },
    ]
    questionNumber = 0;

    constructor() {
        this.renderStartButton();
    }

    renderStartButton() {
        const startButton = this.createNode('button', {className: 'button', textContent: 'Старт'});
        startButton.addEventListener('click', () => {
            this.start();
        });
        document.querySelector('.wrapper').append(startButton);
    }

    createNode(element, attributes) {
        const elem = document.createElement(element);
        Object.assign(elem, attributes);
        return elem;
    }

    start() {
        document.querySelector('.button').hidden = true;

        const showQuestion = this.createNode('div', {className: 'showQuestion', textContent: this.myQuestions[this.questionNumber].question});

        const allAnswer = this.createNode('div', {className: 'allAnswer'});

        const createDivAcceptButton = this.createNode('div', {className: 'acceptButton'});

        const acceptButton = this.createNode('button', {type: 'submit', textContent: 'Подтвердить'});

        acceptButton.addEventListener('click', () => {
            this.accept();
        });

        const info = document.querySelector('.wrapper');

        info.append(showQuestion);

        info.append(allAnswer);

        info.append(createDivAcceptButton);

        document.querySelector('.acceptButton').append(acceptButton);

        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const createButtonAnswer = this.createNode('input', {type: 'radio', id: `answer${i + 1}`, value: `${i + 1}`, name: 'answers'});

            const showTextAnswer = this.createNode('label', {for: `answer${i + 1}`, textContent: value});

            document.querySelector('.allAnswer').append(createButtonAnswer);

            document.querySelector('.allAnswer').append(showTextAnswer);
        });
    }

    nextQuestion() {
        const nextQuestion = this.createNode('div', {textContent: this.myQuestions[this.questionNumber].question});
        document.querySelector('.showQuestion').append(nextQuestion);
    }

    nextAnswer() {
        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const createButtonAnswer = this.createNode('input', {type: 'radio', id: `answer${i + 1}`, value: `${i + 1}`, name: 'answers'});

            const showTextAnswer = this.createNode('label', {for: `answer${i + 1}`, textContent: value});

            document.querySelector('.allAnswer').append(createButtonAnswer);

            document.querySelector('.allAnswer').append(showTextAnswer);
        });
    }

    accept() {
        this.questionNumber += 1;
        document.querySelector('.showQuestion').innerHTML = '';
        document.querySelector('.allAnswer').innerHTML = '';
        this.nextQuestion();
        this.nextAnswer();
    }
}
