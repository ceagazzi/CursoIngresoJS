function mostrar()
{
var contador=0;
var marcaDelProducto;
var pesoDelProducto;
var tempDeAlmacenamiento;
var tempPares;
var contadorTempPares=0;
var marcaDelProductoMasPesado;
var productoBajoCero;
var contadorproductoBajoCero=0;
var promedioPesoProductos;
var pesoMaximoProductos;
var pesoMinimoProductos;
var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		marcaDelProducto=prompt("Ingrese la marca del producto");
		//usar isNan!!!
		pesoDelProducto=prompt("Ingrese el peso del producto");
		pesoDelProducto=parseInt(pesoDelProducto);
		while(pesoDelProducto<1 || pesoDelProducto>100)
		{
			pesoDelProducto=prompt("Error en el peso ingresado, intentelo nuevamente");
			pesoDelProducto=parseInt(pesoDelProducto);
		}

		tempDeAlmacenamiento=prompt("Ingrese la temperatura de almacenamiento");
		tempDeAlmacenamiento=parseInt(tempDeAlmacenamiento);
		while()

		respuesta=prompt("¿Desea seguir ingresando productos?");
	}
}
