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

        answerNumber = 0;

    renderStartButton() {
        const startButton = document.createElement('button');
        startButton.innerText = 'СТАРТ';
        startButton.addEventListener('click', () => {
            this.start();
        })
        document.querySelector('.begin').append(startButton);
    }

    start() {
        let createForm = document.createElement('form');
        createForm.setAttribute('class','info');
        document.querySelector('.begin').append(createForm);

        let showQuestion = document.createElement('div');
        showQuestion.innerText = this.myQuestions[this.questionNumber].question;
        document.querySelector('.info').append(showQuestion);

        let allAnswer = document.createElement('div');
        allAnswer.setAttribute('class','allAnswer');
        document.querySelector('.info').append(allAnswer);

        let createButtonAnswer1 = document.createElement('input');
        createButtonAnswer1.setAttribute('type','radio');
        createButtonAnswer1.setAttribute('id','contactAnswer1');
        createButtonAnswer1.setAttribute('name','contact');
        createButtonAnswer1.setAttribute('value','123');
        document.querySelector('.allAnswer').append(createButtonAnswer1);

        let showTextAnswer1 = document.createElement('label');
        showTextAnswer1.setAttribute('for','contactAnswer1');
        showTextAnswer1.innerText = this.myQuestions[0].answer[this.answerNumber];
        document.querySelector('.allAnswer').append(showTextAnswer1);

        let createButtonAnswer2 = document.createElement('input');
        createButtonAnswer2.setAttribute('type','radio');
        createButtonAnswer2.setAttribute('id','contactAnswer1');
        createButtonAnswer2.setAttribute('name','contact');
        createButtonAnswer2.setAttribute('value','123');
        document.querySelector('.allAnswer').append(createButtonAnswer2);

        let showTextAnswer2 = document.createElement('label');
        showTextAnswer2.setAttribute('for','contactAnswer1');
        showTextAnswer2.innerText = this.myQuestions[0].answer[1];
        document.querySelector('.allAnswer').append(showTextAnswer2);

        let createButtonAnswer3 = document.createElement('input');
        createButtonAnswer3.setAttribute('type','radio');
        createButtonAnswer3.setAttribute('id','contactAnswer1');
        createButtonAnswer3.setAttribute('name','contact');
        createButtonAnswer3.setAttribute('value','123');
        document.querySelector('.allAnswer').append(createButtonAnswer3);

        let showTextAnswer3 = document.createElement('label');
        showTextAnswer3.setAttribute('for','contactAnswer1');
        showTextAnswer3.innerText = this.myQuestions[0].answer[2];
        document.querySelector('.allAnswer').append(showTextAnswer3);

        let createButtonAnswer4 = document.createElement('input');
        createButtonAnswer4.setAttribute('type','radio');
        createButtonAnswer4.setAttribute('id','contactAnswer1');
        createButtonAnswer4.setAttribute('name','contact');
        createButtonAnswer4.setAttribute('value','123');
        document.querySelector('.allAnswer').append(createButtonAnswer4);

        let showTextAnswer4 = document.createElement('label');
        showTextAnswer4.setAttribute('for','contactAnswer1');
        showTextAnswer4.innerText = this.myQuestions[0].answer[3];
        document.querySelector('.allAnswer').append(showTextAnswer4);

        let createDivAcceptButton = document.createElement('div');
        createDivAcceptButton.setAttribute('class','acceptButton');
        document.querySelector('.info').append(createDivAcceptButton);

        const acceptButton = document.createElement('button');
        acceptButton.setAttribute('type','submit');
        acceptButton.innerText = 'Подтвердить';
        acceptButton.addEventListener('click',() => {
            this.accept();
        })
        document.querySelector('.acceptButton').append(acceptButton);

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





