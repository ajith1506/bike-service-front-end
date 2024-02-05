class AuthService {
  constructor() {
    this.authenticated = false;
  }

  login(email, password) {
    return fetch("https://customer-dw86.onrender.com/customer/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          console.log(data.userId);
          this.authenticated = true;
          localStorage.setItem("customer", JSON.stringify(data));
        }
        return data;
      })
      .catch((err) => {
        console.log("Login Error", err);
      });
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem("customer");
    console.log("Inside Logout method");
  }
  register(name, email, password) {
    return fetch(" https://customer-dw86.onrender.com/customer/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          console.log(data.userId);
          this.authenticated = true;
          localStorage.setItem("customer", JSON.stringify(data));
        }
        return data;
      })
      .catch((err) => {
        console.log("Registration Error", err);
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
