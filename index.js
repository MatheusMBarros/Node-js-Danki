const http = require('http')//importando do node
const fs = require('fs')

const hostname = "127.0.0.1"; // localhost

const port = "3000"; // define a porta que o servidor vai rodar


// const server = http.createServer((require, response) => { // Criando o servidor

//     response.statusCode = 200; // status code correto
//     response.setHeader('Content-Type', 'text/plain');

//     response.end("Hello Barros");//

// })

const server = http.createServer((require, response) => {

    if (require.url == '/barros') {
        fs.readFile('index.html', (err,data) => {
        response.writeHead(200, { 'Contet-Type': 'text/html' }) // lendo arquivo
        response.write(data);
        return response.end();
        })
   } else {
        console.log('acesso negado')
        return response.end()
        }


})

server.listen(port, hostname, () => {
    console.log("Servidor está rodando");
})// informa a porta e o hostname que o servidor vai ouvir e retorna um callback
