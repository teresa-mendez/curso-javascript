// function calcular(){
//   var numero1 = parseInt(prompt("Ingrese un numero"));
//   var numero2 = parseInt(prompt("Ingrese un segundo numero"));
//
//   var op = prompt("Ingrese un operador");
//
//   switch (op) {
//     case '+':
//     document.write("La suma es " + (numero1 + numero2) + "<br/>");
//     break;
//
//     case '-':
//     document.write("La resta es " + (numero1 - numero2) + "<br/>");
//     break;
//
//     case '*':
//     document.write("La multiplicacion es " + (numero1 * numero2)+ "<br/>");
//     break;
//
//     case '/':
//     document.write("La division es " + (numero1 / numero2) + "<br/>");
//     break;
//
//     default:
//     document.write("Resultado no valido" + "<br/>");
//   };
// }
// calcular();



// function numeros(){
//   for(var i = 1; i <= 20 ; i++) {
//     document.write(i + "<br/>");
//   }
// }
// numeros();
//
//
//
// function repetir(){
//   var numero = 3;
//   while (numero <= 10) {
//     document.write(numero + "<br/>");
//     numero++;
//   }
// }
// repetir();



function miFuncion(){
  var texto;
  var numero = document.getElementById("caja").value;

  if (isNaN(numero) || numero < 1 || numero > 8) {
    texto = "<span style = 'color:red;'>Input Invalido</span>";
  } else {
    texto = "<span style = 'color:green;'>Input Valido</span>";
  };

  document.getElementById("info").innerHTML = texto;
};



// function validarFormulario(){
//   var elemento = document.forms["miForm"]["miCheckbox"].checked;
//
//   if (elemento == true) {
//     document.getElementById("info2").innerHTML = "El elemento se selecciono";
//     return false;
//   } else {
//     document.getElementById("info2").innerHTML = "El elemento NO se selecciono";
//     return false;
//   };
// };

function validarFormulario(){
  var $form = $('#miForm')
  var elemento = $("#miID", form).attr('checked');
  //var elemento = document.forms["miForm"]["miCheckbox"].checked;

  if (elemento == true) {
    $("#info2").html("El elemento se selecciono");
    return false;
  } else {
    $("#info2").html("El elemento NO se selecciono");
    return false;
  };
};

validarFormulario();


function funcionFoto(){
  var imagen = document.getElementById("foto");
  imagen.src = "img/paris.jpg";
};


var inicializarHora = function(){
  var fechaActual = new Date();
  var tiempoHoras = fechaActual.getHours();
  var tiempoMinutos = fechaActual.getMinutes();
  var tiempoSegundos = fechaActual.getSeconds();

  var mesActual = fechaActual.getMonth();
  var diaActual = fechaActual.getDay();
  var diaDelMes = fechaActual.getDate();
  var aActual = fechaActual.getFullYear();
  var amOpm;

  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  var esteMes = meses[mesActual];

  var diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  var diaDeHoy = diasDeLaSemana[diaActual];

  amOpm = (tiempoHoras > 12) ? "pm" : "am";
  tiempoHoras = (tiempoHoras > 12) ? tiempoHoras - 12 : tiempoHoras;
  tiempoHoras = (tiempoHoras < 10) ? "0" + tiempoHoras : tiempoHoras;
  tiempoMinutos = (tiempoMinutos < 10) ? "0" + tiempoMinutos : tiempoMinutos;
  tiempoSegundos = (tiempoSegundos < 10) ? "0" + tiempoSegundos : tiempoSegundos;

  document.getElementById("info3").innerHTML = tiempoHoras + ":" + tiempoMinutos + ":" + tiempoSegundos+ amOpm;
  document.getElementById("laFecha").innerHTML = diaDeHoy + " " + diaDelMes + " de " + esteMes + " del " + aActual;

  $("#laFecha").html(diaDeHoy + " " + diaDelMes + " de " + esteMes + " del " + aActual);

}
inicializarHora();
setInterval(inicializarHora, 1000);


function formulario(){
  var formu = document.getElementById('form');

  formu.addEventListener("submit", function(e) {

      e.preventDefault();
  	if(document.getElementById("clave").value == "" || document.getElementById("usuario").value == ""){
  		console.log("error");
  		document.getElementById("ingresar").className = 'error';
  		setInterval(function(){
  			document.getElementById("ingresar").removeAttribute("class");
  		}, 2000);
  	} else {
  		console.log("ok");
  		document.getElementById("ingresar").className = 'exito';
  	}

  });
}
