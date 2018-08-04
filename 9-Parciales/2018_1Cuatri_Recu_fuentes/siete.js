function mostrar()
{

	var contador;
	var numeroSorteado;
	var contador1=0;
	var contador2 = 0;
	var contador3 = 0;
	var contador4 = 0;
	var contador5 = 0;
	var contador6 = 0;
	var contador7 = 0;
	var contador8 = 0;
	var contador9 = 0;
	var contador10 = 0;
	var sumaDeContadores=0;


	for(contador=0;contador<100000;contador++)
	{
		numeroSorteado=Math.floor(Math.random() * 10) + 1;  
		//console.log(numeroSorteado);
		switch(numeroSorteado)
		{
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
				if((contador7/contador)*100 >7)
				{
					contador--;
					continue;
				}else
				{
					contador7++;
				}
				
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
			case 10:
				contador10++;
				break;

		}//fin switch
	}//fin for;
	sumaDeContadores=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
	document.write("<br>cantidad:"+contador);
	document.write("<br>suma de contadores:"+sumaDeContadores)
	document.write("<br> 1: " +(contador1/contador)*100 +"%");
	document.write("<br> 2: " +(contador2/contador)*100 +"%");
	document.write("<br> 3: " +(contador3/contador)*100 +"%");
	document.write("<br> 4: " +(contador4/contador)*100 +"%");
	document.write("<br> 5: " +(contador5/contador)*100 +"%");
	document.write("<br> 6: " +(contador6/contador)*100 +"%");
	document.write("<br> 7: " +(contador7/contador)*100 +"%");
	document.write("<br> 8: " +(contador8/contador)*100 +"%");
	document.write("<br> 9: " +(contador9/contador)*100 +"%");
	document.write("<br> 10: " +(contador10/contador)*100 +"%");



}
