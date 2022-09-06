import Client from "./clients/AxiosClient";
const resource = "/issuers";

export default {
  /**
   * retorna todos los emisores registrados
   * @returns {Promise}
   */
  list(token) {
    this.addAuthHeader(token);
    return Client.get(`${resource}`);
  },
  /**
   * agregael token de autenticacion a la cabecera
   */
  addAuthHeader(token) {
    Client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};
