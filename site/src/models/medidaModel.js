var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        Personagem1, 
        Personagem2,
        Personagem3,
        Personagem4
                    from times
                    where fkUsuario = ${idUsuario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
       // select 
        // Personagem1, 
        // Personagem2, 
        // Personagem3, 
        // Personagem4,
        //             from times
        //             where fkUsuario = ${idUsuario}
        //             order by id desc limit ${limite_linhas} 
        
        instrucaoSql = `
                    select Personagem1, 
        Personagem2, 
        Personagem3, 
        Personagem4
        from times where fkUsuario = ${idUsuario} order by fkUsuario desc limit ${limite_linhas};
                    `;
                    
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 2
        Personagem1, 
        Personagem2, 
        Personagem3, 
        Personagem4,
                    from times
                    where fkUsuario = ${idUsuario}
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select Personagem1, 
            Personagem2, 
            Personagem3, 
            Personagem4
            from times where fkUsuario = ${idUsuario} order by idTimes desc limit 2`;
        instrucaoSql2 = `
        
        `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarVotos() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        select count(Voto) as Sim from votos
	        where voto = 'Sim';
        `;
        instrucaoSql2 = `
        select count(Voto) as Não from votos
            where voto = 'Não';
        `;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        select count(Voto) as voto from votos group by voto;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


module.exports = {
    buscarUltimasMedidas,
    buscarVotos,
    buscarMedidasEmTempoReal
}
