<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1 class="title">Piedra Papel Tijera Lagarto Spock</h1>

    <p>Realizado por Julián David Reales de la Ossa</p>

    <div class="botones">
      <router-link to="/game">Jugar</router-link>
      <router-link to="/rules">Reglas</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  height: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 5rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  width: 90vw;
}

p {
  width: 80vw;
  margin-bottom: 15px;
  font-size: 2rem;
}

.botones {
  width: 100vw;
  height: auto;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 4rem;
  text-decoration: none;
  background-color: #fff1dc;
  padding: 12px 20px;
  border: 12px solid #3a98b9;
  border-radius: 24px;
  text-transform: uppercase;
  margin-bottom: 80px;
}

a.router-link-exact-active {
  color: #000000;
}
</style>
