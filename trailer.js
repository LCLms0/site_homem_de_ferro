const video = localStorage.getItem("trailer");
const nome = localStorage.getItem("filme");

if (!video || !nome) {
  alert("Nenhum trailer selecionado!");
} else {
  document.getElementById("video").src = video;
  document.getElementById("nome-filme").innerText = "Você está assistindo o Trailer do Filme: " + nome;
}
