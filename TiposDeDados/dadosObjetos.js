const fichaDuda = {
    //Chave      Valor
    nome: "Maria Eduarda",
    idade: 19,
    profissao: "Programadora",
    temCarro: false,
};

console.log("Ficha da Duda: ", fichaDuda);
console.log("Nome: " + fichaDuda.nome);

fichaDuda.temCarro = true;
console.log("Ficha da Duda atualizada: ", fichaDuda);

delete fichaDuda.temCarro;