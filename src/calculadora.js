function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;

}

function calcularMediaDeDoisNumeros(valor1, valor2){
    //1. Soma todos os valores
    const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);
    //2. Divide pela quantidade de números passados
    
    const mediaDeDoisValores = resultadoSomaDeDoisValores / 2;
    
    //3. Retornar o resultado
    return mediaDeDoisValores;

}


function somarCamposDaTela(){
    const valor1 = n1;
    const valor2 = n2;

    const resultado = somarDoisNumeros(valor1,valor2);
    console.log(resultado);

}

module.exports = {
    somarDoisNumeros
}
