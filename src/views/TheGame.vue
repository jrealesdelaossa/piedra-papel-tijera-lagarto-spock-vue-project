<template>
  <div class="contenedor">
    <h1>Piedra Papel Tijera Lagarto Spock</h1>

    <div class="contador">
      <span>{{ this.contadorJugador }} - {{ this.contadorPc }}</span>
    </div>

    <p v-if="!yaSelecciono">Por favor seleccione su jugada</p>

    <div class="tablero">
      <div v-if="jugadorOpciones.jugadorPiedra">
        <span>🪨</span>
      </div>
      <div v-if="jugadorOpciones.jugadorPapel">
        <span>🧻</span>
      </div>
      <div v-if="jugadorOpciones.jugadorTijera">
        <span>✂️</span>
      </div>
      <div v-if="jugadorOpciones.jugadorLagarto">
        <span>🦎</span>
      </div>
      <div v-if="jugadorOpciones.jugadorSpock">
        <span>🖖</span>
      </div>

      <span>🆚</span>

      <div v-if="pcOpciones.pcPiedra">
        <span>🪨</span>
      </div>
      <div v-if="pcOpciones.pcPapel">
        <span>🧻</span>
      </div>
      <div v-if="pcOpciones.pcTijera">
        <span>✂️</span>
      </div>
      <div v-if="pcOpciones.pcLagarto">
        <span>🦎</span>
      </div>
      <div v-if="pcOpciones.pcSpock">
        <span>🖖</span>
      </div>
    </div>

    <div class="contenedor-boton-aceptar">
      <button class="boton-aceptar" v-if="aceptar" @click="AceptarSeleccion">
        Aceptar
      </button>
    </div>

    <div class="contenedor-boton-volver-a-jugar">
      <button
          class="boton-volver-a-jugar"
          v-if="volverJugar"
          @click="VolverAJugar"
      >
        Volver a Jugar
      </button>
    </div>

    <div v-if="!yaSelecciono" class="contenedor-botones">
      <button class="boton" @click="CambiarSeleccion" value="jugadorPiedra">
        🪨 Piedra
      </button>
      <button class="boton" @click="CambiarSeleccion" value="jugadorPapel">
        🧻 Papel
      </button>
      <button class="boton" @click="CambiarSeleccion" value="jugadorTijera">
        ✂️ Tijera
      </button>
      <button class="boton" @click="CambiarSeleccion" value="jugadorLagarto">
        🦎 Lagarto
      </button>
      <button class="boton" @click="CambiarSeleccion" value="jugadorSpock">
        🖖 Spock
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheGame",
  data() {
    return {
      jugadorOpciones: {
        jugadorPiedra: false,
        jugadorPapel: false,
        jugadorTijera: false,
        jugadorLagarto: false,
        jugadorSpock: false,
      },
      aceptar: false,
      volverJugar: false,
      pcOpciones: {
        pcPiedra: false,
        pcPapel: false,
        pcTijera: false,
        pcLagarto: false,
        pcSpock: false,
      },
      seleccionJugador: null,
      seleccionPc: null,
      yaSelecciono: false,
      contadorPc: 0,
      contadorJugador: 0,
    };
  },
  methods: {
    CambiarSeleccion(event) {
      this.seleccionJugador = event.target.value;

      this.aceptar = true;

      for (let opt in this.jugadorOpciones) {
        this.jugadorOpciones[opt] = opt === this.seleccionJugador;
      }
    },

    AceptarSeleccion() {
      const pcOpciones = [
        "pcPiedra",
        "pcPapel",
        "pcTijera",
        "pcLagarto",
        "pcSpock",
      ];
      this.seleccionPc =
          pcOpciones[Math.floor(Math.random() * pcOpciones.length)];

      for (let opt in this.pcOpciones) {
        if (this.seleccionPc === opt) {
          this.pcOpciones[this.seleccionPc] = true;
        }
      }
      this.yaSelecciono = true;
      this.aceptar = false;
      this.volverJugar = true;

      this.CalcularGanador();
    },

    CalcularGanador() {
      switch (this.seleccionJugador) {
        case "jugadorPiedra":
          if (
              this.seleccionPc === "pcPapel" ||
              this.seleccionPc === "pcSpock"
          ) {
            this.contadorPc++;
          } else if (
              this.seleccionPc === "pcLagarto" ||
              this.seleccionPc === "pcTijera"
          ) {
            this.contadorJugador++;
          }
          break;
        case "jugadorPapel":
          if (
              this.seleccionPc === "pcLagarto" ||
              this.seleccionPc === "pcTijera"
          ) {
            this.contadorPc++;
          } else if (
              this.seleccionPc === "pcSpock" ||
              this.seleccionPc === "pcPiedra"
          ) {
            this.contadorJugador++;
          }
          break;
        case "jugadorTijera":
          if (
              this.seleccionPc === "pcSpock" ||
              this.seleccionPc === "pcPiedra"
          ) {
            this.contadorPc++;
          } else if (
              this.seleccionPc === "pcLagarto" ||
              this.seleccionPc === "pcPapel"
          ) {
            this.contadorJugador++;
          }
          break;
        case "jugadorLagarto":
          if (
              this.seleccionPc === "pcTijera" ||
              this.seleccionPc === "pcPiedra"
          ) {
            this.contadorPc++;
          } else if (
              this.seleccionPc === "pcSpock" ||
              this.seleccionPc === "pcPapel"
          ) {
            this.contadorJugador++;
          }
          break;
        case "jugadorSpock":
          if (
              this.seleccionPc === "pcPapel" ||
              this.seleccionPc === "pcLagarto"
          ) {
            this.contadorPc++;
          } else if (
              this.seleccionPc === "pcTijera" ||
              this.seleccionPc === "pcPiedra"
          ) {
            this.contadorJugador++;
          }
          break;
      }
    },

    VolverAJugar() {
      this.seleccionJugador = null;
      this.seleccionPc = null;

      for (let opt in this.pcOpciones) {
        this.pcOpciones[opt] = false;
      }

      for (let opt in this.jugadorOpciones) {
        this.jugadorOpciones[opt] = false;
      }

      this.yaSelecciono = false;
      this.aceptar = false;
      this.volverJugar = false;
    },
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 4rem;
}

p {
  font-size: 2rem;
}

.contador {
  font-size: 10rem;
}

@media (max-width: 768px) {
  .contenedor-botones {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .boton {
    width: 70%;
    height: 80px;
    font-size: 2rem;
    margin: 16px 0;
    border: none;
    border-radius: 20px;
  }

  .contenedor-boton-aceptar {
    width: 100%;
    height: auto;
    margin-bottom: 120px;
  }

  .boton-aceptar {
    width: 70%;
    height: 80px;
    font-size: 3rem;
    margin: 16px 0;
    border: none;
    border-radius: 20px;
    background-color: #42b983;
  }

  .contenedor-boton-volver-a-jugar {
    width: 100%;
    height: auto;
  }

  .boton-volver-a-jugar {
    width: 80%;
    height: 80px;
    font-size: 3rem;
    margin: 16px 0;
    border: none;
    border-radius: 20px;
    background-color: #ea5455;
  }

  .tablero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 8rem;
  }


}

@media (max-width: 336px) {
  .contador {
    font-size: 5rem;
  }
}

@media (max-width: 415px) {
  .boton-volver-a-jugar {
    height: 80px;
    font-size: 2rem;
  }
}
</style>
