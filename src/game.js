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
        document.querySelector('.button').hidden = true;

        const question = this.createNode('div', {className: 'question', textContent: this.myQuestions[this.questionNumber].question});

        const allAnswer = this.createNode('div', {className: 'allAnswer'});

        const divAcceptButton = this.createNode('div', {className: 'acceptButton'});

        const acceptButton = this.createNode('button', {type: 'submit', textContent: 'Подтвердить'});

        acceptButton.addEventListener('click', () => {
            this.activateAcceptButton();
        });

        const info = document.querySelector('.wrapper');

        info.append(question);

        info.append(allAnswer);

        info.append(divAcceptButton);

        document.querySelector('.acceptButton').append(acceptButton);

        this.getAnswer();
    }

    getAnswer() {
        this.myQuestions[this.questionNumber].answer.forEach((value, i) => {
            const answer = this.createNode('input', {type: 'radio', className: 'answers', id: `answer${i}`, value: `answer${i}`, name: 'answers'});

            const textAnswer = this.createNode('label', {for: `answer${i + 1}`, textContent: value});

            document.querySelector('.allAnswer').append(answer);

            document.querySelector('.allAnswer').append(textAnswer);
        });
    }

    activateAcceptButton() {
        this.userLastQuestion = this.questionNumber === 4;

        const currentQuestion = this.myQuestions[this.questionNumber];

        const checkRadio = document.querySelector('input[name="answers"]:checked');

        const compareAnswers = new CustomEvent('my-event', {
            detail: {
                userAnswerChecked: currentQuestion.rightAnswer === +checkRadio.value[6],
                userNumberAnswerChecked: this.userLastQuestion,
            },
        });

        if (checkRadio != null) {
            document.dispatchEvent(compareAnswers);
            this.questionNumber += 1;
            if (this.userLastQuestion) {
                return;
            }
            document.querySelector('.question').innerHTML = '';
            document.querySelector('.allAnswer').innerHTML = '';
            this.getNextQuestion();
            this.getAnswer();
        } else {
            alert('Выберите ответ');
        }
    }

    getNextQuestion() {
        const nextQuestion = this.createNode('div', {textContent: this.myQuestions[this.questionNumber].question});
        document.querySelector('.question').append(nextQuestion);
    }
}
