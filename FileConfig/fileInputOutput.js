//para poder usar read e write
const fs = require('fs')

//arrow funciton ja retorna a ultima linha quando é de uma linha so
//__dirname é o caminho atual
const read = nomeArquivo => 
    fs.readFileSync(`${__dirname}/../${nomeArquivo}`, { encoding: 'utf8' })


const write = (nomeArquivo, conteudo) => {
    const dirname = `${__dirname}/../after-email`
    //verifica se a pasta existe se nao existe ja cria ela na proxima linha
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname)
    }

    fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { encoding: 'utf8' })
}
//exportar para usar 
module.exports = { read, write }