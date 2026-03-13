
// Criando um objeto com 3 propriedades simples e uma array
const pessoa = {
  nome: "João",
  idade: 30,
  email: "joao@example.com",
  filhos: ["Maria", "Pedro", "Ana"]
};

console.log('--------------------');

// Uso do objeto
console.log("Nome:", pessoa.nome); // Acessando a propriedade 'nome'

console.log('--------------------');

// Interação com for in
for (let chave in pessoa) {
  console.log(chave + ":", pessoa[chave]);
}

console.log('--------------------');

// Usando for of
for (let filho of pessoa.filhos) {
  console.log("Filho:", filho);
}

console.log('--------------------');

// Exemplo de cópia por referência
const oi = pessoa;
// Exemplo de cópia spread
const ola = {...pessoa}
console.log(oi === ola); 

console.log('--------------------');

// Transformação do objeto em JSON com JSON.stringify()
const pessoaJSON = JSON.stringify(pessoa);
console.log("Pessoa em JSON:", pessoaJSON);

