export function salvarDados(chave, dados) {
    localStorage.setItem(chave, JSON.stringify(dados));
}

export function obterDados(chave) {
    return JSON.parse(localStorage.getItem(chave)) || [];
}