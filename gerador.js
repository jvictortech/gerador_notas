// Variáveis globais para armazenar notas e votos
let notas = [];
let votosPositivos = 0;
let votosNegativos = 0;

// Função para calcular a média das notas
function calcularMedia() {
    if (notas.length === 0) {
        return 0;
    }
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
}

// Função para adicionar uma nota
function adicionarNota() {
    const notaInput = document.getElementById("nota");
    const nota = parseFloat(notaInput.value);
    
    if (!isNaN(nota) && nota >= 0 && nota <= 10) {
        notas.push(nota);
        notaInput.value = "";
        atualizarMedia();
    } else {
        alert("Insira uma nota válida entre 0 e 10.");
    }
}


// Função para atualizar a exibição da média
function atualizarMedia() {
    const mediaDiv = document.getElementById("media");
    const media = calcularMedia();
    mediaDiv.innerHTML = `Média das notas: ${media.toFixed(2)}`;
}

// Funções para votação
function votarPositivo() {
    votosPositivos++;
    atualizarVotos();
}

function votarNegativo() {
    votosNegativos++;
    atualizarVotos();
}

// Função para atualizar a exibição dos votos
function atualizarVotos() {
    const votosPositivosSpan = document.getElementById("votosPositivos");
    const votosNegativosSpan = document.getElementById("votosNegativos");
    votosPositivosSpan.textContent = votosPositivos;
    votosNegativosSpan.textContent = votosNegativos;
}

// Inicialização
atualizarMedia();
atualizarVotos();
