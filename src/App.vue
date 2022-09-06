<template>
  <nav>
    <template v-if="$store.state.auth">
      <router-link to="/invoice">Facturas</router-link> |
      <span v-if="$store.state.user != null">
        {{ $store.state.user.name }}
      </span>
      |
      <button
        @click="logout"
        class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
      >
        <span
          class="absolute inset-0 border border-red-600 group-active:border-red-500"
        ></span>
        <span
          class="block px-12 py-3 bg-red-600 border border-red-600 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
          Salir
        </span>
      </button>
    </template>
    <template v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </template>
  </nav>
  <router-view />
</template>
<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
