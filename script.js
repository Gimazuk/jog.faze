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
                texto: "Ganhar 50 mil euros e uma viagem para Dubai, porém quando voltar da viagem 2 anos depois, você ficará 5x mais pobre do que você é hoje.",
                afirmação: "Ao escolher a viagem, boa sorte! Aproveite enquanto puder.",
            },
            {
                texto: "Ter a chance de descobrir os próximos números da loteria da mega sena da virada que sorteará um prêmio de 400 milhões de reais, porém todas as pessoas que você conhece esquecerão da sua existência, sem chance de viver juntos novamente.",
                afirmação: "Parabéns! Você ficou milionário e sozinho, espero que valha a pena.",
            }
        ]
    },
    {
        enunciado: "No ambito ambiental, você prefere:",
        alternativa: [
            {
                texto: "Ter a chance de acabar com a fome do mundo, porém para financiar essa filantropia você terá que permitir que todas as árvores da Amazônia sejam cortadas e vendidas.",
                afirmação: "Você destruiu a maior floresta do mundo!",
            },
            {
                texto: "Salvar todas as florestas e toda biodiversidade do planeta, porém a população humana cairá para 4 bilhões sem possibilidade de reprodução.",
                afirmação: "Parabéns! Você colocou os humanos em extinção",
            }
        ]
    },
    {
        enunciado: "No ambito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Ter a chance de se tornar imortal, mas para isso sua consciência será transferida para um robô humanoide.",
                afirmação: "e ganhou um novo corpo (e não faz ideia de como será)!",
            },
            {
                texto: "Ter a oportunidade de criar uma máquina inteligente capaz de resolver todos os problemas sociais do planeta, porém para isso toda tecnologia do mundo pararia de funcionar e a única tecnologia existente do mundo seria a máquina.",
                afirmação: "e colocou o controle do mundo nas mãos de uma máquina",
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
    const afirmaçoes = opcao.afirmação;
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
