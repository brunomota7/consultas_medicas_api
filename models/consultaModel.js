const conexao = require('../conexoes/conexao')

class AtendimentoModel {
    listar() {
        const sql = 'SELECT * FROM consultas'
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, res) => {
                if (error) {
                    console.log(`Erro ao listar atendimentos: ${err}`)
                    reject(error)
                }
                resolve(res)
            })
        }) 
    }

    criarConsulta(consulta) {
        const sql = 'INSERT INTO consultas SET ?'
        return new Promise((resolve, reject) => {
            conexao.query(sql, consulta, (error, res) => {
                if (error) {
                    console.log(`Erro ao criar atendimento: ${error}`)
                    reject(error)
                }
                resolve(res)
            })
        })
    }

    
    atualizarConsulta(consultaAtualizada, id) {
        const sql = `UPDATE consultas SET ? WHERE id = ${id}`
        return new Promise((resolve, reject) => {
            conexao.query(sql, [consultaAtualizada, id] , (error, res) => {
                if (error) {
                    console.log(`Erro ao criar atendimento: ${error}`)
                    reject(error)
                }
                resolve(res)
            })
        })
    }

    deletarConsulta(id) {
        const sql = `DELETE FROM consultas WHERE id = ${id}`
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, res) => {
                if (error) {
                    console.log(`Erro ao deletar atendimento: ${error}`)
                    reject(error)
                }
                console.log(`Consulta deletada id: ${id}`)
                resolve(res)
            })
        })
    }
}

module.exports = new AtendimentoModel()