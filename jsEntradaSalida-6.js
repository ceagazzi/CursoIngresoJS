/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*var numeroUno;
	var numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert("El resultado de la suma es:" + resultado);*/
	/*El + suma y concatena.
	Funcion ParseInt retorna un valor y siempre va a ser un numero SIEMPRE tiene que tener el = adeltante
	*/

	var numUno;
	var numDos;
	var resultado;

	numUno=document.getElementById('numeroUno').value;
	numUno=parseInt(numUno);
	numDos=document.getElementById('numeroDos').value;
	numDos=parseInt(numDos);
	resultado=numUno + numDos;

	alert("El resultado de la suma es: " + resultado);

}

