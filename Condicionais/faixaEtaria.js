const idade = 12;

if (idade >=0 && idade <= 12) {
    console.log("Você é uma criança");
} else if (idade >= 13 && idade <=17) {
    console.log("Você é um adolescente");
} else if (idade >= 18 && idade < 25) {
    console.log("Você é um jovem adulto" );
} else if (idade >= 25 && idade <= 59) {
    console.log("Você é um adulto");
} else {
    console.log("Você é um idoso");
}