const trailers = [
  "https://www.youtube.com/embed/8ugaeA-nMTc",
  "https://www.youtube.com/embed/BoohRoVA9WQ",
  "https://www.youtube.com/embed/YLorLVa95Xo"
];

function verTrailer(index) {
  localStorage.setItem("trailer", trailers[index]);
  window.location.href = "trailers.html";
}