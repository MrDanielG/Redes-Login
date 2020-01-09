let xmlHttp = null;

function verificar() {
  let nombreUsr = document.getElementById('usernameInp').value;
  xmlHttp = crearXMLHttpRequest();
  xmlHttp.onreadystatechange = cargar;
  xmlHttp.open('GET', '../php/verificaUsuario.php?nombre=' + nombreUsr, true);
  xmlHttp.send();
}

function login() {}

function crearXMLHttpRequest() {
  var xmlHttp = null;
  if (window.ActiveXObject) xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  else if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}

function cargar() {
  let respuestaUsr = document.getElementById('verificaUsr');

  if (xmlHttp.readyState == 4) {
    respuestaUsr.innerHTML = xmlHttp.responseText;
  }
}
