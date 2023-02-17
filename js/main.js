let tempoInicial = $("#tempo-Digitação").text();
let campo = $(".campo-digitacao");

$(document).ready(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    InicializaCronometro();
    $("#bota-reiniciar").click(reiniciaJogo);

});

function atualizaTamanhoFrase() {
    let frase = $(".frase").text();
    //esse metodo ele devide a frase por palavras no console(split)
    let numPalavras = frase.split(" ").length;//(length -vai pegar quantidade de número)
    let tamanhoFrase = $("#tamanho-frase");
    tamanhoFrase.text(numPalavras);

}

function inicializaContadores() {
    campo.on("input", function () {
        let conteudo = campo.val();


        let qtdPalavras = conteudo.split(" ").length;
        $("#contador-palavras").text(qtdPalavras);

        let qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
            
    });
}

function InicializaCronometro() {

    let tempoRestante = $("#tempo-digitacao").text();
    //focus deteta quando o usuaio está digitando ou quando aperta Tab.(no nosso campo). 
    campo.one("focus", function () {
        let cronometroID = setInterval(function () {

            tempoRestante--;
            // console.log(tempoRestante);
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.toggleClass("campo-desativado");
            }

        }, 1000);

    });
}
let frase = $(".frase").text();
campo.on("input", function(){
let digitado = campo.val();
let comparavel = frase.substr(0,digitado.length);
console.log("Digitado:" + digitado);
console.log("Frase C.:" + comparavel);
if(digitado == comparavel){
    campo.addClass("borda-verde");

}else {
    campo.addClass("borda-vermelho");
}

});

function reiniciaJogo() {
    campo.attr("disabled", false);
    campo.val("")
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("tempo-digitacao").text(tempoInicial);
    InicializaCronometro();
    campo.toggleClass("campo-desativado")
}







