

const express = require ('express');
const app = express()

app.post('/', (req, res) =>{
    // processar dados recebidos pelo webhook
    console.log(req.body); //Vai exibir o corpo da solicitação no console

    res.status(200).send('Recebido') // vai responder com uma confirmação de sucesso
})



const port =  process.env.PORT || 3000;
 
app.listen(port, ()=>{
    console.log(`servidor rodando http://localhost:${port}`)
})

