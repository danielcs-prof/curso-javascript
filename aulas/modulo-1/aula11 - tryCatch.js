// TRY - CATCH - IF DOS ERROS

try{ // IF ERRO
    // Executa algo: consulta API, banco de dados, arquivos ...
    console.log('Conexão com banco de dados')
    throw "Erro 1000 - falhou ao tentar conexão com o banco de dados ..."
}catch(error){ // ELSE DO ERRO
    // lança o erro
    alert('ERRO - mensagem amigavel ao usuario')
    console.log('Erro para desenvolvedor: ', error)
}
finally{
    // sempre executa ao final (opcional)
    console.log('Execução apos o erro')
}
