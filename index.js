'use strict';

if (window.File && window.FileReader && window.FileList) {
  alert("Todas las API's soportadas");
} else {
  alert('La API de File no es soportada por este navegador');
}

function muted() {
  var video = document.getElementById('video');
  var buttonMuted = document.getElementById('buttonMuted');
  if (video.muted) {
    video.muted = false;
    buttonMuted.innerHTML = 'Silenciar';
  } else {
    video.muted = true;
    buttonMuted.innerHTML = 'Activar Sonido';
  }
}

function handleFileSelected(e) {
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
    var src = document.createAttribute('src');
    src.value = e.target.result;
    video.setAttributeNode(src);
    alert('Cargando el video');
  };
  reader.readAsDataURL(file);
}

document
  .getElementById('videoFile')
  .addEventListener('change', handleFileSelected, false);
