import axios from "axios";

const AUTH_URL = "http://localhost:3000/customer/auth/";

class AuthService {
  constructor() {
    this.authenticated = false;
  }
  login(email, password) {
    return axios
      .post(AUTH_URL + "login", { email, password })
      .then((response) => {
        if (response.data.token) {
          console.log(response.data.userId);
          this.authenticated = true;
          localStorage.setItem("customer", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch((err) => {
        console.log("Login Error" + err);

        return err;
      });
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem("customer");
    console.log("Inside Logout method");
  }

  register(name, email, password) {
    return axios.post(AUTH_URL + "register", {
      name,
      email,
      password,
    });
  }
  isAuthenticated() {
    return this.authenticated;
  }
  getCurrentCustomer() {
    return JSON.parse(localStorage.getItem("customer"));
  }
}

export const authService = new AuthService();
