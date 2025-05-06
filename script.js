// Generar un número secreto aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = []; // Array para almacenar los intentos del usuario

// Obtener los elementos del DOM
const inputNumero = document.getElementById('inputNumero');
const verificarBtn = document.getElementById('verificarBtn');
const mensajeDiv = document.getElementById('mensaje');

// Función para manejar el intento del jugador
verificarBtn.addEventListener('click', function() {
  const numeroIngresado = Number(inputNumero.value); // Convertir el input a número

  // Verificar si el dato ingresado es un número válido
  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
    mensajeDiv.textContent = 'Error: Por favor ingresa un número entre 1 y 100.';
    return;
  }

  // Agregar el intento a la lista
  intentos.push(numeroIngresado);

  // Verificar si el número ingresado es correcto
  if (numeroIngresado === numeroSecreto) {
    mensajeDiv.textContent = '¡Felicidades, adivinaste el número secreto!';
    console.log('Intentos previos:', intentos.join(', ')); // Mostrar los intentos anteriores en consola
  } else {
    mensajeDiv.textContent = 'Ups, el número secreto es incorrecto, vuelve a intentarlo.';
  }

  // Limpiar el campo de entrada
  inputNumero.value = '';
});
