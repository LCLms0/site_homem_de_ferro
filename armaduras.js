
// lista de armaduras 

const armaduras = [
    {
        img: "armaduras/um.png",
        titulo: "Mark I",
        desc: "Primeira armadura construída por Tony Stark enquanto estava sequestrado por terroristas. Feita com materiais improvisados, era pesada, limitada e rudimentar, mas permitiu que ele escapasse do cativeiro e desse início à sua vida como herói."
    },
    {
        img: "armaduras/dois.png",
        titulo: "Mark II",
        desc: "Versão aprimorada da Mark I, projetada principalmente para testes de voo. Possuía design metálico prateado e era mais leve, mas apresentava problemas de congelamento em altas altitudes, demonstrando a necessidade de ajustes tecnológicos."
    },
    {
        img: "armaduras/tres.png",
        titulo: "Mark III",
        desc: "Primeira armadura funcional com pintura vermelha e dourada, combinando estética e funcionalidade. Introduziu sistemas de armas avançados e defesa aprimorada, permitindo a Tony combater o vilão Obadiah Stane e consolidar seu papel como herói."
    },
    {
        img: "armaduras/quatro.png",
        titulo: "Mark IV",
        desc: "Versão refinada da Mark III, com melhorias no sistema de energia, armamento e mobilidade. Foi projetada para ser mais eficiente em combate e confiável em situações críticas, mantendo o estilo icônico vermelho e dourado."
    },
    {
        img: "armaduras/cinco.png",
        titulo: "Mark V",
        desc: "Conhecida como a “armadura portátil”, era compacta e fácil de transportar, podendo ser guardada em uma maleta. Ideal para situações de emergência, permitindo que Tony se transformasse em Homem de Ferro rapidamente mesmo longe de sua base."
    },
    {
        img: "armaduras/seis.png",
        titulo: "Mark VI",
        desc: "Introduziu o novo reator de energia baseado em núcleo de ouro, substituindo o paládio tóxico. Tinha maior eficiência energética, poder de combate ampliado e sistemas de defesa aprimorados, sendo usada em batalhas críticas contra inimigos poderosos."
    },
    {
        img: "armaduras/sete.png",
        titulo: "Mark VII",
        desc: "Usada na batalha de Nova York, foi projetada para acionamento imediato e entrada rápida em combate. Possui grande poder de fogo, alta mobilidade e sistemas automáticos que permitem que Tony a vista em segundos."
    },
    {
        img: "armaduras/oito.png",
        titulo: "Mark XLII (42)",
        desc: "Criada com tecnologia de montagem remota, permitindo que as peças voassem até Tony individualmente. Era extremamente versátil e rápida, mas instável em situações de combate intenso."
    },
    {
        img: "armaduras/nove.png",
        titulo: "Mark XLIII (43)",
        desc: "Versão aprimorada da 42, com sistema de montagem mais estável e proteção reforçada. Foi usada na batalha contra Ultron e trouxe equilíbrio entre mobilidade, força e confiabilidade."
    },
    {
        img: "armaduras/dez.png",
        titulo: "Mark XLIV (Hulkbuster)",
        desc: "Armadura gigante criada para conter o Hulk em situações extremas. Possui força massiva, sistemas de impacto pesados e módulos substituíveis, sendo uma das mais poderosas já construídas."
    },
    {
        img: "armaduras/onze.png",
        titulo: "Mark L (50)",
        desc: "Feita com nanotecnologia, permitindo formar armas instantaneamente durante o combate. Altamente flexível e avançada, foi usada contra Thanos e trouxe recursos inéditos até então."
    },
    {
        img: "armaduras/doze.png",
        titulo: "Mark LXXXV (85)",
        desc: "Última armadura usada por Tony. Combina nanotecnologia com os melhores sistemas de todas as versões anteriores. Foi criada para o confronto final contra Thanos e representa o auge de sua evolução como herói."
    },
];

// Pegando os elementos do HTML
const img = document.getElementById("imagem-armadura");
const title = document.getElementById("title-armadura");
const desc = document.getElementById("text-descrition");
const divText = document.getElementById("div-descrition");

// Função chamada pelos botões
function trocarArmadura(i) {

    // Fade-out
    img.style.opacity = 0;
    divText.style.opacity = 0;

    setTimeout(() => {
        // Troca conteúdo
        img.src = armaduras[i].img;
        title.textContent = armaduras[i].titulo;
        desc.textContent = armaduras[i].desc;

        // Fade-in
        img.style.opacity = 1;
        divText.style.opacity = 1;

    }, 300); // tempo da transição
}
