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

firebase.database().ref("chatYoutube").on("value", (snap)=>{
  console.log("CHEGOU DO FIREBASE:", snap.val());
});

// ================= FUNÇÃO DE ENVIO (PAINEL) =================
function enviarGif(url) {
  db.ref("overlay").set({
    imagem: url,
    timestamp: Date.now()
  });

  console.log("GIF enviado:", url);
}


// ================= BOTÕES (SE EXISTIREM) =================
if (document.getElementById("btn1")) {

  document.getElementById("btn1").onclick = () =>
    enviarGif("https://i.ibb.co/HfD8jhy4/Captura-de-tela-2026-01-28-221616.png");

  document.getElementById("btn2").onclick = () =>
    enviarGif("https://i.ibb.co/4nQddY5C/Opera-Instantaneo-2023-10-11-235208-scratch-mit-edu.png");

  document.getElementById("btn3").onclick = () =>
    enviarGif("https://i.ibb.co/hFZ2CXZr/image.png");

  document.getElementById("btn4").onclick = () =>
    enviarGif("https://i.ibb.co/KcrxHG7b/IMG-20260107-WA0002.jpg");

  document.getElementById("btn5").onclick = () =>
    enviarGif("https://i.ibb.co/zTKLJv9Y/IMG-20260107-WA0003.jpg");

  document.getElementById("btn6").onclick = () =>
    enviarGif("https://i.ibb.co/zWngG3Qq/IMG-20260107-WA0004.jpg");

  document.getElementById("btn7").onclick = () =>
    enviarGif("https://i.ibb.co/rGvnJhPT/Captura-de-tela-2026-01-28-205218.png");

  document.getElementById("btn8").onclick = () =>
    enviarGif("https://i.ibb.co/KcyQ9YG3/Captura-de-tela-2026-01-12-211800.png");
}


// ================= OVERLAY (OBS) =================
db.ref("overlay").on("value", (snap) => {
  if (!snap.val()) return;

  const img = document.getElementById("imagem"); // 🔥 ID CORRETO
  if (!img) return;

  const url = snap.val().imagem;

  // animação igual do index
  img.src = url;

  img.style.opacity = "0";
  img.style.transform = "translate(-50%, -50%) scale(0.9)";

  img.offsetHeight;

  img.style.opacity = "1";
  img.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    img.style.opacity = "0";
    img.style.transform = "translate(-50%, -50%) scale(1.1)";
  }, 5000);
});
