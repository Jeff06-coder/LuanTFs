// Chando a biblioteca Express pra ser usada
const express = require('express');
// Criando uma instância do Express na const app
const app = express();

// Fazendo o Express entender JSON no corpo das requisições
app.use(express.json()); // permite ler JSON no body

// Rota GET
// Define o caminho. Quando alguem accesar /rota no site ativa a function e executa o recebimento e envia a resposta
app.get('/rota', (req, res) => {
    // o que esta aqui dentro ativa quando /rota é ativado
  const nome = req.query.nome;
  res.send(`Olá ${nome} (via GET)`);
});

// Rota POST
// Envianto dados para o body dessa vez, funciona da mesma forma
app.post('/rota', (req, res) => {
    // caso alguem envie resposta no formato json, ele pega e devolve resposta
  const nome = req.body.nome;
  res.send(`Olá ${nome} (via POST)`);
});

// Iniciando o servidor na porta 3000 e exibindo mensagem no console
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});