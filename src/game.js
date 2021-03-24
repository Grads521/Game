export class Game {
    myQuestions = [
        {
            question: 'Ио это спутник...?',
            answer: ['Земли', 'Марса', 'Юпитера', 'Венеры'],
            rightAnswer: 2,
        },
        {
            question: 'На какой планете кратеры называют в честь деятелей культуры?',
            answer: ['Меркурий', 'Нептун', 'Венера', 'Марс'],
            rightAnswer: 0,
        },
        {
            question: 'Сколько спутников Юпитера было открыто Галилео Галилеем?',
            answer: ['2', '5', '12', '4'],
            rightAnswer: 3,
        },
        {
            question: 'Какое небесное тело вращается вокруг Земли?',
            answer: ['Луна', 'Юпитер', 'Фобос', 'Уран'],
            rightAnswer: 0,
        },
        {
            question: 'Какова температура закипания воды в градусах по Цельсию?',
            answer: ['80', '0', '40', '100'],
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
        const currentQuestion = this.myQuestions[this.questionNumber];

        document.querySelector('.button').hidden = true;

        const question = this.createNode('div', {className: 'question', textContent: this.myQuestions[this.questionNumber].question});

        const allAnswer = this.createNode('div', {className: 'allAnswer'});

        const divAcceptButton = this.createNode('div', {className: 'acceptButton'});

        const acceptButton = this.createNode('button', {type: 'submit', textContent: 'Подтвердить'});

        acceptButton.addEventListener('click', () => {
            this.activateAcceptButton();
        });
        const userLastQuestion = this.questionNumber === 4;

        if (currentQuestion.rightAnswer === currentQuestion.answer) {
            const compareAnswers = new CustomEvent('my-event', {
                detail: {
                    userAnswerChecked: true,
                    userNumberAnswerChecked: userLastQuestion,
                },
            });
            acceptButton.dispatchEvent(compareAnswers);
        } else {
            const compareAnswers = new CustomEvent('my-event', {
                detail: {
                    userAnswerChecked: false,
                    userNumberAnswerChecked: userLastQuestion,
                },
            });
            acceptButton.dispatchEvent(compareAnswers);
        }

        const info = document.querySelector('.wrapper');

        info.append(question);

        info.append(allAnswer);

        info.append(divAcceptButton);

        document.querySelector('.acceptButton').append(acceptButton);

        this.getAnswer();
    }

    getNextQuestion() {
        const nextQuestion = this.createNode('div', {textContent: this.myQuestions[this.questionNumber].question});
        document.querySelector('.question').append(nextQuestion);
    }

    getAnswer() {
        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const answer = this.createNode('input', {type: 'radio', className: 'answers', id: `answer${i + 1}`, value: `${i + 1}`, name: 'answers'});

            const textAnswer = this.createNode('label', {for: `answer${i + 1}`, textContent: value});

            document.querySelector('.allAnswer').append(answer);

            document.querySelector('.allAnswer').append(textAnswer);
        });
    }

    activateAcceptButton() {
        const checkRadio = document.querySelector('input[name="answers"]:checked');
        if (checkRadio != null) {
            this.questionNumber += 1;
            document.querySelector('.question').innerHTML = '';
            document.querySelector('.allAnswer').innerHTML = '';
            this.getNextQuestion();
            this.getAnswer();
        } else {
            alert('Выберите ответ');
        }
    }
}
