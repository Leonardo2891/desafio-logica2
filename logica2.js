function main(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {nivel = "ferro";}
    else if (vitorias => 20) {nivel = "bronze"}
    else if (vitorias => 50) {nivel = "prata"}
    else if (vitorias => 80) {nivel = "ouro"}
    else if (vitorias => 90) {nivel = "diamente"}
    else if (vitorias => 100) {nivel = "lendario"}
    else if (vitorios => 102) {nivel = "imertoal"}

    return "O heroi tem saldo de " + saldo + " vitórias e está no nível " + nivel 
}

console.log(main(55, 20))

