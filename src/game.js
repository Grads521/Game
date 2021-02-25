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
            answer: ['0', '1', '2', '3'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 4',
            answer: ['0', '1', '2', '3'],
            rightAnswer: 3,
        },
        {
            question: 'Мой вопрос 5',
            answer: ['0', '1', '2', '3'],
            rightAnswer: 3,
        },
    ]

    questionNumber = 0;

    answerNumber = 0;

    constructor() {
        this.renderStartButton();
    }

    renderStartButton() {
        const startButton = document.createElement('button');
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

        const createButtonAnswer1 = document.createElement('input');
        createButtonAnswer1.setAttribute('type', 'radio');
        createButtonAnswer1.setAttribute('id', 'contactAnswer1');
        createButtonAnswer1.setAttribute('name', 'contact');
        createButtonAnswer1.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createButtonAnswer1);

        const showTextAnswer1 = document.createElement('label');
        showTextAnswer1.setAttribute('for', 'contactAnswer1');
        showTextAnswer1.setAttribute('class', 'showTextAnswer1');
        showTextAnswer1.innerText = this.myQuestions[this.answerNumber].answer[0];
        document.querySelector('.allAnswer').append(showTextAnswer1);

        const createButtonAnswer2 = document.createElement('input');
        createButtonAnswer2.setAttribute('type', 'radio');
        createButtonAnswer2.setAttribute('id', 'contactAnswer2');
        createButtonAnswer2.setAttribute('name', 'contact');
        createButtonAnswer2.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createButtonAnswer2);

        const showTextAnswer2 = document.createElement('label');
        showTextAnswer2.setAttribute('for', 'contactAnswer2');
        showTextAnswer2.setAttribute('class', 'showTextAnswer2');
        showTextAnswer2.innerText = this.myQuestions[this.answerNumber].answer[1];
        document.querySelector('.allAnswer').append(showTextAnswer2);

        const createButtonAnswer3 = document.createElement('input');
        createButtonAnswer3.setAttribute('type', 'radio');
        createButtonAnswer3.setAttribute('id', 'contactAnswer3');
        createButtonAnswer3.setAttribute('name', 'contact');
        createButtonAnswer3.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createButtonAnswer3);

        const showTextAnswer3 = document.createElement('label');
        showTextAnswer3.setAttribute('for', 'contactAnswer3');
        showTextAnswer3.setAttribute('class', 'showTextAnswer3');
        showTextAnswer3.innerText = this.myQuestions[this.answerNumber].answer[2];
        document.querySelector('.allAnswer').append(showTextAnswer3);

        const createButtonAnswer4 = document.createElement('input');
        createButtonAnswer4.setAttribute('type', 'radio');
        createButtonAnswer4.setAttribute('id', 'contactAnswer4');
        createButtonAnswer4.setAttribute('name', 'contact');
        createButtonAnswer4.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createButtonAnswer4);

        const showTextAnswer4 = document.createElement('label');
        showTextAnswer4.setAttribute('for', 'contactAnswer4');
        showTextAnswer4.setAttribute('class', 'showTextAnswer4');
        showTextAnswer4.innerText = this.myQuestions[this.answerNumber].answer[3];
        document.querySelector('.allAnswer').append(showTextAnswer4);

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
        const createNextButtonAnswer1 = document.createElement('input');
        createNextButtonAnswer1.setAttribute('type', 'radio');
        createNextButtonAnswer1.setAttribute('id', 'contactAnswer1');
        createNextButtonAnswer1.setAttribute('name', 'contact');
        createNextButtonAnswer1.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createNextButtonAnswer1);

        const showNextTextAnswer1 = document.createElement('label');
        showNextTextAnswer1.setAttribute('for', 'contactAnswer1');
        showNextTextAnswer1.innerText = this.myQuestions[this.answerNumber].answer[0];
        document.querySelector('.allAnswer').append(showNextTextAnswer1);

        const createNextButtonAnswer2 = document.createElement('input');
        createNextButtonAnswer2.setAttribute('type', 'radio');
        createNextButtonAnswer2.setAttribute('id', 'contactAnswer2');
        createNextButtonAnswer2.setAttribute('name', 'contact');
        createNextButtonAnswer2.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createNextButtonAnswer2);

        const showNextTextAnswer2 = document.createElement('label');
        showNextTextAnswer2.setAttribute('for', 'contactAnswer2');
        showNextTextAnswer2.setAttribute('class', 'showTextAnswer2');
        showNextTextAnswer2.innerText = this.myQuestions[this.answerNumber].answer[1];
        document.querySelector('.allAnswer').append(showNextTextAnswer2);

        const createNextButtonAnswer3 = document.createElement('input');
        createNextButtonAnswer3.setAttribute('type', 'radio');
        createNextButtonAnswer3.setAttribute('id', 'contactAnswer3');
        createNextButtonAnswer3.setAttribute('name', 'contact');
        createNextButtonAnswer3.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createNextButtonAnswer3);

        const showNextTextAnswer3 = document.createElement('label');
        showNextTextAnswer3.setAttribute('for', 'contactAnswer3');
        showNextTextAnswer3.setAttribute('class', 'showTextAnswer3');
        showNextTextAnswer3.innerText = this.myQuestions[this.answerNumber].answer[2];
        document.querySelector('.allAnswer').append(showNextTextAnswer3);

        const createNextButtonAnswer4 = document.createElement('input');
        createNextButtonAnswer4.setAttribute('type', 'radio');
        createNextButtonAnswer4.setAttribute('id', 'contactAnswer4');
        createNextButtonAnswer4.setAttribute('name', 'contact');
        createNextButtonAnswer4.setAttribute('value', '123');
        document.querySelector('.allAnswer').append(createNextButtonAnswer4);

        const showNextTextAnswer4 = document.createElement('label');
        showNextTextAnswer4.setAttribute('for', 'contactAnswer4');
        showNextTextAnswer4.setAttribute('class', 'showTextAnswer4');
        showNextTextAnswer4.innerText = this.myQuestions[this.answerNumber].answer[3];
        document.querySelector('.allAnswer').append(showNextTextAnswer4);
    }

    accept() {
        this.questionNumber += 1;
        this.answerNumber += 1;
        document.querySelector('.showQuestion').innerHTML = '';
        document.querySelector('.allAnswer').innerHTML = '';
        this.nextQuestion();
        this.nextAnswer();
    }
}
