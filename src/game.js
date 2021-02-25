export class Game {
    constructor() {
        this.renderStartButton();
    }
        myQuestions = [
        {
            question: 'Мой вопрос 1',
            answer: ['Нет', 'Да', 'Может быть', 'Конечно'],
            rightAnswer: 3
        },
        {
            question: 'Мой вопрос 2',
            answer: ['0', '1', '2', '3'],
            rightAnswer: 3
        },
        {
            question: 'Мой вопрос 3',
            answer: ['0', '1', '2', '3'],
            rightAnswer: 3
        },
        {
            question: 'Мой вопрос 4',
            answer: ['0', '1', '2', '3'],
            rightAnswer: 3
        },
        {
            question: 'Мой вопрос 5',
            answer: ['0', '1', '2', '3'],
            rightAnswer: 3
        },
    ]

        questionNumber = 0;

    renderStartButton() {
        const startButton = document.createElement('button');
        startButton.innerText = 'СТАРТ';
        startButton.addEventListener('click', () => {
            this.start();
        })
        document.querySelector('.startButton').append(startButton);
    }

    start() {
        let showQuestion = document.createElement('div');
        showQuestion.innerText = this.myQuestions[this.questionNumber].question;
        document.querySelector('.showQuestion').append(showQuestion);

        const acceptButton = document.createElement('button');
        acceptButton.setAttribute('type','submit');
        acceptButton.innerText = 'Подтвердить';
        acceptButton.addEventListener('click',() => {
            this.accept();
        })
        document.querySelector('.acceptButton').append(acceptButton);

        let showAnswer1 = document.createElement('input');
        showAnswer1.setAttribute('type','radio');
        showAnswer1.innerText = 'Привет';
        document.querySelector('.showAnswer').append(showAnswer1);


        // const showAnswer1 = document.createElement('input');
        // showAnswer1.setAttribute('type','radio');
        // showAnswer1.innerText = this.myQuestions[0].answer[0];
        // document.querySelector('.startButton').append(showAnswer1);
    }

    // nextQuestion() {
    //     let nextQuestion = document.createElement('div');
    //     nextQuestion.innerText = this.myQuestions[this.questionNumber].question;
    //     document.querySelector('.startButton').append(nextQuestion);
    // }
    //
    // accept() {
    //     this.questionNumber = this.questionNumber + 1;
    //     document.querySelector('.startButton').innerHTML = '';
    //     this.nextQuestion();
    // }
}





