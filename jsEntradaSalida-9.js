/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoConAumento;

	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	sueldoConAumento=sueldo*1.1;
	document.getElementById('resultado').value=sueldoConAumento;
	
}
