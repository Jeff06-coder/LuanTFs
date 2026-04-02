const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');

async function main() {
  try {
    const dir = path.join(__dirname, 'storage');
    const filePath = path.join(dir, 'aula05.txt');

    console.log(chalk.blue('Verificando/Criando pasta...'));

    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir);
      console.log(chalk.yellow('Pasta criada!'));
    }

    console.log(chalk.blue('Criando arquivo...'));

    const content = `Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.`;

    await fs.writeFile(filePath, content);

    console.log(chalk.green('Arquivo criado com sucesso!'));

    const data = await fs.readFile(filePath, 'utf-8');

    console.log(chalk.cyan('Conteúdo do arquivo:'));
    console.log(data);

  } catch (err) {
    console.log(chalk.red('Erro ao executar:'), err);
  }
}

main();