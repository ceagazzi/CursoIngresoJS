/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*
	Cuando escribo document me refiero al html de la pagina. Poner el value para que de el valor.
	En un alert CON "" muestro lo que quiero decir, SIN "" muestro directamente el dato que cargue.
	*/

	var nombre;
	nombre=document.getElementById("elNombre").value;
	alert(nombre);
}



