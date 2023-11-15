const NO_ES_UN_NUMERO = 0;
const NO_ES_EL_NUMERO_SECRETO = 1;
const ES_EL_NUMERO_SECRETO = 2;

// Generamos un número aleatorio
const generarNumeroAleatorio = (minimo, maximo) => {
  return Math.floor(Math.random() * (minimo, maximo) + minimo);
};

const numeroParaAcertar = generarNumeroAleatorio(0, 100);
console.log(numeroParaAcertar);

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = '';
  if (estado === NO_ES_UN_NUMERO) {
    mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
  } else {
    if (estado === NO_ES_EL_NUMERO_SECRETO) {
      mensaje = `Lo siento ${texto}, el número no es el correcto 😢, prueba de
nuevo`;
    } else {
      if (estado === ES_EL_NUMERO_SECRETO) {
        mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
      }
    }
  }
  document.getElementById('resultado').innerHTML = mensaje;
};

const comprobarNumero = (texto) => {
  let numero = parseInt(texto);
  let esUnNumero = !isNaN(numero);
  let resultado = NO_ES_UN_NUMERO;
  if (esUnNumero) {
    // Si es un número, comprobamos si es el número secreto
    if (numero === numeroParaAcertar) {
      resultado = ES_EL_NUMERO_SECRETO;
    } else {
      resultado = NO_ES_EL_NUMERO_SECRETO;
    }
  }
  return resultado;
};

const handleCompruebaClick = () => {
  const texto = document.getElementById('numero').value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
};

const botonComprobar = document.getElementById('comprobar');
botonComprobar.addEventListener('click', handleCompruebaClick);
