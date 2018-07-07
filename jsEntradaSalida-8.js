/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var divisor;
	var	dividendo;
	var resto;
	divisor=document.getElementById('divisor').value; //primero dividendo y despues divisor
	divisor=parseInt(divisor);
	dividendo=document.getElementById('dividendo').value;
	dividendo=parseInt(dividendo);
	resto=dividendo%divisor;
	alert("El resto es:" + resto);
	
}
