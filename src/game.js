const myQuestions = [
    {
        question: 'Мой вопрос 1',
        answer: ['0', '1', '2', '3'],
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
        question: 'Мой вопрос',
        answer: ['0', '1', '2', '3'],
        rightAnswer: 3
    },
    {
        question: 'Мой вопрос',
        answer: ['0', '1', '2', '3'],
        rightAnswer: 3
    },
]

export class Game {
    constructor() {
        this.renderStartButton();
    }

    renderStartButton() {
        const startButton = document.createElement('button')
        startButton.innerText = 'СТАРТ';
        startButton.addEventListener('click', () => {
            this.start();
        })
        document.querySelector('.startButton').append(startButton);
    }

    start() {
        const showQuestion = document.createElement('div')
        showQuestion.innerText = myQuestions[0].question;
        document.querySelector('.startButton').append(showQuestion);

        let showAnswer = document.createElement('div')
        // showAnswer.setAttribute('type','radio')
        showAnswer.innerText = myQuestions[0].answer;
        document.querySelector('.startButton').append(showAnswer);

        // const acceptButton = document.createElement('button')
        // acceptButton.innerText = 'Подтвердить';
        // acceptButton.addEventListener('click',() => {
        //     this.accept();
        // })
        // document.querySelector('.acceptButton').append(acceptButton);


    }
}



