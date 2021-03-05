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
        const startButton = document.createElement('button');
        startButton.setAttribute('class', 'button');
        startButton.innerText = 'Старт';
        startButton.addEventListener('click', () => {
            this.activateStartButton();
        });
        document.querySelector('.wrapper').append(startButton);
    }

    activateStartButton() {
        document.querySelector('.button').hidden = true;

        const question = document.createElement('div');
        question.setAttribute('class', 'question');
        question.innerText = this.myQuestions[this.questionNumber].question;

        const allAnswer = document.createElement('div');
        allAnswer.setAttribute('class', 'allAnswer');

        const divAcceptButton = document.createElement('div');
        divAcceptButton.setAttribute('class', 'acceptButton');

        const acceptButton = document.createElement('button');
        acceptButton.setAttribute('type', 'submit');
        acceptButton.innerText = 'Подтвердить';

        acceptButton.addEventListener('click', () => {
            this.activateAcceptButton();
        });

        const info = document.querySelector('.wrapper');

        info.append(question);

        info.append(allAnswer);

        info.append(divAcceptButton);

        document.querySelector('.acceptButton').append(acceptButton);

        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const answer = document.createElement('input');
            answer.setAttribute('type', 'radio');
            answer.setAttribute('id', `answer${i + 1}`);
            answer.setAttribute('value', `${i + 1}`);
            answer.setAttribute('name', 'answers');

            const textAnswer = document.createElement('label');
            textAnswer.setAttribute('for', `answer${i + 1}`);
            textAnswer.innerText = value;

            document.querySelector('.allAnswer').append(answer);

            document.querySelector('.allAnswer').append(textAnswer);
        });
    }

    getNextQuestion() {
        const nextQuestion = document.createElement('div');
        nextQuestion.innerText = this.myQuestions[this.questionNumber].question;
        document.querySelector('.question').append(nextQuestion);
    }

    getNextAnswer() {
        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const answer = document.createElement('input');
            answer.setAttribute('type', 'radio');
            answer.setAttribute('id', `answer${i + 1}`);
            answer.setAttribute('value', `${i + 1}`);
            answer.setAttribute('name', 'answers');

            const textAnswer = document.createElement('label');
            textAnswer.innerText = value;
            textAnswer.setAttribute('for', `answer${i + 1}`);

            document.querySelector('.allAnswer').append(answer);

            document.querySelector('.allAnswer').append(textAnswer);
        });
    }

    activateAcceptButton() {
        this.questionNumber += 1;
        document.querySelector('.question').innerHTML = '';
        document.querySelector('.allAnswer').innerHTML = '';
        this.getNextQuestion();
        this.getNextAnswer();
    }
}
