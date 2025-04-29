//numero do visor
const visor = document.querySelector(".zerou");

//variavel inicial
let juntarNumeros = "";

//botoes
const botao = document.querySelectorAll("button");

//Para cada botão encontrado...
botao.forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent;

        //Se o botão for "APG"
        if (valor === "=") {
            try {
                juntarNumeros = juntarNumeros.replace(/,/g, '.'); // troca vírgulas por pontos
                juntarNumeros = eval(juntarNumeros); // calcula
                visor.textContent = juntarNumeros;  //mostra resultado
            } catch {
                visor.textContent = "Erro";
            }
        }
        else if (valor == "APG") {
            juntarNumeros = juntarNumeros.slice(0, -1); //remove o ultimo numero
            visor.textContent = juntarNumeros || "0";   //mostra oque sobrou
        }
        else {
            juntarNumeros += valor;
            visor.textContent = juntarNumeros;
        }
    });
});

//No meu primeiro pensamento eu pensei em usar isso , porem lembrei que depois podia pegar todos de uma vez usando "querySelectorAll("button")"

/*numeros clicados 
const zero = document.querySelector(".zero")
const um = document.querySelector(".um");
const dois = document.querySelector(".dois");
const tres = document.querySelector(".tres")
const quatro = document.querySelector(".quatro")
const cinco = document.querySelector(".cinco")
const seis = document.querySelector(".seis")
const sete = document.querySelector(".sete")
const oito = document.querySelector(".oito")
const nove = document.querySelector(".nove")
*/ 