import { salvarDados, obterDados } from "./storage.js";

const form = document.getElementById("formEntrada");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const descricao = document.getElementById("desc").value;
    const valor = parseFloat(document.getElementById("valor").value);

    const entradas = obterDados("entradas");

    entradas.push({ descricao, valor });

    salvarDados("entradas", entradas);

    alert("Entrada salva!");
    form.reset();
});