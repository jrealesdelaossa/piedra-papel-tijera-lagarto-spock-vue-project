<template>
  <div class="rules">
    <h1>Las reglas</h1>

    <p>
      El juego Piedra Papel Tijera Lagarto Spock es una variante del popular
      juego de Piedra Papel Tijera. En esta versión, se agregan dos opciones
      adicionales, Lagarto y Spock, que amplían las posibilidades de jugada.
    </p>

    <p>
      A continuación, se presenta una guía básica para jugar Piedra Papel Tijera
      Lagarto Spock:
    </p>

    <ol>
      <li>
        El juego se juega entre dos jugadores. En este caso sera un jugador
        contra la maquina.
      </li>
      <li>
        Cada jugador elige una opción de entre las cinco disponibles: Piedra,
        Papel, Tijera, Lagarto o Spock.
      </li>
      <li>
        Las reglas para determinar quién gana son las siguientes:
        <ul>
          <li>
            Piedra gana contra Tijera y Lagarto, pero pierde contra Papel y
            Spock.
          </li>
          <li>
            Papel gana contra Piedra y Spock, pero pierde contra Tijera y
            Lagarto.
          </li>
          <li>
            Tijera gana contra Papel y Lagarto, pero pierde contra Piedra y
            Spock.
          </li>
          <li>
            Lagarto gana contra Papel y Spock, pero pierde contra Piedra y
            Tijera.
          </li>
          <li>
            Spock gana contra Piedra y Tijera, pero pierde contra Papel y
            Lagarto.
          </li>
        </ul>
      </li>
      <li>
        Si ambos jugadores eligen la misma opción, se considera un empate y se
        vuelve a jugar.
      </li>
      <li>
        El juego se juega por un número predeterminado de rondas o hasta que un
        jugador alcance un número determinado de victorias.
      </li>
      <li>El jugador con más victorias al final del juego es el ganador.</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TheRules",
};
</script>

<style scoped>
.rules {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #ccc;
  background-color: #f9f9f9;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}

.rules h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.rules p {
  margin-bottom: 15px;
}

.rules ol {
  margin-left: 30px;
  margin-bottom: 20px;
}

.rules ul {
  margin-left: 30px;
}

.rules li {
  margin-bottom: 10px;
}

.rules li:last-child {
  margin-bottom: 0;
}

.rules li > ul {
  margin-top: 5px;
  margin-bottom: 5px;
}

.rules li > ul li {
  margin-bottom: 5px;
}
</style>
