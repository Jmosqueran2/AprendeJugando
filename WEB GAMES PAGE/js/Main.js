class Play {
    constructor() {
        this.questions = [
            { question: "¿Qué número sigue en la secuencia 1, 2, 3, 4, 5, ...?", answer: 6 },
            { question: "¿Cuál es el patrón en la secuencia 10, 20, 30, 40, ...?", answer: 50 },
            { question: "¿Qué número sigue en la secuencia 3, 6, 9, 12, ...?", answer: 15 },
            { question: "¿Cuál es el patrón en la secuencia 5, 10, 20, 40, ...?", answer: 80 },
            { question: "¿Qué número sigue en la secuencia 7, 14, 21, 28, ...?", answer: 35 }
        ];
        this.currentQuestionIndex = 0
        this.score = 0
        this.encouragementMessage = "¡Estás mejorando cada vez más!"
        this.loadNewQuestion()
    }

    loadNewQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const currentQuestion = this.questions[this.currentQuestionIndex].question
            document.getElementById('question').innerText = currentQuestion
            document.getElementById('result').innerText = ''
            document.getElementById('answer').style.display = 'inline-block'
            document.querySelector('.play-button').style.display = 'inline-block'
            document.querySelector('.reintentar-button').style.display = 'none'
        } else {
            this.showScore()
        }
    }

    checkAnswer() {
        const userAnswer = parseInt(document.getElementById('answer').value)
        const correctAnswer = this.questions[this.currentQuestionIndex].answer
        const resultDiv = document.getElementById('result')

        if (userAnswer === correctAnswer) {
            resultDiv.innerText = "¡Correcto!"
            resultDiv.style.color = "green"
            this.score++
        } else {
            resultDiv.innerText = "Incorrecto, intenta de nuevo."
            resultDiv.style.color = "red"
        }

        this.currentQuestionIndex++
        this.loadNewQuestion()

        document.getElementById('answer').value = ""
    }

    showScore() {
        const totalQuestions = this.questions.length;
        const scorePercentage = (this.score / totalQuestions) * 100
        let scoreMessage = ''

        if (this.score === totalQuestions) {
            scoreMessage = `¡Felicidades! Has completado el juego con ${this.score} respuestas correctas de ${totalQuestions}. ¡Eres genial!\n${this.encouragementMessage}`
        } else {
            scoreMessage = `Tu puntuación es de ${this.score} respuestas correctas de ${totalQuestions}. ¡Sigue intentándolo!`
        }

        document.getElementById('question').innerText = '¡Juego completado!'
        document.getElementById('result').innerText = scoreMessage
        document.getElementById('answer').style.display = 'none'
        document.querySelector('.play-button').style.display = 'none'
        document.querySelector('.reintentar-button').style.display = 'inline-block'
    }

    restartGame() {
        this.currentQuestionIndex = 0
        this.score = 0
        this.loadNewQuestion()
    }
}

window.onload = () => {
    window.play = new Play()
}
