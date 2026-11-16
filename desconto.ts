export function calcularDesconto(valor: number, percentual: number) {

    if (valor < 0 || percentual < 0 || percentual > 100) {
        throw new Error("Valores inválidos");
    }
    return valor * (1- percentual / 100);
}