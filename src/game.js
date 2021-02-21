export class Game {
    constructor() {
        this.renderStartButton();
    }
        myQuestions = [
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

        i = 0;

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
        showQuestion.innerText = this.myQuestions[this.i].question;
        document.querySelector('.startButton').append(showQuestion);

        const acceptButton = document.createElement('button')
        acceptButton.innerText = 'Подтвердить';
        acceptButton.addEventListener('click',() => {
            this.accept();
        })
        document.querySelector('.acceptButton').append(acceptButton);
    }

    nextQuestion() {
        let nextQuestion = document.createElement('div');
        nextQuestion.innerHTML = this.myQuestions[this.i].question;
        document.querySelector('.startButton').append(nextQuestion);
    }

    accept() {
        this.i = i + 1;
        this.nextQuestion();
        i++;

    }
}

// const showAnswer1 = document.createElement('input');
// showAnswer1.setAttribute('type','radio');
// // showAnswer1.innerText = this.myQuestions[0].answer;
// document.querySelector('.startButton').append(showAnswer1);
//
// const showAnswer2 = document.createElement('input');
// showAnswer2.setAttribute('type','radio');
// // showAnswer2.innerText = this.myQuestions[0].answer;
// document.querySelector('.startButton').append(showAnswer2);
//
// const showAnswer3 = document.createElement('input');
// showAnswer3.setAttribute('type','radio');
// // showAnswer3.innerText = this.myQuestions[0].answer;
// document.querySelector('.startButton').append(showAnswer3);
//
// const showAnswer4 = document.createElement('input');
// showAnswer4.setAttribute('type','radio');
// // showAnswer4.innerText = this.myQuestions[0].answer;
// document.querySelector('.startButton').append(showAnswer4);



