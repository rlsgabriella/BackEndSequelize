const {user} = require('../models');


const buscarDados = async (req, res)=>{
    const dados = await user.findAll();

    res.status(200).json(dados);
}


module.exports = {
    buscarDados
}