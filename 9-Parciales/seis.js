/*Realizar el algoritmo que pida el peso en kilos (validar que sea mayor a 0,”cero”)
de cada uno de los 50 contenedores (pedir 50 veces) de un deposito por prompt,
e informar cual fue el más pesado y cuál fue el menos pesado.
*/
function Mostrar()
{
	var peso;
	//CUANDO SABEMOS LA CANTIDAD DE ITERACIONES USAMOS FOR, CUANDO NO TENEMOS EN CLARO CUANTAS USAMOS WHILE
	var contador=0;
	var maximo;
	var minimo;
	//No conviene inicializar estos contadores, porque puede no ser escalable Ej temperaturas distintos paises
	//Deberia usar BANDERA= var, con dos estados y usarlo tipo Booelan
	var flag=0

	while(contador<5)
	{
		peso=prompt("Ingrese el peso en kg.");
		peso=parseFloat(peso);
		while(peso<=0)
		{
			peso=prompt("Error, reingrese el peso en kg.");
			peso=parseFloat(peso);
		}
		
		if(flag==0 || peso>maximo)
		{
			maximo=peso;
		}
		if(flag==0 || peso<minimo)
		{
			minimo=peso;
		}
		flag=1;
		//si no pongo el contador entro en bucle infinito
		//en el while (validacion) pido el valor que NO quiero que tome la variable
		contador++;
	}

	document.write("El maximo es: " + maximo + " y el minimo es: " + minimo);

}
