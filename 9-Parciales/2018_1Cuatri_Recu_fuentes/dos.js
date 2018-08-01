function mostrar()
/*Tomar los datos de los cuadros de texto y formar la frase yo soy xxxx, vivo en la localidad de xxxx y estudio en la UTN
*/
{
  var nombre;
  var localidad;

  nombre=document.getElementById('elNombre').value;
  localidad=document.getElementById('laLocalidad').value;

  alert("Yo soy " + nombre + " vivo en la localidad de " + localidad + " y estudio en la UTN");
}
