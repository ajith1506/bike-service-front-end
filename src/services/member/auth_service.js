import axios from "axios";
import authHeader from "../member/auth_header";

const AUTH_URL = "http://localhost:3000/admin/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(AUTH_URL + "login", { email, password })
      .then((response) => {
        if (response.data.token) {
          if (response.data.role === "ADMIN") {
            console.log(response.data.name);
            localStorage.setItem("admin", JSON.stringify(response.data));
          } else {
            console.log(response.data.name);
            localStorage.setItem("mechanic", JSON.stringify(response.data));
          }
        }
        console.log(response.data.role);
        return response.data;
      })
      .catch((err) => {
        console.log("Login Error" + err);
      });
  }

  registerMechanic(name, email, password, mobile) {
    return axios
      .post(
        AUTH_URL + "register",
        { name, email, password, mobile },
        {
          headers: authHeader(),
        }
      )
      .then((res) => {
        return res.data.message;
      })
      .catch((err) => {
        console.log("register error" + err);
      });
  }

  logout() {
    localStorage.removeItem("admin");
    console.log("Inside Logout method");
  }

  logoutMechanic() {
    localStorage.removeItem("Mechanic");
    console.log("Inside logout method");
  }

  register(name, email, password) {
    return axios.post(AUTH_URL + "register", {
      name,
      email,
      password,
    });
  }

  getCurrentMechanic() {
    return JSON.parse(localStorage.getItem("mechanic"));
  }
  getAdmin() {
    return JSON.parse(localStorage.getItem("admin"));
  }
}

export const authService = new AuthService();
