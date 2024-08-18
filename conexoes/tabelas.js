class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criaTabelaConsulta()
    }

    criaTabelaConsulta() {
        const sql = `
            CREATE TABLE IF NOT EXISTS consultas (
                id int not null auto_increment primary key,
                paciente varchar(100),
                tip_consulta varchar(120),
                data_consulta date,
                status enum('Ativa', 'Realizada', 'Cancelada') default 'Ativa'
            )`;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log(`Erro ao criar tabela: ${err}`)
                return
            }
            console.log('Tabela criada com sucesso!');
        })
    }
}

module.exports = new Tabelas()