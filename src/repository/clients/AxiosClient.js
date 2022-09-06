import axios from "axios";

const baseDomain = "http://localhost:8000";
const baseURL = `${baseDomain}/api/v1`; // Incase of /api/v1;

export default axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  },
});
