class Play {
    constructor() {
        this.questions = [
            { question: "¿Si hace sol, qué debes llevar?", options: ["Gafas De Sol", "Protector solar"], answer: "Protector solar" },
            { question: "¿Qué tiene más superficie, una mesa de 1m² o una alfombra de 2m²?", options: ["La alfombra", "La mesa"], answer: "La alfombra" },
            { question: "¿Cuál es menor, un jardín de 10m² o un balcón de 5m²?", options: ["El jardín", "El balcón"], answer: "El balcón" },
            { question: "¿Qué recipiente puede contener más líquido, un vaso de 250ml o una botella de 1 litro?", options: ["El vaso", "La botella"], answer: "La botella" }
        ];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.encouragementMessage = "¡Estás mejorando cada vez más!";
        this.loadNewQuestion();
    }

    loadNewQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const currentQuestion = this.questions[this.currentQuestionIndex].question;
            const options = this.questions[this.currentQuestionIndex].options;
            document.getElementById('question').innerText = currentQuestion;
            document.getElementById('result').innerText = '';
            this.createAnswerButtons(options);
            document.querySelector('.reintentar-button').style.display = 'none';
        } else {
            this.showScore();
        }
    }

    createAnswerButtons(options) {
        const answerButtonsDiv = document.getElementById('answer-buttons');
        answerButtonsDiv.innerHTML = ''; // Clear previous buttons

        options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('answer-button');
            button.onclick = () => this.checkAnswer(option);
            answerButtonsDiv.appendChild(button);
        });
    }

    checkAnswer(selectedAnswer) {
        const correctAnswer = this.questions[this.currentQuestionIndex].answer;
        const resultDiv = document.getElementById('result');

        if (selectedAnswer === correctAnswer) {
            resultDiv.innerText = "¡Correcto!";
            resultDiv.style.color = "green";
            this.score++;
        } else {
            resultDiv.innerText = "Incorrecto, intenta de nuevo.";
            resultDiv.style.color = "red";
        }

        this.currentQuestionIndex++;
        this.loadNewQuestion();
    }

    showScore() {
        const totalQuestions = this.questions.length;
        const scorePercentage = (this.score / totalQuestions) * 100;
        let scoreMessage = '';

        if (this.score === totalQuestions) {
            scoreMessage = `¡Felicidades! Has completado el juego con ${this.score} respuestas correctas de ${totalQuestions}. ¡Eres genial!\n${this.encouragementMessage}`
        } else {
            scoreMessage = `Tu puntuación es de ${this.score} respuestas correctas de ${totalQuestions}. ¡Sigue intentándolo!`
        }

        document.getElementById('question').innerText = '¡Juego completado!';
        document.getElementById('result').innerText = scoreMessage;
        document.getElementById('answer-buttons').innerHTML = '';
        document.querySelector('.reintentar-button').style.display = 'inline-block';
    }

    restartGame() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.loadNewQuestion();
    }
}

window.onload = () => {
    window.play = new Play();
}
