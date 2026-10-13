import {contarPedidoDeCafe} from "../src/contarPedidoDeCafe.js";
import assert from "node:assert";

describe('Validar resultado de pedidos de cafe',() => {
    
    it('CT01 - Deve retornar 2 pedidos de cafe',() => {
        const resultadoEsperado = 2;
        let pedidos = ['cafe', 'cha', 'bolo', 'cafe','suco']
        let resultadoEncontrado = contarPedidoDeCafe(pedidos);

        assert.equal(resultadoEncontrado, resultadoEsperado)
    })

    it('CT02 - Deve retornar 0 pedidos de cafe',() => {
        const resultadoEsperado = 0;
        let pedidos = [ 'cha', 'bolo','suco']
        let resultadoEncontrado = contarPedidoDeCafe(pedidos);

        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT03 - Deve retornar 4 pedidos de cafe',() => {
        const resultadoEsperado = 4;
        let pedidos = ['cafe', 'cafe','cafe','cafe']
        let resultadoEncontrado = contarPedidoDeCafe(pedidos);

        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
})