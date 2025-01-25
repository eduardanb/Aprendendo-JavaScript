const listaDeConvidados = ["Lidiane", "Maria", "Jorge"];

console.log("Quantidade de Convidados para Festa: ");

//Quantidade de valores no Array
console.log(listaDeConvidados.length);

console.log("Primeiro Convidado: ", listaDeConvidados[0]);

console.log("Último Convidado:", listaDeConvidados[listaDeConvidados.length - 1]);

const indiceMaria = listaDeConvidados.indexOf("Maria");
console.log("Índice de Maria: ", indiceMaria + 1);