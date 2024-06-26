function calcularResultado() {
  var respuestas = document.querySelectorAll('input[type="radio"]:checked');
  var contadorSi = 0;
  
  for (var i = 0; i < respuestas.length; i++) {
    if (respuestas[i].value === "si") {
      contadorSi++;
    }
  }
  
  var resultadoDiv = document.getElementById("resultado");
  var resultadoText = "";
  
  if (contadorSi >= 6) {
    resultadoText = "Tienes una alta probabilidad de que estés experimentando una TCA. Es importante buscar ayuda profesional inmediata para recibir un diagnóstico y tratamientos adecuados.";
  } 
  else if (contadorSi >= 3 && contadorSi <= 5) {
    resultadoText = "Presentas algunos síntomas relacionados con una TCA. Buscar ayuda profesional para evaluar más a fondo tu situación y recibir la orientación adecuada.";
  } 
  else {
    resultadoText = "Es poco probable que estés experimentando una TCA en este momento. Sin embargo, no olvides prestar atención a tu relación con la comida y tu cuerpo :)";
  }
  
  resultadoDiv.innerHTML = "<p>" + resultadoText + "</p>";
}


function resultadoVideo() {
  var respuestas = document.querySelectorAll('input[type="radio"]:checked');
  var contadorSi = 0;
  
  for (var i = 0; i < respuestas.length; i++) {
      if (respuestas[i].value === "si") {
          contadorSi++;
      }
  }
  
  var resultadoDiv = document.getElementById("resultadoVideo");
  var resultadoText = "";
  
  if (contadorSi === 3) {
      resultadoText = "Respuestas correctas. ¡FELICIDADES!";
  } 
  else{
      resultadoText = "Respuestas incorrectas";
  } 
  
  resultadoDiv.innerHTML += "<p>" + resultadoText + "</p>"; // Agregar el resultado al contenedor sin sobrescribir
}

function resultadoAudio() {
  var respuestas = document.querySelectorAll('input[type="radio"]:checked');
  var contadorSi = 0;
  
  for (var i = 0; i < respuestas.length; i++) {
      if (respuestas[i].value === "si") {
          contadorSi++;
      }
  }
  
  var resultadoDiv = document.getElementById("resultadoAudio");
  var resultadoText = "";
  
  if (contadorSi === 5) {
      resultadoText = "Respuestas correctas. ¡FELICIDADES!";
  } 
  else {
      resultadoText = "Respuestas incorrectas";
  } 
  
  resultadoDiv.innerHTML += "<p>" + resultadoText + "</p>"; // Agregar el resultado al contenedor sin sobrescribir
}
