import { obterDados } from "./storage.js";

function gerarRelatorio() {
    const entradas = obterDados("entradas");
    const contas = obterDados("contas");

    const totalEntradas = entradas.reduce((s, e) => s + e.valor, 0);
    const totalGastos = contas.reduce((s, c) => s + c.valor, 0);

    document.getElementById("relatorio").innerHTML = `
        <p>Total Entradas: R$ ${totalEntradas}</p>
        <p>Total Gastos: R$ ${totalGastos}</p>
        <p>Saldo: R$ ${totalEntradas - totalGastos}</p>
    `;
}

gerarRelatorio();