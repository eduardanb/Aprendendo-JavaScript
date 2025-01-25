console.log("Treinando Condicionais");

const idade = 16;
const maioridade = 18;

if (idade >= maioridade) {
    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir");
    const tempoParaMaioridade = maioridade - idade;
    
    if (tempoParaMaioridade === 1) {
        console.log("Faltam " + tempoParaMaioridade + " ano para você poder dirigir");
    } else {
        console.log("Faltam " + tempoParaMaioridade + " anos para você poder dirigir");
    }
}

