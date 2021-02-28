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
        let startButton = document.createElement('button');
        startButton.setAttribute('class', 'button');
        startButton.innerText = 'СТАРТ';
        startButton.addEventListener('click', () => {
            this.start();
        });
        document.querySelector('.begin').append(startButton);
    }

    start() {
        // let createForm = document.createElement('form');
        // createForm.setAttribute('class','info');
        // document.querySelector('.begin').append(createForm);

        const showQuestion = document.createElement('div');
        showQuestion.setAttribute('class', 'showQuestion');
        showQuestion.innerText = this.myQuestions[this.questionNumber].question;
        document.querySelector('.begin').append(showQuestion);

        const allAnswer = document.createElement('div');
        allAnswer.setAttribute('class', 'allAnswer');
        document.querySelector('.begin').append(allAnswer);

        this.myQuestions[this.questionNumber].answer.forEach((value, index) => {
            const createButtonAnswer = document.createElement('input');
            createButtonAnswer.setAttribute('type', 'radio');
            createButtonAnswer.setAttribute('id', 'contactAnswer');
            createButtonAnswer.setAttribute('value', '123');
            document.querySelector('.allAnswer').append(createButtonAnswer);

            const showTextAnswer = document.createElement('label');
            showTextAnswer.setAttribute('for', 'contactAnswer');
            showTextAnswer.innerText = this.myQuestions[this.questionNumber].answer[index];
            document.querySelector('.allAnswer').append(showTextAnswer);
        });

        const createDivAcceptButton = document.createElement('div');
        createDivAcceptButton.setAttribute('class', 'acceptButton');
        document.querySelector('.begin').append(createDivAcceptButton);

        const acceptButton = document.createElement('button');
        acceptButton.setAttribute('type', 'submit');
        acceptButton.innerText = 'Подтвердить';
        acceptButton.addEventListener('click', () => {
            this.accept();
        });
        document.querySelector('.acceptButton').append(acceptButton);
    }

    nextQuestion() {
        const nextQuestion = document.createElement('div');
        nextQuestion.innerText = this.myQuestions[this.questionNumber].question;
        document.querySelector('.showQuestion').append(nextQuestion);
    }

    nextAnswer() {
        this.myQuestions[this.questionNumber].answer.forEach((value, index) => {
            const createButtonAnswer = document.createElement('input');
            createButtonAnswer.setAttribute('type', 'radio');
            createButtonAnswer.setAttribute('id', 'contactAnswer');
            createButtonAnswer.setAttribute('value', '123');
            document.querySelector('.allAnswer').append(createButtonAnswer);

            const showTextAnswer = document.createElement('label');
            showTextAnswer.setAttribute('for', 'contactAnswer');
            showTextAnswer.innerText = this.myQuestions[this.questionNumber].answer[index];
            document.querySelector('.allAnswer').append(showTextAnswer);
        });
    }

    accept() {
        this.questionNumber += 1;
        document.querySelector('.showQuestion').innerHTML = '';
        document.querySelector('.allAnswer').innerHTML = '';
        document.querySelector('.button').hidden = true;
        this.nextQuestion();
        this.nextAnswer();
    }
}
