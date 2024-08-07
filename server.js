const express = require('express');
const cors    = require('cors');
const userRouter = require('./routes/userRoute');
const port       = 9090;
const app = express();

app.use(express.json());

app.use(cors());

app.use('/usuario', userRouter)

app.listen(port, ()=>{
    try {
        console.log(`Servidor rodando no link http://localhost:${port}`)
    } catch (error) {
        console.log(`Erro ao iniciar servidor ${error}`)
    }
});