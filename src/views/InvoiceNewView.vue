<template>
  <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
    <router-link
      to="/invoice"
      class="inline-block px-12 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
    >
      Regresar
    </router-link>
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
        Nueva Factura
      </h1>
      <div
        v-if="error"
        class="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
        role="alert"
      >
        <strong class="text-sm font-medium">
          No se pudo guardar los datos
        </strong>
      </div>
      <form
        @submit.prevent="saveData"
        class="p-8 mt-6 mb-0 rounded-lg shadow-2xl space-y-4"
      >
        <p class="text-lg font-medium">Registrar nueva Factura</p>
        <div>
          <label for="number" class="text-sm font-medium">Numero</label>
          <div class="relative mt-1">
            <input
              type="text"
              id="number"
              v-model="form.number"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Numero factura"
            />
          </div>
        </div>
        <div>
          <label for="date_time" class="text-sm font-medium">
            Fecha y Hora
          </label>
          <div class="relative mt-1">
            <input
              type="datetime"
              id="date_time"
              v-model="form.date_time"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Fecha y hora"
            />
          </div>
        </div>
        <div>
          <label for="issuer_id" class="text-sm font-medium">Emisor</label>
          <div class="relative mt-1">
            <select
              v-model="form.issuer_id"
              id="issuer_id"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            >
              <option
                v-for="issuer in issuers"
                :value="issuer.id"
                v-bind:key="issuer.id"
              >
                {{ issuer.name }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <label for="receiver_id" class="text-sm font-medium">Receptor</label>
          <div class="relative mt-1">
            <select
              v-model="form.receiver_id"
              id="receiver_id"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            >
              <option
                v-for="receiver in receivers"
                :value="receiver.id"
                v-bind:key="receiver.id"
              >
                {{ receiver.name }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <label for="subtotal" class="text-sm font-medium">Subtotal</label>
          <div class="relative mt-1">
            <input
              type="number"
              id="subtotal"
              v-model="form.subtotal"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Subtotal"
            />
          </div>
        </div>
        <div>
          <label for="iva" class="text-sm font-medium">Iva</label>
          <div class="relative mt-1">
            <input
              type="datetime"
              id="iva"
              v-model="form.iva"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Iva"
            />
          </div>
        </div>
        <div>
          <label for="total" class="text-sm font-medium">Total</label>
          <div class="relative mt-1">
            <input
              type="datetime"
              id="total"
              v-model="form.total"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              placeholder="Total"
            />
          </div>
        </div>
        <button
          type="submit"
          class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
        >
          Guardar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Repository from "../repository/RepositoryFactory";
const InvoiceRepository = Repository.get("invoice");
const IssuerRepository = Repository.get("issuer");
const ReceiverRepository = Repository.get("receiver");

export default {
  name: "LoginView",
  data() {
    return {
      error: false,
      issuers: [],
      receivers: [],
      token: "",
      form: {
        number: "",
        date_time: "2022-09-02 04:52:21",
        issuer_id: "",
        receiver_id: "",
        subtotal: "",
        iva: "",
        total: "",
      },
    };
  },
  created() {
    this.token = this.$store.state.token;
    this.loadData();
  },
  methods: {
    saveData: function () {
      InvoiceRepository.createInvoice(this.token, this.form)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "/invoice" });
        })
        .catch((error) => {
          console.log(error);
          this.error = true;
        });
    },
    loadData: function () {
      IssuerRepository.list(this.token)
        .then((response) => {
          this.issuers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      ReceiverRepository.list(this.token)
        .then((response) => {
          this.receivers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
