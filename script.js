const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as  soluções que a escola está buscando para a inclusão social, bem como as questões relacionadas aos direitos dos povos originários e como isso afeta os impactos causados pelo desmatamento ?",
        alternativas: [
            {
               texto: "Técnicas alternativas inovadoras",
               afirmacao: "A escola está explorando técnicas alternativas inovadoras para promover a inclusão social e abordar as questões relacionadas aos direitos dos povos originários." 
            },
            {
                texto:"Ensino multidisciplinar",
                afirmacao: "educar os alunos sobre a importância da preservação ambiental e os impactos do desmatamento"
            },
            
            
        ]
    },
    {
        enunciado: "Qual o papel fundamental dos povos indígenas na luta contra a crise climática e preservação ambiental?",
        alternativas: [
            {
                texto:"Conhecimento tradicional e práticas sustentáveis",
                afirmacao:  "Suas técnicas ancestrais têm sido eficazes na manutenção da biodiversidade e na proteção dos ecossistemas"
            },
            {
                texto: "Defesa de terras e direitos territoriais",
                afirmacao: "A proteção e a gestão de seus territórios garantem a preservação de vastas áreas de florestas."
            }
             

        ]
    },
    {
        enunciado: "Você acredita que  o conhecimento da cultura desenvolvida nas escola indígenas pode melhorar o entendimento da comunidade  em relação às mudanças climáticas atuais ?",
        alternativas: [
            {
                texto: "Sim, ao promover uma perspectiva integrada",
                afirmacao: "Através da educação sobre práticas tradicionais e visões de mundo indígenas, a comunidade pode aprender a interconectar os conhecimentos ancestrais com a ciência climática moderna"
            },
             
            {
                texto: "Não, pois a cultura indígena é específica .",
                afirmacao: "Embora promova uma consciência ecológica local, pode não oferecer a base necessária para abordar as questões globais das mudanças climáticas de forma abrangente."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click',()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2040...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
