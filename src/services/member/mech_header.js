export default function mechHeader() {
  const mechanic = JSON.parse(localStorage.getItem("mechanic"));
  if (mechanic && mechanic.token) {
    return { "x-access-token": mechanic.token };
  } else {
    return {};
  }
}
