
function Mostrar()
{
	var base;
	var superficie;

	base=document.getElementById('laBase').value; //con el value de todo el cuadro solo guardo el valor
	base=parseInt(base); //parseFloat toma Nº con coma 3.5
	superficie=base*base; // O superficie=Math.pow(base,2);
	superficie=parseInt(superficie);

	alert("La superficie es: " + superficie);
}
