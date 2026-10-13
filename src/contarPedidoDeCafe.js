export function contarPedidoDeCafe (pedidos) {
    let quantidadeDeCafe = 0

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i] === 'cafe') {
            quantidadeDeCafe++
        }
    }

    return quantidadeDeCafe
}