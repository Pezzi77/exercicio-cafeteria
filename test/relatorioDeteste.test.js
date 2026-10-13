import {relatorioDeTeste} from '../src/relatorioDeTeste.js';
import assert from "node:assert";

describe('Gerar relatorio de teste', () => {

    it('CT04 - Deve retornar o relatorio esperado: total de testes: 5, toal de sucesso: 3, total de falhas: 2, pass rate: 60%', () => {
       const gerarRelatorio = ['pass', 'fail', 'pass', 'fail', 'pass'];
       const expect = [3, 5, 2, 60] 

       const actual = relatorioDeTeste(gerarRelatorio);

       assert.deepStrictEqual(actual, expect)
    })
    
    it('CT05 - Deve retornar o relatorio esperado: total de testes: 5, toal de sucesso: 5, total de falhas: 0, pass rate: 100%', () => {
       const gerarRelatorio = ['pass','pass', 'pass','pass','pass'];
       const expect = [5, 5, 0, 100] 

       const actual = relatorioDeTeste(gerarRelatorio);

       assert.deepStrictEqual(actual, expect)
    })

    it('CT06 - Deve retornar o relatorio esperado: total de testes: 5, toal de sucesso: 0, total de falhas: 5, pass rate: 0%', () => {
       const gerarRelatorio = ['fail','fail','fail','fail','fail'];
       const expect = [0, 5, 5, 0] 

       const actual = relatorioDeTeste(gerarRelatorio);

       assert.deepStrictEqual(actual, expect)
    })



})