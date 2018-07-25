function mostrar()
{
	//acumulador=acumulador + variable
	//contador=contador + 1 (literal)
	var contador=0;
	var acumulador=0;

	contador=prompt("Ingrese un numero");

	while(acumulador<5)
	{
		contador++;
		contador=prompt("Ingrese un numero");
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN