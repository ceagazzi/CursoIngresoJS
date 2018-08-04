function Mostrar()
{
  var importe;
  var descuento;
  var importeFinal;

	importe=prompt("Ingrese el importe del producto");
	importe=parseFloat(importe);

	descuento=importe*0.25;

	importeFinal=importe-descuento;

	document.getElementById('importeFinal').value=importeFinal;
}
