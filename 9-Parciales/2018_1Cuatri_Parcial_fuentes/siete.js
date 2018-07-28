/*	Maria F 15
	Jose M 33
	Fer F 25
	While de 3 repeticiones con contador
	nombre en variable sin val
	sexo con val por f o m
	edad con val isNaN no puede ser menor a 0 o mayor a 100
	*/

function mostrar()
{
	var contador=0;
	var nombre;
	var sexo;
	var edad;
	var cantMujeres;
	var cantHombres;
	var cantMayores;
	var cantMenores;
	var contadorMujeres=0;
	var contadorHombres=0;
	var contadorMayores=0;
	var contadorMenores=0;


	while(contador<3)
	{
		nombre=prompt("Ingrese su nombre");
		
		sexo=prompt("Ingrese su sexo");
		while(sexo!="f" && sexo !="m")
			{
				sexo=prompt("Error, Ingrese su sexo");
			}
	
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad>100||edad<0)
		{
			edad=prompt("Edad invalida");
			edad=parseInt(edad);
		}

		contador++;
	}

	//punto 1 REVISAR DAN MAL LAS CUENTAS

	/*if(sexo="f")
	{
		cantMujeres=contadorMujeres+1;
		cantMujeres=parseInt(cantMujeres);
		contadorMujeres++;
		
		alert("La cantidad de mujeres es: " + cantMujeres);
	}

	if(sexo="m")
	{
		contadorHombres++;
		cantHombres=contadorHombres+1;
		cantHombres=parseInt(cantHombres);
		alert("La cantidad de hombres es: " + cantHombres);
	}*/
	

}
