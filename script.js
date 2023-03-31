// SUBSTITUINDO PALAVRAS
/*
let txt = "As provas estão chegando";
console.log(txt.replace("provas","avaliações"));


// APRESENTANDO  VALORES DE CASAS DECIMAIS

let num =  123.5256;
document.write(num.toFixed(2));
document.write(" <br/> <br/> "); 
//
let num2 = 123.5256;
document.write(num2.toPrecision(4));
document.write(" <br/> <br/> ");

// CAIXA DE ALERTA

alert ("Olá mundo");

// CAIXA DE CONFIRMAÇÂO

let teste=confirm("Você é um aluno?");

// TOMADA DE DECISÃO

let teste=confirm("Você é um aluno?");
document.write("O resultado é ", teste);


let text=prompt("Digite seu nome:");
document.write("Seu nome é ", text,"?");

// IF E ELSE

if(20<10){
    document.write("20 é maior q 10")

}
else{
    document.write("O número 20 não é maior que 10")
}

// IF E ELSE DECLARANDO VARIAVEL

let valor = 5
if(valor>7){
document.write(valor,"é maior que 7")
}
else{
    document.write(valor,"é menor que 7")
}



let idade=17
if(idade <= 12){
    document.write("É uma criança")
}
else if(idade <= 17){
    document.write("É um adolecente")
}
else if(idade <= 59){
    document.write("É um adulto")
}
else(idade <= 17){
    document.write("É um idoso")
}

*/

let idade=prompt("Digite sua idade:");
if(idade <= 12){
    document.write("Você pode entrar na balada KIDS")
}
else if(idade <= 17){
    document.write("Você pode entrar na MATINÊ")
}
else if(idade <= 20){
    document.write("Você pode entrar na balada NOTURNA")
}
else if(idade <= 49){
    document.write("Você pode curtir a MADRUGA")
}
else{
    document.write("Curta seu sofá")
}
