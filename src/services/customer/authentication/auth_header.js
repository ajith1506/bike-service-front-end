// auth_header.js

export default function authHeader() {
  const customer = JSON.parse(localStorage.getItem("customer"));

  if (customer && customer.token) {
    return { "x-access-token": customer.token };
  } else {
    return {};
  }
}
