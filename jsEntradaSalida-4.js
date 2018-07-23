/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//var nombre;
	//nombre=prompt(Cesar);
	//document.getElementById('elNombre').value="Cesar";

	/*var nombre;
	prompt=nombre;
	document.getElementById(elNombre).value=nombre; ESTA MAL*/

	var nombre;
	nombre=prompt("Ingrese su nombre");
	document.getElementById("elNombre").value=nombre;
}

