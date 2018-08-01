function mostrar()
{
var contador=0;
var animal;
var peso;
var tempHabitat;
var tempPares;
var contadorTempPares=0;
var acumTempPares
var animalPesado;
var animalesBajoCero;
var contadorAnimalesBajoCero=0;
var promedioPeso;
var respuesta="si";

while(respuesta!="no")
{
	animal=prompt("Ingrese el nombre del animal");

	peso=prompt("Ingrese el peso del animal");
	peso=parseInt(peso);
	while(!isNan(peso) && !(peso>1 && peso<1000))
	{
		peso=prompt("Error en el peso ingresado, intentelo nuevamente");
	}
	
	tempHabitat=prompt("Ingrese la temperatura del Hábitat");
	tempHabitat=parseInt(tempHabitat);
	
	while(!isNan(tempHabitat) && (tempHabitat<-30 || tempHabitat>30))
	{
		tempHabitat=prompt("Error en la temperatura ingresada, intentelo nuevamente");
	}
	
	contador++;
	respuesta=prompt("¿Desea continuar cargando animales?");
}

//tempPares=

}
