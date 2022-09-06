import Client from "./clients/AxiosClient";
const resource = "/receivers";

export default {
  /**
   * retorna todos los receptores registrados
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
