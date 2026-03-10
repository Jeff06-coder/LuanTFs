// Atividade Aula 02 - Conceitos básicos de JavaScript
// Execute com: node atividade-aula02.js



// 1) Tipos primitivos + typeof


console.log("\n== 1) Tipos primitivos ==");

const texto = "Olá mundo";
const numero = 42;
const booleano = true;
let indefinido;
const nulo = null;
const grande = 123456789012345678901234567890n;
const simbolo = Symbol("id");

console.log(typeof texto);       // string
console.log(typeof numero);      // number
console.log(typeof booleano);    // boolean
console.log(typeof indefinido);  // undefined
console.log(typeof nulo);        // object (bug histórico do JS)
console.log(typeof grande);      // bigint
console.log(typeof simbolo);     // symbol




// 2) BigInt e Symbol


console.log("\n== 2) BigInt e Symbol ==");

const numeroGigante = 999999999999999999999999999n;
console.log(numeroGigante);      // 999999999999999999999999999n
console.log(typeof numeroGigante); // bigint

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);        // false (cada Symbol é único)
console.log(typeof id1);         // symbol



// 3) Operadores matemáticos, lógicos e comparação


console.log("\n== 3) Operadores ==");

// Matemáticos
console.log(10 + 5);  // 15
console.log(10 * 2);  // 20

// Lógicos
console.log(true && false); // false
console.log(true || false); // true

// Comparação
console.log(5 > 3);        // true
console.log(5 == "5");     // true (compara valor, converte tipo)
console.log(5 === "5");    // false (valor igual, tipo diferente)



// 4) Concatenação e conversão dinâmica


console.log("\n== 4) Concatenação e conversão ==");

console.log(2 + "2");       // "22" (concatenação)
console.log(2 + (+"2"));    // 4 (conversão para number)

console.log("Idade: " + 30); // "Idade: 30" (concatenação)




// 5) Escopo léxico e blocos {}


console.log("\n== 5) Escopo léxico ==");

// Bloco isolado
{
    const dentroDoBloco = "Estou dentro do bloco";
    console.log(dentroDoBloco); // "Estou dentro do bloco"
}

// De fora para dentro
const fora = "Variável externa";

{
    console.log(fora); // "Variável externa"
}

// var vazando do bloco
if (true) {
    var vazou = "var escapou do bloco";
}

console.log(vazou); // "var escapou do bloco"




// 6) Shadowing com const


console.log("\n== 6) Shadowing com const ==");

const bloco = "valor";

if (true) {

    console.log(bloco); // "valor"

    {
        const bloco = "outro valor";
        console.log(bloco); // "outro valor"
    }

    console.log(bloco); // "valor"
}

console.log(bloco); // "valor"




// 7) Imutabilidade


console.log("\n== 7) Imutabilidade ==");

let palavra = "javascript";

palavra.toUpperCase();
console.log(palavra); // "javascript" (não mudou)

palavra = palavra.toUpperCase();
console.log(palavra); // "JAVASCRIPT"




// 8) Assincronismo com setTimeout


console.log("\n== 8) Assincronismo com setTimeout ==");

console.log("Explicação: setTimeout entra na fila e executa depois que o código atual termina.");

console.log("A");

setTimeout(() => {
    console.log("B"); // executa depois
}, 0);

console.log("C");

// Ordem real:
// A
// C
// B



// Segundo exemplo

setTimeout(() => {
    console.log("Timeout 0ms"); // executa primeiro
}, 0);

setTimeout(() => {
    console.log("Timeout 100ms"); // executa depois
}, 100);

// Ordem esperada:
// Timeout 0ms
// Timeout 100ms