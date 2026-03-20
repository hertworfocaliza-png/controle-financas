import { salvarDados, obterDados } from "./storage.js";

const form = document.getElementById("formConta");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = document.getElementById("desc").value;
    const valor = parseFloat(document.getElementById("valor").value);

    const contas = obterDados("contas");

    contas.push({ descricao, valor, pago: false });

    salvarDados("contas", contas);

    alert("Conta adicionada!");
    form.reset();
});