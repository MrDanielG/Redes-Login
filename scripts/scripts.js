let xmlHttp = null;

function get(url, accion) {
  xmlHttp = crearXMLHttpRequest();
  xmlHttp.onreadystatechange = accion;
  xmlHttp.open('GET', url, true);
  xmlHttp.send();
}

var elemento = id => document.getElementById(id);

function verificar() {
  let nombreUsr = elemento('usernameInp').value;
  get('../php/verificaUsuario.php?nombre=' + nombreUsr, cargar);
}

function crearXMLHttpRequest() {
  var xmlHttp = null;
  if (window.ActiveXObject) xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  else if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}

function cargar() {
  let respuestaUsr = elemento('verificaUsr');

  if (xmlHttp.readyState == 4) {
    respuestaUsr.innerHTML = xmlHttp.responseText;
  }
}
