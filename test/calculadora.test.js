const {somarDoisNumeros} = require('../src/calculadora');
const {expect} = require('chai');

describe('Testes da Função de de Soma', function (){
    
    it('A funcção deve ser capaz de somar dois números positivos', function (){
        //Coleta o resultado da função
        const resultadoSoma = somarDoisNumeros(5,3)

        //Compara o resultado com o valor esperado
        expect(resultadoSoma).to.equal(8)
    });

    it('A funcção deve ser capaz de somar um número positivo e um negativo', function (){
        //Coleta o resultado da função
        const resultadoSoma = somarDoisNumeros(50, -15)

        //Compara o resultado com o valor esperado
        expect(resultadoSoma).to.equal(35)
    });


});

