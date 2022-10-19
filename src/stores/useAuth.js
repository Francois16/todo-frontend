import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  getters: {},
  actions: {
    async setUserAuthenticationStatus() {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          this.setAxiosAuthorizationHeader(token);
          const user = await axios.get("/auth/users/me");
          this.user = user.data;
          this.isAuthenticated = true;
        } catch {
          this.logout();
        }
      }
    },

    // Logs the user out of the site.
    logout() {
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem("token");
      axios.defaults.headers.common["Authorization"] = "";
    },

    setAxiosAuthorizationHeader(token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
  },
});
