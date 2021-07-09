const submeterformulario = () => {
 const rangeinicial = document.getElementById ('rangeinicial').value;
 const rangefinal = document.getElementById ('rangefinal').value;
 const linhaaposta = document.getElementById ('linha aposta').value;

 realizarSorteio(+rangeinicial, +rangefinal, +linhaaposta);
}
const realizarSorteio = (rangeinicial, rangefinal, linhaaposta) => {

    if (!rangeinicial) {
        alert ('Informe o range inicial!');
        return; 
    }
    if (!rangefinal) {
        alert ('Informe o range final!');
        return; 
    }
    if (!linhaaposta) {
        alert ('Informe a sua aposta!');
        return;
    }
   
        const numeroSorteado = novoSorteio(rangeinicial, rangefinal);
        if(numeroSorteado === linhaaposta) {
            alert ('Parabéns! voce acertou');
            return;
        }

        alert(`Errou! O numero sorteado foi: ${numeroSorteado}`)
}

const novoSorteio = (rangeinicial, rangefinal) => {
    return (Math.floor(Math.random() * (rangefinal - rangeinicial + 1)) + rangeinicial);
}