/*(IF) Realizar el algoritmo que pida dos números por prompt,
lo sume e informe si el resultado
 de la suma “positivo”,” negativo” o “cero” por document.write.
*/
function Mostrar()
{
	var numero1;
	var numero2;
	var suma;

	numero1=prompt("Ingrese un numero");
	numero1=parseInt(numero1);
	numero2=prompt("Ingrese otro numero");
	numero2=parseInt(numero2);

	suma=numero1+numero2;
	//NO HACERLO CON 3 IF
	/*if(suma>0)
	{
		document.write("es positivo");
	}
	if(suma<0)
	{
		document.write("es negativo");
	}
	if(suma==0)
	{
		document.write("es cero");
	}*/
	if(suma>0)
	{
		document.write("es positivo");
	}
	else
			if(suma<0)
			{
				document.write("es negativo");
			}
			else(suma==0)
	{
		document.write("es cero");
	}







}