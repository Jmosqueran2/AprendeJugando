class Juego {
    constructor() {
        this.generateNewSequence(); // Llama a este método cuando se inicializa la clase
    }

    generateNewSequence() {
        this.sequence = this.generateSequence();
        this.numberToFind = this.selectRandomNumber();
        document.getElementById('generated-sequence').textContent = `Secuencia generada: ${this.sequence.join(', ')}`;
        document.getElementById('number-to-find').textContent = `Número a buscar: ${this.numberToFind}`;
        document.getElementById('result').textContent = '';
        document.getElementById('guess').value = '';
    }

    generateSequence() {
        let sequence = [];
        for (let i = 0; i < 20; i++) {
            sequence.push(Math.floor(Math.random() * 10));
        }
        return sequence;
    }

    selectRandomNumber() {
        return this.sequence[Math.floor(Math.random() * this.sequence.length)];
    }

    countRepetitions(element) {
        let count = 0;
        for (let item of this.sequence) {
            if (item === element) {
                count++;
            }
        }
        return count;
    }

    checkGuess() {
        const guess = parseInt(document.getElementById('guess').value);
        const resultElement = document.getElementById('result');

        if (isNaN(guess)) {
            resultElement.textContent = 'Por favor ingresa un número válido.';
            resultElement.className = 'incorrect';
        } else {
            const actualCount = this.countRepetitions(this.numberToFind);

            if (guess === actualCount) {
                resultElement.textContent = `¡Correcto! El número ${this.numberToFind} se repite ${actualCount} veces en la secuencia.`;
                resultElement.className = 'correct';
            } else {
                resultElement.textContent = `Incorrecto. El número ${this.numberToFind} se repite ${actualCount} veces en la secuencia.`;
                resultElement.className = 'incorrect';
            }
        }
    }

    retry() {
        this.generateNewSequence();
    }
}

window.onload = () => {
    window.juego = new Juego(); // Guardar la instancia en el objeto window para que sea accesible globalmente
};
