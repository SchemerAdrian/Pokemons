const pokemons = [
    {
        numero: "001",
        nome: "Bulbasaur",
        tipo: "Planta",
        descricao: "Uma semente estranha foi plantada em suas costas ao nascer. A planta brota e cresce junto com este pokemon.",
        imagem: "Gen1/001.png"
    },
    {
        numero: "002",
        nome: "Ivysaur",
        tipo: "Planta / Veneno",
        descricao: "A luz solar fará a flor em suas costas crescer. Conforme Ivysaur for crescendo, essa flor irá desabrochar. Ela irá soltar um doce aroma quando florescer.",
        imagem: "Gen1/002.png"
    },
    {
        numero: "003", nome: "Venusaur",
        tipo: "Planta / Veneno",
        descricao: "Há uma grande flor nas costas do Venusaur. Diz-se que a flor adquire cores vivas, caso receba muita nutrição e luz solar. O aroma da flor acalma as emoções das pessoas.",
        imagem: "Gen1/003.png"
    },
    {
        numero: "004",
        nome: "Charmander",
        tipo: "Fogo",
        descricao: "Obviamente prefere lugares quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
        imagem: "Gen1/004.png"
    }
];

let atual = 0;

function exibir() {
    const i = pokemons[atual];

    document.getElementById("numero").innerText = i.numero;
    document.getElementById("nome").innerText = i.nome;
    document.getElementById("tipo").innerText = i.tipo;
    document.getElementById("descricao").innerText = i.descricao;
    document.getElementById("imagem").src = i.imagem;
    document.getElementById("imagem").alt = i.nome;
}

function proximo() {
    if (atual < pokemons.length - 1) {
        atual++;
        exibir();
    } else {
        atual = 0;
        exibir();
    }
}

function anterior() {
    if (atual > 0) {
        atual--;
        exibir();
    } else {
        atual = pokemons.length - 1;
        exibir();
    }
}

document.addEventListener("DOMContentLoaded", exibir);