const consultaModel = require('../models/consultaModel')
class ConsultaController {
    buscarConsultas() {
        return consultaModel.listar()
    }

    criarConsulta(novoAtendimento) {
        return consultaModel.criarConsulta(novoAtendimento) 
    }

    atualizandoConsulta(consultaAtualizada, id) {
        return consultaModel.atualizarConsulta(consultaAtualizada, id)
    }

    deletaConsulta(id) {
        return consultaModel.deletarConsulta(id)
    }
}

module.exports = new ConsultaController()