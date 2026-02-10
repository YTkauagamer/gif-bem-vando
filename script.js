// ================= FIREBASE CONFIG =================
var firebaseConfig = {
  apiKey: "AIzaSyACKzi7eHGLRRhYyg1W6Zh7jWszkdrHDAw",
  authDomain: "gif-overlay-65024.firebaseapp.com",
  databaseURL: "https://gif-overlay-65024-default-rtdb.firebaseio.com",
  projectId: "gif-overlay-65024",
  storageBucket: "gif-overlay-65024.appspot.com",
  messagingSenderId: "6502465024",
  appId: "1:6502465024:web:overlay"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();

// ================= FUNÇÃO DE ENVIO =================
function enviarImagem(url) {
  db.ref("overlay").set({
    imagem: url,
    timestamp: Date.now()
  });
}

// ================= BOTÕES (PAINEL) =================
if (document.getElementById("btn1")) {

  document.getElementById("btn1").onclick = () =>
    enviarImagem("https://i.ibb.co/HfD8jhy4/Captura-de-tela-2026-01-28-221616.png");

  document.getElementById("btn2").onclick = () =>
    enviarImagem("https://i.ibb.co/4nQddY5C/Opera-Instantaneo-2023-10-11-235208-scratch-mit-edu.png");

  document.getElementById("btn3").onclick = () =>
    enviarImagem("https://i.ibb.co/hFZ2CXZr/image.png");

  document.getElementById("btn4").onclick = () =>
    enviarImagem("https://i.ibb.co/KcrxHG7b/IMG-20260107-WA0002.jpg");

  document.getElementById("btn5").onclick = () =>
    enviarImagem("https://i.ibb.co/zTKLJv9Y/IMG-20260107-WA0003.jpg");

  document.getElementById("btn6").onclick = () =>
    enviarImagem("https://i.ibb.co/zWngG3Qq/IMG-20260107-WA0004.jpg");

  document.getElementById("btn7").onclick = () =>
    enviarImagem("https://i.ibb.co/rGvnJhPT/Captura-de-tela-2026-01-28-205218.png");

  document.getElementById("btn8").onclick = () =>
    enviarImagem("https://i.ibb.co/KcyQ9YG3/Captura-de-tela-2026-01-12-211800.png");
}

// ================= OVERLAY (OBS) =================
db.ref("overlay").on("value", (snap) => {
  if (!snap.val()) return;

  const img = document.getElementById("overlay-img");
  if (!img) return;

  img.src = snap.val().imagem;
  img.style.display = "block";

  setTimeout(() => {
    img.style.display = "none";
  }, 5000);
});
