/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//Entrada: Sueldo   //id: sueldo
//Proceso: aumentar el sueldo un 10%
//Salida: sueldo con el aumento  //id: resultado

var sueldo;
var aumento;
var sueldoConAumento;

sueldo = document.getElementById("sueldo").value;
sueldo = parseInt(sueldo); //de esta manera convierto el texto a un numero, lo convierto a entero
//si fuese con coma uso la funcion parsefloat

//aumento = sueldo*(10/100); puedo resumirlo haciendo *0.1
aumento = sueldo*0.1;
//sueldoConAumento = sueldo + aumento; //puedo evitarme la variable aumento
//y escribir directamente sueldoConAumento = sueldo * 1.1
sueldoConAumento = sueldo * 1.1;
document.getElementById("resultado").value = sueldoConAumento

//alert(sueldo);



	
}
