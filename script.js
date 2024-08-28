const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas= document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [ 
    {
        enunciado: "No ambito social, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 1",
                afirmação: "Parabéns, boa viagem e boa sorte! Aproveite enquanto puder.",
            },
            {
                texto: "Alternativa 2",
                afirmação: "Parabéns! Você ficou milionário e sozinho, espero que valha a pena.",
            }
        ]
    },
    {
        enunciado: "No ambito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 3",
                afirmação: "Parabéns! Você a maior floresta do mundo!",
            },
            {
                texto: "Alternativa 4",
                afirmação: "Parabéns! Você colocou os humanos em existinção",
            }
        ]
    },
    {
        enunciado: "No ambito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 5",
                afirmação: "Parabéns! Você ganhou um novo corpo (e não faz ideia de como será)!",
            },
            {
                texto: "Alternativa 6",
                afirmação: "Parabéns! Você colocou o controle do mundo nas mãos de uma máquina",
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual>= alternativas.length){
      mostraResultado();
      return
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmaçoes = opcao.alternativas;
    historiaFinal += afirmaçoes + " ";
    atual++;
    mostraPerguntas();

}

function mostraResultado (){
    caixaPerguntas.textContent = "Você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();
