async function buscaEndereco() {
    let consultaCEP = await fetch("https://viacep.com.br/ws/89107000/json/");
    let consultaCepConvertida = await consultaCEP.json();

    console.log(consultaCepConvertida);
}
buscaEndereco();