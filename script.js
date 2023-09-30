function exercicio1() {
  var nota = parseInt(prompt("Digite um numero"));

  while (nota < 0 || nota > 10) {
    nota = parseInt(prompt("Digite novamente a nota"));
  }
  document.getElementById("root").style.display = "block"
  document.getElementById("root").innerHTML = `<p>A sua nota: ${nota}</p>`;
}

function exercicio2() {
  const timerDiv = document.getElementById('root');
  let timerCount = 10;
  var cronometro = setInterval(() => {
      timerDiv.innerHTML = `<p>${timerCount--}</p>`;
    if (timerCount === 0) {
      clearInterval(cronometro)
        timerDiv.innerHTML = `<p> Feliz Ano Novo </p>`;
      }
  }, 1000);
};

function exercicio3() {
  var teste = prompt("Nome");
  var s = prompt("Senha");

  while (teste === s) {
    alert("Os campos estão iguais")
    teste = prompt("Nome");
    s = prompt("Senha");
  }

  document.getElementById("root").style.display = "block"
  document.getElementById("root").innerHTML = `Nome:${teste}<br> Senha:${s}`;
}

function exercicio4 () {
    var num1 = parseInt(prompt("digite um numero"))
    var num2 = parseInt(prompt("digite outro numero"))
    var resultado = num1 + num2
    alert(resultado)
    document.getElementById("root").style.display = "block"
    document.getElementById("root").innerHTML = `
    <P> sua soma ${num1} + ${num2} = ${resultado}</p>`
}

function limpar() {
  document.getElementById("root").style.display = "none"
  exercicio4 = document.getElementById("exercicio4").style.display = "none"
}
