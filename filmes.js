const trailers = [
  {
    nome: "Homem de Ferro 1 (2008)",
    link: "https://www.youtube.com/embed/8ugaeA-nMTc"
  },
  {
    nome: "Homem de Ferro 2 (2010)",
    link: "https://www.youtube.com/embed/BoohRoVA9WQ"
  },
  {
    nome: "Homem de Ferro 3 (2013)",
    link: "https://www.youtube.com/embed/YLorLVa95Xo"
  }
];

function verTrailer(index) {
  localStorage.setItem("trailer", trailers[index].link);
  localStorage.setItem("filme", trailers[index].nome);
  window.location.href = "trailers.html";
}
