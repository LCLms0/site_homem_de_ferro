const video = localStorage.getItem("trailer");

if (!video) {
  alert("Nenhum trailer selecionado!");
} else {
  document.getElementById("video").src = video;
}

function voltar() {
  window.location.href = "filmes.html";
}