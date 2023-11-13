// Generamos un número aleatorio
const generarNumeroAleatorio = (minimo, maximo) => {
  return Math.floor(Math.random() * (minimo, maximo) + minimo);
};

const numeroParaAcertar = generarNumeroAleatorio(0, 100);
console.log(numeroParaAcertar);

// Función para acertar el número aleatorio asignado
const haAcertadoElNumero = (numeroAAcertar, numeroDelUsuario) => {
  if (numeroAAcertar === numeroDelUsuario) {
    console.log('El usuario ha acertado');
  } else {
    console.log('No es el número, prueba otra vez');
  }
};

console.log(haAcertadoElNumero(50, 50));
console.log(haAcertadoElNumero(50, 51));

// Función que establece el número de intentos para acertar el número
const haSuperadoElNumeroDeIntentos = (numeroDeIntentos, maximoDeIntentos) => {
  if (numeroDeIntentos > maximoDeIntentos) {
    console.log('Has superado el número de intentos');
  } else {
    console.log('Aún no has superado el número de intento');
  }
};

console.log(haSuperadoElNumeroDeIntentos(5, 1));
console.log(haSuperadoElNumeroDeIntentos(5, 6));

// Botón que disparará el evento para comprobar si el número escrito es el correcto
const botonComprobar = document.getElementById('comprobar');
botonComprobar.addEventListener('click', () => {
  const texto = document.getElementById('numero').value;
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);
  const resultado = document.getElementById('resultado');

  if (!esUnNumero) {
    resultado.innerHTML = `"${texto}" no es un número
🤨, prueba otra vez`;
  } else {
    if (numero === numeroParaAcertar) {
      resultado.innerHTML = `¡¡¡Enhorabuena, has
acertado el número!!! 🎉🎉🎉`;
    } else {
      resultado.innerHTML = `Lo siento ${texto}, el
número no es el correcto 😢, prueba de nuevo`;
    }
  }
});
