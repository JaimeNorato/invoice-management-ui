import Client from "./clients/AxiosClient";
const resource = "/invoices";

export default {
  /**
   * retorna todas las facturas registradas
   * @returns {Promise}
   */
  getInvoices(token) {
    this.addAuthHeader(token);
    return Client.get(`${resource}`);
  },
  /**
   * craga las facturas filtradas por los parametros
   */
  getInvoicesFilters(payload) {
    return Client.get(`${resource}`, payload);
  },
  /***
   * registra una nueva factura
   */
  createInvoice(payload) {
    return Client.post(`${resource}`, payload);
  },
  /**
   * retorna una factura por su id
   */
  findInvoice(id) {
    return Client.get(`${resource}/${id}`);
  },
  /**
   * actualiza una factura por su id
   */
  updateInvoice(id, payload) {
    return Client.patch(`${resource}/${id}`, payload);
  },
  /**
   * elimina una factura por su id
   */
  deleteInvoice(id) {
    return Client.delete(`${resource}/${id}`);
  },
  /**
  * agregael token de autenticacion a la cabecera
  */
  addAuthHeader(token) {
    Client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};
