import Client from "./clients/AxiosClient";
const resource = "/auth";

export default {
  /**
   * autentica in usuario
   * @param {*} payload
   * @returns
   */
  login(payload) {
    return Client.post(`${resource}/login`, payload);
  },
  /**
   * desautentica al usuario
   * @returns
   */
  logout(token) {
    this.addAuthHeader(token);
    return Client.post(`${resource}/logout`);
  },
  /**
   * registra un nuevo usuario
   */
  register(payload) {
    return Client.post(`${resource}/register`, payload);
  },
  /**
   * actualiza el token de autenticacion
   */
  refresh(token) {
    this.addAuthHeader(token);
    return Client.post(`${resource}/refresh`);
  },
  /**
   * retorna el usuario autenticado
   * @returns
   */
  getMe(token) {
    this.addAuthHeader(token);
    return Client.post(`${resource}/me`);
  },
  /**
   * agregael token de autenticacion a la cabecera
   */
  addAuthHeader(token) {
    Client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};
