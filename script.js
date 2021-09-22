var cartas = [
  {
    nome: "Bulbassauro",
    atributos: { ataque: 7, defesa: 8, magia: 6 },
    img:
      "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg"
  },
  {
    nome: "Darth Vader",
    atributos: { ataque: 9, defesa: 8, magia: 2 },
    img:
      "https://a-static.mlcdn.com.br/1500x1500/boneco-darth-vader-olympus-star-wars-hasbro/toymaniabrinquedos/77093/eee45ee57ee0aed7d8b70091dba0813f.jpg"
  },
  {
    nome: "Shiryu",
    atributos: { ataque: 5, defesa: 9, magia: 10 },
    img:
      "https://static3.tcdn.com.br/img/img_prod/460977/action_figure_shiryu_dragon_shiryu_os_cavaleiros_do_zodiaco_saint_seiya_saint_cloth_myth_revival_ver_49959_1_20201211173104.jpg"
  },
  {
    nome: "Neo",
    atributos: { ataque: 4, defesa: 10, magia: 8 },
    img:
      "https://img.estadao.com.br/thumbs/640/resources/jpg/7/6/1566336669167.jpg"
  }
  // template de nova carta
  // {
  // nome: "",
  // atributos: { ataque: , defesa: , magia: },
  //   img: "",
  // }
];

var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var indiceCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[indiceCartaMaquina];

  do {
    var indiceCartaJogador = parseInt(Math.random() * cartas.length);
  } while (indiceCartaJogador == indiceCartaMaquina);
  cartaJogador = cartas[indiceCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "<img src=" + cartaJogador.img + "><br>";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' checked='true' value='" +
      atributo +
      "'>" +
      atributo +
      ":" +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  var textoElemento = `<span><p>${cartaJogador.nome}</p><img src="${cartaJogador.img}"><p>${atributoSelecionado}: ${valorCartaJogador}</p></span><span class="vs">VS</span><span><p>${cartaMaquina.nome}</p><img src="${cartaMaquina.img}"><p>${atributoSelecionado}: ${valorCartaMaquina}</p></span>`;

  if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "<p>Você Perdeu!</p>" + textoElemento;
  } else if (valorCartaMaquina == valorCartaJogador) {
    elementoResultado.innerHTML = "<p>Empate!</p>" + textoElemento;
  } else {
    elementoResultado.innerHTML = "<p>Você Venceu!</p>" + textoElemento;
  }

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnReset").disabled = false;
}

function reset() {
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = "";
  var opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnReset").disabled = true;
}
