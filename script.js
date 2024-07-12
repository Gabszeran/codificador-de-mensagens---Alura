document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente carregado.");
});

function criptografar() {
  let textoEntrada = document.querySelector(".entrada-texto__texto").value;
  const regex = /^[A-Z0-9áàãâéêíóôõúçÁÀÃÂÉÊÍÓÔÕÚÇ\s!@#$%&*()_+=-]*$/;
  const resultado = regex.test(textoEntrada);
  console.log(resultado);

  if (resultado === false) {
    function chavesCriptografia(texto) {
      return texto
        .replace(/a/g, "ai") // g: Procura todas as ocorrências da letra "a" na string.
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    }

    const textoCriptografado = chavesCriptografia(textoEntrada);
    console.log(textoCriptografado);
  } else {
    console.log("Apenas letras minúsculas e sem acento.");
  }
}

document
  .querySelector(".entrada-texto__botoes__criptografar")
  .addEventListener("click", criptografar);
