import { obterDados } from "./storage.js";

function atualizarDashboard() {
    const entradas = obterDados("entradas");
    const contas = obterDados("contas");

    let totalEntradas = entradas.reduce((s, e) => s + e.valor, 0);
    let totalGastos = contas.reduce((s, c) => s + c.valor, 0);
    let pendente = contas.filter(c => !c.pago).reduce((s, c) => s + c.valor, 0);

    document.getElementById("entradas").innerText = totalEntradas;
    document.getElementById("gastos").innerText = totalGastos;
    document.getElementById("saldo").innerText = totalEntradas - totalGastos;
    document.getElementById("pendente").innerText = pendente;
}

atualizarDashboard();