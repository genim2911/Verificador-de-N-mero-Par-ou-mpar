let continuar = true;

while (continuar) {let entrada = prompt("Digite um número:");
    let numero = Number(entrada);

    if (entrada === null) {console.log("Programa encerrado pelo usuário");
        break;
    }
    if (isNaN(numero) || entrada.trim()=== "") {
        alert("valor inválido, por favor digite um número válido.");
    }   else {
        if (numero % 2 === 0) {
            alert(`O numero ${numero} é par`);
        }   else {
            alert(`O numero ${numero} é impar`);
        }
    }

    let resposta = prompt("Deseja testar outro numero? (s/n)");

    if (resposta === null || resposta.toLowerCase() !== "s") {
        continuar = false;
        alert("Programa encerrado. Obrigado por usar!");
        console.log("Programa encerrado pelo usuário");
    }
}