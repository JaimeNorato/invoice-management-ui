<template>
  <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
        Registrarse
      </h1>
      <div
        v-if="error"
        class="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
        role="alert"
      >
        <strong class="text-sm font-medium">
          {{ response }}
        </strong>
      </div>
      <form
        @submit.prevent="register"
        class="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4"
      >
        <p class="text-lg font-medium">Registrar una cuenta nueva</p>
        <div>
          <label for="name" class="text-sm font-medium">Nombres</label>
          <div class="relative mt-1">
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Ingrese Nombres"
            />
          </div>
        </div>
        <div>
          <label for="email" class="text-sm font-medium">Email</label>
          <div class="relative mt-1">
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Enter email"
            />
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label for="password" class="text-sm font-medium">Contraseña</label>
          <div class="relative mt-1">
            <input
              type="password"
              id="password"
              v-model="form.password"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Ingresa tu contraseña"
            />
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label for="password" class="text-sm font-medium">
            Repetir contraseña
          </label>
          <div class="relative mt-1">
            <input
              type="password"
              id="password"
              v-model="form.password_confirmation"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Repite tu contraseña"
            />
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <button
          type="submit"
          class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
        >
          Registrarse
        </button>
        <p class="text-sm text-center text-gray-500">
          Tienes cuenta
          <a class="underline" href="/login">Ingresar</a>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import Repository from "../repository/RepositoryFactory";
const AuthRepository = Repository.get("auth");
export default {
  name: "RegisterView",
  data() {
    return {
      response: {},
      user: {},
      error: false,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    register() {
      AuthRepository.register(this.form)
        .then((response) => {
          this.response = response.data;
          this.user = this.response.user;
          this.$router.push("/login");
        })
        .catch((error) => {
          this.response = error.response.data;
          this.error = true;
        });
    },
  },
};
</script>
