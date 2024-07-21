const minRange = 1;
        const maxRange = 100;
        const maxAttempts = 7; // Número máximo de intentos permitidos
        let hiddenNumber;
        let attemptsLeft;
        
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function startGame() {
            hiddenNumber = generateRandomNumber(minRange, maxRange);
            attemptsLeft = maxAttempts;
            document.getElementById('result').textContent = '';
            document.getElementById('guess').value = '';
        }

        function checkGuess() {
            let guess = parseInt(document.getElementById('guess').value);
            let resultElement = document.getElementById('result');

            if (isNaN(guess) || guess < minRange || guess > maxRange) {
                resultElement.textContent = `Introduce un número entre ${minRange} y ${maxRange}.`;
                resultElement.style.color = 'black';
                return;
            }

            while (attemptsLeft > 0) {
                if (guess === hiddenNumber) {
                    resultElement.textContent = `¡Felicidades! Has adivinado el número ${hiddenNumber}.`;
                    resultElement.style.color = 'green';
                    return;
                } else if (guess < hiddenNumber) {
                    attemptsLeft--;
                    resultElement.textContent = `Demasiado bajo. Intenta con un número mayor. Te quedan ${attemptsLeft} intentos.`;
                    resultElement.style.color = 'red';
                    break; 
                } else {
                    attemptsLeft--;
                    resultElement.textContent = `Demasiado alto. Intenta con un número menor. Te quedan ${attemptsLeft} intentos.`;
                    resultElement.style.color = 'red';
                    break; 
                }
            }

            if (attemptsLeft === 0) {
                resultElement.textContent = `Te has quedado sin intentos. El número oculto era ${hiddenNumber}.`;
                resultElement.style.color = 'red';
            }
        }

        function restartGame() {
            startGame();
        }

        startGame();