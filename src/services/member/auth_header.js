export default function authheader() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin && admin.token) {
    return { "x-access-token": admin.token };
  } else {
    return {};
  }
}
