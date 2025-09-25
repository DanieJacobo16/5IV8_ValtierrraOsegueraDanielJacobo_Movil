document.addEventListener('DOMContentLoaded', function() {
    const validateBtn = document.getElementById('validateBtn');
    const dniNumberInput = document.getElementById('dniNumber');
    const dniLetterInput = document.getElementById('dniLetter');
    const resultDiv = document.getElementById('result');
    
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    
    validateBtn.addEventListener('click', function() {
        const dniNumber = parseInt(dniNumberInput.value);
        const dniLetter = dniLetterInput.value.toUpperCase();
        
        // Limpiar resultado anterior
        resultDiv.innerHTML = '';
        resultDiv.className = '';
        
        // Validar número de DNI
        if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
            showResult('El número proporcionado no es válido', 'error');
            return;
        }
        
        // Validar que se haya ingresado una letra
        if (!dniLetter || !/^[A-Za-z]$/.test(dniLetter)) {
            showResult('Por favor, ingrese una letra válida', 'error');
            return;
        }
        
        // Calcular letra correspondiente
        const resto = dniNumber % 23;
        const letraCalculada = letras[resto];
        
        // Comparar letras
        if (dniLetter !== letraCalculada) {
            showResult(`La letra que ha indicado no es correcta. La letra correcta es: ${letraCalculada}`, 'error');
        } else {
            showResult('El número y la letra de DNI son correctos', 'success');
        }
    });
    
    function showResult(message, type) {
        resultDiv.textContent = message;
        resultDiv.className = type;
    }
    
    // Convertir automáticamente a mayúsculas
    dniLetterInput.addEventListener('input', function() {
        this.value = this.value.toUpperCase();
    });
});