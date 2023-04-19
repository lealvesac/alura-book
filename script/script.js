async function buscaEndereco(cep) {
    let msgErro = document.getElementById("erro");
    msgErro.innerHTML = "";
  try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCepConvertida = await consultaCEP.json();
    if (consultaCepConvertida.erro) {
      throw Error("CEP não existente!");
    }

    let cidade = document.getElementById("cidade");
    let logradouro = document.getElementById("endereco");
    let estado = document.getElementById("estado");
    let bairro = document.getElementById("bairro");

    cidade.value = consultaCepConvertida.localidade;
    logradouro.value = consultaCepConvertida.logradouro;
    estado.value = consultaCepConvertida.uf;
    bairro.value = consultaCepConvertida.bairro;

    return consultaCepConvertida;
  } catch (error) {
    msgErro.innerHTML = "<p>CEP Inválido, tente novamente!</p>"
  }
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
