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
                afirmação: "Afirmação 1",
            },
            {
                texto: "Alternativa 2",
                afirmação: "Afirmação 2",
            }
        ]
    },
    {
        enunciado: "No ambito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 3",
                afirmação: "Afirmação 3",
            },
            {
                texto: "Alternativa 4",
                afirmação: "Afirmação 4",
            }
        ]
    },
    {
        enunciado: "No ambito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Alternativa 5",
                afirmação: "Afirmação 5",
            },
            {
                texto: "Alternativa 6",
                afirmação: "Afirmação 6",
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;

function mostraPerguntas (){
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();
