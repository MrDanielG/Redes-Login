let xmlHttp = null;

function verificar() {
  let nombreUsr = document.getElementById('usernameInp').value;
  let contra = document.getElementById('passwordInp').value;

  if (nombreUsr == '' || contra == '') {
    alert('Ingresa todos los Datos');
  } else {
    xmlHttp = crearXMLHttpRequest();
    xmlHttp.onreadystatechange = cargar;
    xmlHttp.open('GET', 'login.php?nombre=' + nombreUsr, true);
    xmlHttp.send();
  }
}

function crearXMLHttpRequest() {
  var xmlHttp = null;
  if (window.ActiveXObject) xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  else if (window.XMLHttpRequest) xmlHttp = new XMLHttpRequest();
  return xmlHttp;
}

function cargar() {
  let respuesta = document.getElementById('resultado');
  let btn = document.getElementById('btnLogin');
  if (xmlHttp.readyState == 4) {
    respuesta.innerHTML = xmlHttp.responseText;
    if (respuesta.innerHTML == 'Usuario encontrado en la Base de Datos') {
      window.location = '../index.html';
    } else {
      btn.disabled = false;
    }
  } else {
    respuesta.innerHTML =
      '<img src="https://media.giphy.com/media/3ov9k6lsQ9kW7K30eQ/source.gif">';
  }
}
