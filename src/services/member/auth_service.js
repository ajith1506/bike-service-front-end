import authHeader from "../member/auth_header";

class AuthService {
  async login(email, password) {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (data.token) {
        if (data.role === "ADMIN") {
          console.log(data.name);
          localStorage.setItem("admin", JSON.stringify(data));
        } else {
          console.log(data.name);
          localStorage.setItem("mechanic", JSON.stringify(data));
        }
      }
      console.log(data.role);
      return data;
    } catch (error) {
      console.log("Login Error", error);
    }
  }

  async registerMechanic(name, email, password, mobile) {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({ name, email, password, mobile }),
        }
      );

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log("Register Mechanic Error", error);
    }
  }

  logout() {
    localStorage.removeItem("admin");
    console.log("Inside Logout method");
  }

  logoutMechanic() {
    localStorage.removeItem("mechanic");
    console.log("Inside logout method");
  }

  async register(name, email, password) {
    try {
      const response = await fetch(
        "https://admin-l2u6.onrender.com/admin/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Register Error", error);
    }
  }

  getCurrentMechanic() {
    return JSON.parse(localStorage.getItem("mechanic"));
  }

  getAdmin() {
    return JSON.parse(localStorage.getItem("admin"));
  }
}

export const authService = new AuthService();
