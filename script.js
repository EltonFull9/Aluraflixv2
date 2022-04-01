var filmes = [
  "https://cinearaujo.com.br/filmes/filme3105_f21.jpg",
  "https://cinearaujo.com.br/filmes/filme3105_f21.jpg"
];
var nomes = ["morbius", "fasfasf"];

verfilmes();

function addfilme() {
  var entrada = document.getElementById("filme").value;
  var nome = document.getElementById("nomefilme").value;

  if (entrada.endsWith("jpg") & (nome != "")) {
    filmes.push(entrada);
    nomes.push(nome);
    verfilmes();
    document.getElementById("filme").value = "";
    document.getElementById("nomefilme").value = "";
  } else {
    document.getElementById("filme").value = "";
    document.getElementById("nomefilme").value = "";
    alert("Link invalido ou campo vazio");
  }
}

function verfilmes() {
  var vernatela = document.getElementById("listaFilmes");
  //var n = document.getElementById("listanomes");
  vernatela.innerHTML = "";
  //n.innerHTML = "";
  filmes.forEach(function (item, indice, array) {
    vernatela.innerHTML += `
          <div class="filme">
          <img src= ${filmes[indice]} />  
          <p class="nomes">${nomes[indice]}</p>
          </div>
         `;
  });
}

function remove() {
  var entrada = document.getElementById("filme").value;
  var entrada2 = document.getElementById("nomefilme").value;

  if ((entrada != "") | (entrada2 != "")) {
    var indice = filmes.indexOf(entrada);
    if (indice > -1) {
      filmes.splice(indice, 1);
      nomes.splice(indice, 1);
      document.getElementById("filme").value = "";
      verfilmes();
    } else {
      indice = nomes.indexOf(entrada2);
      if (indice > -1) {
        filmes.splice(indice, 1);
        nomes.splice(indice, 1);
        document.getElementById("nomefilmes").value = "";
        verfilmes();
      } else alert("Filme não cadastrado");
    }
  } else alert("Campos em branco");
}