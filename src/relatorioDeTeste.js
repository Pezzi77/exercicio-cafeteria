export function relatorioDeTeste(relatorio) {
    let sucesso = 0;
    let falha = 0;
    let total = 0;
    let passrate = 0;
    let gerarRelatorio = [];

    for (let i = 0; i < relatorio.length; i++) {
        total++;

        if (relatorio[i] === 'pass') {
            sucesso++
        } else {
            falha++
        }
    }

    passrate = ( sucesso / total) * 100;

    gerarRelatorio.push(sucesso);
    gerarRelatorio.push(total);
    gerarRelatorio.push(falha);
    gerarRelatorio.push(passrate);

    return gerarRelatorio
}