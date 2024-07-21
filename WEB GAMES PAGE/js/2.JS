class Deberes {
    // Método para calcular la suma de números naturales hasta el número ingresado
    calcularSuma() {
        let numero = parseInt(document.getElementById('num1').value);

        if (numero < 1 || isNaN(numero)) {
            document.getElementById('resultado').textContent = "Por favor, ingresa un número entero positivo.";
            return;
        }

        let suma = 0;
        let secuencia = '';
        for (let i = 1; i <= numero; i++) {
            suma += i;
            secuencia += (i === 1 ? `${i}` : ` + ${i}`);
        }

        document.getElementById('resultado').innerHTML = `La suma detallada de los números naturales hasta ${numero} es:<br>${secuencia} = ${suma}`;
    }

    // Método para convertir un número binario a hexadecimal
    convertToHex() {
        const binaryInput = document.getElementById('binary-input').value;
        if (/^[01]+$/.test(binaryInput)) {
            const hexOutput = parseInt(binaryInput, 2).toString(16).toUpperCase();
            document.getElementById('hex-output').textContent = 'Hexadecimal: ' + hexOutput;
        } else {
            document.getElementById('hex-output').textContent = 'Número binario inválido';
        }
    }

    // Método para convertir un número binario a decimal
    convertToDecimal() {
        const binaryInput = document.getElementById('binary-input').value;
        if (/^[01]+$/.test(binaryInput)) {
            const decimalOutput = parseInt(binaryInput, 2);
            document.getElementById('decimal-output').textContent = 'Decimal: ' + decimalOutput;
        } else {
            document.getElementById('decimal-output').textContent = 'Número binario inválido';
        }
    }

    // Método para convertir un número decimal a binario
    convertToBinary2() {
        const decimalInput = document.getElementById('decimal-input').value;
        if (/^\d+$/.test(decimalInput) && decimalInput >= 0) {
            const binaryOutput = parseInt(decimalInput, 10).toString(2);
            document.getElementById('binary-output').textContent = 'Binario: ' + binaryOutput;
        } else {
            document.getElementById('binary-output').textContent = 'Número decimal inválido';
        }
    }

    // Método para contar caracteres, vocales, signos de puntuación, espacios, palabras y dígitos en un texto
    countText() {
        const text = document.getElementById('text-input').value;

        const charCount = text.length;
        const vowelCount = (text.match(/[aeiouAEIOU]/g) || []).length;
        const punctCount = (text.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || []).length;
        const spaceCount = (text.match(/\s/g) || []).length;
        const wordCount = (text.match(/\b\w+\b/g) || []).length;
        const digitCount = (text.match(/\d/g) || []).length;

        document.getElementById('char-count').textContent = 'Caracteres: ' + charCount;
        document.getElementById('vowel-count').textContent = 'Vocales: ' + vowelCount;
        document.getElementById('punct-count').textContent = 'Signos de puntuación: ' + punctCount;
        document.getElementById('space-count').textContent = 'Espacios: ' + spaceCount;
        document.getElementById('word-count').textContent = 'Palabras: ' + wordCount;
        document.getElementById('digit-count').textContent = 'Dígitos: ' + digitCount;
    }

    // Método para invertir el texto
    reverseText() {
        const text = document.getElementById('text-input').value;
        const reversedText = text.split('').reverse().join('');
        document.getElementById('reversed-text').textContent = 'Texto invertido: ' + reversedText;
    }

    // Método para verificar si un número es primo
    isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    // Método para verificar si un número es perfecto
    isPerfect(num) {
        if (num <= 1) return false;
        let sum = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                if (i !== num) sum += i;
                if (i !== 1 && i !== num / i) sum += num / i;
            }
        }
        return sum === num;
    }

    // Método para calcular promedio y moda de una lista de calificaciones
    calculateStats() {
        const input = document.getElementById('grades-input').value;
        const grades = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

        // Calcular el promedio
        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

        // Calcular la moda
        const frequency = {};
        let maxFrequency = 0;
        let modes = [];

        grades.forEach(grade => {
            frequency[grade] = (frequency[grade] || 0) + 1;
            if (frequency[grade] > maxFrequency) {
                maxFrequency = frequency[grade];
            }
        });

        for (const grade in frequency) {
            if (frequency[grade] === maxFrequency) {
                modes.push(Number(grade));
            }
        }

        document.getElementById('average-result').textContent = 'Promedio: ' + average.toFixed(2);
        document.getElementById('mode-result').textContent = 'Moda: ' + (modes.length > 0 ? modes.join(', ') : 'No hay moda');
    }

    // Método para encontrar números perfectos en una lista
    findPerfectNumbers() {
        const input = document.getElementById('array-input').value;
        const numbers = input.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
        const perfectNumbers = numbers.filter(num => this.isPerfect(num));

        document.getElementById('perfect-numbers-result').textContent = 'Números perfectos: ' + perfectNumbers.join(', ');
    }

    // Método para encontrar números primos en una lista
    findPrimes2() {
        const input = document.getElementById('array-input').value;
        const numbers = input.split(',').map(num => parseInt(num.trim(), 10)).filter(num => !isNaN(num));
        const primes = numbers.filter(num => this.isPrime(num));

        document.getElementById('primes-result').textContent = 'Números primos: ' + primes.join(', ');
    }

    // Método para comparar el número de palabras entre dos frases
    comparePhrases() {
        const phrase1 = document.getElementById('phrase1').value.trim();
        const phrase2 = document.getElementById('phrase2').value.trim();

        const wordCount1 = phrase1.split(/\s+/).filter(Boolean).length;
        const wordCount2 = phrase2.split(/\s+/).filter(Boolean).length;

        let result;

        if (wordCount1 > wordCount2) {
            result = 'La primera frase tiene más palabras.';
        } else if (wordCount2 > wordCount1) {
            result = 'La segunda frase tiene más palabras.';
        } else {
            result = 'Ambas frases tienen el mismo número de palabras.';
        }

        document.getElementById('comparison-result').textContent = result;
    }

    // Método para convertir un número hexadecimal a binario
    convertToBinary() {
        const hexInput = document.getElementById('hex-input').value;
        if (/^[0-9A-Fa-f]+$/.test(hexInput)) {
            const binaryOutput = parseInt(hexInput, 16).toString(2);
            document.getElementById('binary-output').textContent = 'Binario: ' + binaryOutput;
        } else {
            document.getElementById('binary-output').textContent = 'Número hexadecimal inválido';
        }
    }

    // Método para verificar si un número es perfecto
    checkPerfect() {
        let number = parseInt(document.getElementById('number').value);
        let resultElement = document.getElementById('result');

        if (isNaN(number) || number < 1) {
            resultElement.textContent = 'Introduce un número entero positivo.';
            return;
        }

        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (number % i === 0) {
                sum += i;
            }
        }

        resultElement.textContent = sum === number ? `${number} es un número perfecto.` : `${number} no es un número perfecto.`;
    }

    // Método para verificar si un número es primo
    checkPrime() {
        let number = parseInt(document.getElementById('number').value);
        let resultElement = document.getElementById('result');

        if (isNaN(number) || number < 2) {
            resultElement.textContent = 'Introduce un número entero positivo mayor que 1.';
            return;
        }

        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        resultElement.textContent = isPrime ? `${number} es un número primo.` : `${number} no es un número primo.`;
    }

    // Método para contar cuántas veces se repite un número en una secuencia
    contarRepeticiones() {
        let numeroBuscar = parseInt(document.getElementById('num1').value);
        let maximo = parseInt(document.getElementById('maximo').value);
        if (isNaN(numeroBuscar) || isNaN(maximo)) {
            document.getElementById('resultado').innerHTML = 'Por favor ingrese números válidos en ambos campos.';
            return;
        }

        let conteo = 0;
        for (let numero = 0; numero <= maximo; numero++) {
            if (numero % 10 === numeroBuscar || numero === numeroBuscar) {
                conteo++;
            }
        }

        document.getElementById('resultado').innerHTML = `El número ${numeroBuscar} se repite ${conteo} veces en la secuencia hasta ${maximo}.`;
    }

    // Método para calcular el factorial de un número
    calcularFactorial() {
        let numero = parseInt(document.getElementById('num1').value);

        if (isNaN(numero) || numero < 0) {
            document.getElementById('resultado').innerHTML = 'Por favor ingrese un número entero positivo.';
        } else {
            let factorial = 1;
            for (let i = 2; i <= numero; i++) {
                factorial *= i;
            }

            document.getElementById('resultado').innerHTML = `${numero}! = ${factorial}`;
        }
    }

    // Método para mostrar números pares e impares entre dos números
    mostrarParesImpares() {
        let numero1 = parseInt(document.getElementById('numero1').value);
        let numero2 = parseInt(document.getElementById('numero2').value);
        let resultado = document.getElementById('resultado');

        if (isNaN(numero1) || isNaN(numero2)) {
            alert('Por favor ingrese números válidos.');
            return;
        }
        if (numero1 >= numero2) {
            alert('El primer número debe ser menor que el segundo.');
            return;
        }

        let pares = [];
        let impares = [];

        for (let i = numero1; i <= numero2; i++) {
            (i % 2 === 0 ? pares : impares).push(i);
        }

        let mensaje = `<p>Pares: ${pares.join(', ')}</p>`;
        mensaje += `<p>Impares: ${impares.join(', ')}</p>`;

        resultado.innerHTML = mensaje;
    }

    // Método para generar una tabla de multiplicar o de sumar
    generarTabla() {
        let numero = parseInt(document.getElementById('numero').value);
        let tipoTabla = document.getElementById('tipoTabla').value;

        document.getElementById('resultadoTabla').innerHTML = '';

        let tabla = '';
        if (tipoTabla === 'multiplicar') {
            tabla += `<h2>Tabla de Multiplicar del ${numero}:</h2>`;
            for (let i = 1; i <= 10; i++) {
                tabla += `<p>${numero} x ${i} = ${numero * i}</p>`;
            }
        } else if (tipoTabla === 'sumar') {
            tabla += `<h2>Tabla de Sumar del ${numero}:</h2>`;
            for (let i = 1; i <= 10; i++) {
                tabla += `<p>${numero} + ${i} = ${numero + i}</p>`;
            }
        }

        document.getElementById('resultadoTabla').innerHTML = tabla;
    }

    // Método para abrir la información del color
    openColorInfo() {
        document.getElementById('color-info').style.display = 'flex';
    }

    // Método para cerrar la información del color
    closeColorInfo() {
        document.getElementById('color-info').style.display = 'none';
    }

    // Método para generar la secuencia de Fibonacci
    generarFibonacci() {
        let cantidadNumeros = parseInt(document.getElementById('cantidadNumeros').value);

        if (isNaN(cantidadNumeros) || cantidadNumeros < 1) {
            alert('Por favor ingrese un número entero positivo.');
            return;
        }
        
        let fibonacci = [];
        for (let i = 0; i < cantidadNumeros; i++) {
            if (i === 0) {
                fibonacci.push(0);
            } else if (i === 1) {
                fibonacci.push(1);
            } else {
                fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
            }
        }
        document.getElementById('resultadoFibonacci').innerHTML = `<h2>Secuencia de Fibonacci:</h2><p>${fibonacci.join(', ')}</p>`;
    }
}

let tarea = new Deberes();
