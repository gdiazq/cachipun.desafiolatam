alert('Desafio - Cachipún contra la máquina');

//Solicita al usuario las veces que desea que se repita el juego
const vecesJugar = prompt('¿Cuantas veces desea jugar?');

//Variables en 0 modificables para despues cambiar
let juegoGanado = 0;
let juegoPerdido = 0;
let juegoEmpatado = 0;

let jugadaMaquina;

for (let i = 0; i < vecesJugar; i++) {

    let jugadaUsuario = prompt('Ingresa la jugada que tu hara: piedra, papel o tijera')

    let numeroAlAzar = Math.floor(Math.random() * 3);
        if (numeroAlAzar === 0) {
            jugadaMaquina = 'piedra';
        } else if (numeroAlAzar === 1) {
            jugadaMaquina = 'papel'; 
        } else if (numeroAlAzar === 2) {
            jugadaMaquina = 'tijera';
        }

    if (jugadaUsuario === jugadaMaquina) {
        juegoEmpatado += 1;
        alert('Empate')
    } else if (jugadaUsuario === 'piedra') {
        if (jugadaMaquina === 'papel') {
            juegoPerdido += 1;
            alert('Computador gana');
        } else {
            juegoGanado += 1;
            alert('Usuario gana');
        }
    } else if (jugadaUsuario === 'papel') {
        if (jugadaMaquina === 'tijera') {
            juegoPerdido += 1;
            alert('Computador gana');
        } else {
            juegoGanado += 1;
            alert('Usuario gana');
        }
    } else if (jugadaUsuario === 'tijera') {
        if (jugadaMaquina === 'piedra') {
            juegoPerdido += 1;
            alert('Computador gana');
        } else {
            juegoGanado += 1;
            alert('Usuario gana');
        }
    }
}

alert(`Ganaste ${juegoGanado} veces, perdiste ${juegoPerdido} veces y empataste ${juegoEmpatado} veces.`);

   //indica el ganador de la ronda
   if (juegoGanado > juegoPerdido) {
    alert("¡Felicidades, ganaste!")
} else if (juegoGanado < juegoPerdido) {
    alert("Lo siento, perdiste.")
} else if (juegoGanado === juegoPerdido) {
    alert("Esta ronda fue un empate...")
}