/*Realizar el algoritmo que permita el ingreso por prompt de edades (validar entre 0 y 100)
y el sexo (validar el sexo “f” o “m”) de 100 personas,
informar por alert: a) el promedio de edad.
b) la edad más baja.
c) la cantidad de varones que su edad sea mayor o igual a 20.
*/
function Mostrar()
{
	var edad;
	var sexo;
	var contador;
	var suma=0;
	var promedio;
	var minimo;
	var flag=0;
	var cantVarones=0;


	for(contador=0;contador<4;contador++)
	{
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		while(edad<0 || edad>100)
		{
			edad=prompt("Error de edad ingresela nuevamente");
			edad=parseInt(edad);
		}

		sexo=prompt("Ingrese sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Reingrese el sexo");
		}

		suma=suma+edad;

		if(flag==0 || edad<minimo)
		{
			minimo=edad;
		}
		flag=1;
		
		/*"C"*/
		if(sexo=="m" && edad>=20)
		{
			cantVarones++;
		}	

	}
	promedio=suma/100
	alert("El promedio es:" + promedio);
	alert("La minima edad es:" + minimo);
	alert("La cantidad de varones con 20 años o mas: " + cantVarones);
}
