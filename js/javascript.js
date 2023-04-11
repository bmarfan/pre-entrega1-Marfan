//tomar total de atributos
let statsTotal = 0;
let statMax = 100;
let statDif = 0;
let statTrue = '';

//ver el total de puntos y si es correcto o no y por cuanto
function statsCant(){
  
  for(let i = 1; i <= 5; i++){
    statsTotal += parseInt(document.getElementById("score"+i).value);
  }

  let statDif = statMax - statsTotal;
  alert("Total de puntos: " + statsTotal)
  alert("Diferencia de puntos con el total es " + statDif)

  if (statsTotal < statMax){
    return "Faltan" + " " + statDif + " " + "puntos"
  } else if(statsTotal > statMax){
    return "Sobran" + " " + statDif + " " + "puntos"
  } else if(statsTotal = statMax){
    return "El total de puntos es correcto"
  }
};

// puntos maximos en cada uno
let statAlto = 27;
let statMedio = 25;
let statBajo = 23;

function maxTop(){
  alert("Revisa debajo de cada stat");

    if (document.getElementById("score1").value <= statAlto){
      document.getElementById("check1").innerHTML = "Correcto. No supera el tope.";
    } else{
      document.getElementById("check1").innerHTML = "Incorrecto. Supera el Tope.";
    }
    if (document.getElementById("score2").value <= statAlto){
      document.getElementById("check2").innerHTML = "Correcto. No supera el tope.";
    } else{
      document.getElementById("check2").innerHTML = "Incorrecto. Supera el Tope.";
    }
    if (document.getElementById("score3").value <= statAlto){
      document.getElementById("check3").innerHTML = "Correcto. No supera el tope.";
    } else{
      document.getElementById("check3").innerHTML = "Incorrecto. Supera el Tope.";
    }

    if (document.getElementById("score4").value <= statMedio){
      document.getElementById("check4").innerHTML = "Correcto. No supera el tope.";
    } else{
      document.getElementById("check4").innerHTML = "Incorrecto. Supera el Tope.";
    }

    if (document.getElementById("score5").value <= statBajo){
      document.getElementById("check5").innerHTML = "Correcto. No supera el tope.";
    } else{
      document.getElementById("check5").innerHTML = "Incorrecto. Supera el Tope.";
    };

    
}

//instrucciones
const stats = ["Fuerza", "Alto", "Resistencia", "Alto", "Aguante", "Alto", "Agilidad", "Medio", "Experiencia", "Bajo"];
let text = "";
let i = 0;
while (stats[i]){
  text += "<p>" + stats[i] + "</p>"
  i++
};

document.getElementById("statsLista").innerHTML = text;

//cuando el boton se clickea salta el alert

function revisar(){
  alert(statsCant())
}
function mostrar(){
  alert(maxTop())
}