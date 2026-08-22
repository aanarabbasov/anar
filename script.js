const input = document.getElementById("listeningInput");
const button = document.getElementById("openListening");

function openListening() {
  const id = input.value.trim();
  if (!id || Number(id) < 1) {
    input.focus();
    input.setCustomValidity("Dinləmə kodunu yazın.");
    input.reportValidity();
    input.setCustomValidity("");
    return;
  }
  // QR kodlar da eyni URL quruluşundan istifadə edə bilər:
  // https://aanarabbasov.github.io/anar/listening.html?id=1
  window.location.href = `listening.html?id=${encodeURIComponent(id)}`;
}

button.addEventListener("click", openListening);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") openListening();
});
