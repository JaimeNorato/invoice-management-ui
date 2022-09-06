<template>
  <div class="overflow-x-auto">
    <router-link
      to="/invoicenew"
      class="inline-block px-12 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
    >
      Nueva Factura
    </router-link>
    <table
      class="min-w-full text-sm border border-gray-100 divide-y-2 divide-gray-200"
    >
      <thead>
        <tr class="divide-x divide-gray-100">
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Número
          </th>
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Fecha y hora
          </th>
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Emisor
          </th>
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Receptor
          </th>
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Subtotal
          </th>
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Iva
          </th>
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Total
          </th>
          <th
            class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"
          >
            Opción
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr
          v-for="invoice in invoices"
          v-bind:key="invoice.id"
          class="divide-x divide-gray-100"
        >
          <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
            {{ invoice.number }}
          </td>
          <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            {{ invoice.date_time }}
          </td>
          <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            {{ invoice.issuer.name }}
          </td>
          <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            {{ invoice.receiver.name }}
          </td>
          <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            {{ invoice.subtotal }}
          </td>
          <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            {{ invoice.iva }}
          </td>
          <td class="px-4 py-2 text-gray-700 whitespace-nowrap">
            {{ invoice.total }}
          </td>
          <td class="px-4 py-2 text-gray-700 whitespace-nowrap">opciones...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Repository from "../repository/RepositoryFactory";
const InvoiceRepository = Repository.get("invoice");
export default {
  name: "InvoiceView",
  data() {
    return {
      invoices: [],
    };
  },
  created() {
    this.getInvoices();
  },
  methods: {
    getInvoices() {
      InvoiceRepository.getInvoices(this.$store.state.token)
        .then((response) => {
          this.invoices = response.data;
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
        });
    },
  },
};
</script>
