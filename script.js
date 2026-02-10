// ==============================
// CONFIGURAÇÃO DO FIREBASE
// ==============================
var firebaseConfig = {
  apiKey: "AIzaSyACKzi7eHGLRRhYyg1W6Zh7jWszkdrHDAw",
  authDomain: "gif-overlay-65024.firebaseapp.com",
  databaseURL: "https://gif-overlay-65024-default-rtdb.firebaseio.com",
  projectId: "gif-overlay-65024"
};

// INICIALIZA O FIREBASE
firebase.initializeApp(firebaseConfig);

// REFERÊNCIA DO BANCO
var database = firebase.database();

// ==============================
// ESCUTA O OVERLAY
// ==============================
database.ref("overlay").on("value", function(snapshot) {
  var data = snapshot.val();
  if (!data || !data.url) return;

  var img = document.getElementById("imgOverlay");
  if (!img) return;

  img.src = data.url;
  img.style.display = "block";

  // some depois de 5 segundos
  setTimeout(function () {
    img.style.display = "none";
  }, 5000);
});
