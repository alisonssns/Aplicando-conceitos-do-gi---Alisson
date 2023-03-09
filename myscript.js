function mostrarTexto() {
    var texto = document.getElementById("texto").value;
    var data = document.getElementById("data").value;
    var gen = document.getElementById("gen").value;
    document.getElementById("mostrarT").innerHTML = texto;
    document.getElementById("mostrarD").innerHTML = data;
    document.getElementById("mostrarS").innerHTML = gen;
  }