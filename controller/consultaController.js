class ConsultaController {
    buscarConsultas() {
        return 'Buscando consultas...'
    }

    criarConsulta() {
        return 'Criando consulta...' 
    }

    atualizandoConsulta(id) {
        return `Atualizando consulta id: ${id}...`
    }

    deletaConsulta(id) {
        return `Deletando consulta id: ${id}...`
    }
}

module.exports = new ConsultaController()