/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//comentario de una linea
	/*
	este es un comentario en bloque sirve para tomar apuntes
	*/
	/* La variable sigue con un espacio y tiene que estar bien definida, el alert NO lleva espacio, SI lleva () y "" ACORDARSE DE GUARDAR*/

	//nombre=prompt("Ingrese nombre","natalia natalia"); 

	var nombre;
	nombre=prompt("Ingrese su nombre", "natalia natalia");
	alert("Su nombre es " + nombre);

}

