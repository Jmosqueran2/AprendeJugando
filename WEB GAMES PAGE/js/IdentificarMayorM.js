class Play {
    constructor() {
        this.questions = [
            { question: "¿Cuál es mayor, 8 o 5?", answer: "8" },
            { question: "¿Quién es mayor, Juan de 12 años o Maria de 14 años?", answer: "Maria" },
            { question: "¿Quién es más joven, Pedro de 9 años o Laura de 7 años?", answer: "Laura" }
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
        const userAnswer = document.getElementById('answer').value
        const correctAnswer = this.questions[this.currentQuestionIndex].answer
        const resultDiv = document.getElementById('result');

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
        const totalQuestions = this.questions.length
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