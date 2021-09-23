function dibujar () {
    var numero = $("#numero").val();
    var fondo = $("#fondo").val();
    var borde = $("#borde").val();

    var i 
    for (i=1;i<=numero;i++) { 
      $("#div" + i).css("background-color", fondo);
      $("#div" + i).css("border-color", borde);
    }
} 

function mostrarCuadros () {
  window.location.href = "cuadros.html";
}

function mostrarPreguntas () {
  window.location.href = "preguntas.html";
}

function resultadosPregunta () {

  var pregunta1 = $("#pregunta1").text();
  var opcionPregunta1 = $("#opcionPregunta1").val();
  $("#resultado").append("<li>Pregunta 1:" + pregunta1 + " resultado:" + opcionPregunta1 + " </li>");

  var pregunta2 = $("#pregunta2").text();
  var opcionPregunta2 = $("#opcionPregunta2").val();
  $("#resultado").append("<li>Pregunta 2:" + pregunta2 + " resultado:" + opcionPregunta2 + " </li>");

  var pregunta3 = $("#pregunta3").text();
  var opcionPregunta3 = $("#opcionPregunta3").val();
  $("#resultado").append("<li>Pregunta 3:" + pregunta3 + " resultado:" + opcionPregunta3 + " </li>");

  var pregunta4 = $("#pregunta4").text();
  var opcionPregunta4 = $("#opcionPregunta4").val();
  $("#resultado").append("<li>Pregunta 4:" + pregunta4 + " resultado:" + opcionPregunta4 + " </li>");

  var pregunta5 = $("#pregunta5").text();
  var opcionPregunta5 = $("#opcionPregunta5").val();
  $("#resultado").append("<li>Pregunta 5:" + pregunta5 + " resultado:" + opcionPregunta5 + " </li>");

}
