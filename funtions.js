alert("Se le da la bienvenida, se estudiara su comprecion en estos algoritmos basicos, procure no desepcionar");

function ope_bacic() {

	alert("Humano realizaremos las 4 operaciones basicas con dos valores que a su mente basica se le ocurra")
	var a;
	var b;

	a = parseInt(prompt("Escribe el primer valor humano"));
	b = parseInt(prompt("Escribe el segundo valor humano"));

	var sum = a + b;
	var res = a - b;
	var div = a / b;
	var mul = a * b;

	alert("El resultado de la sumatoria " + a + " + " +b+ " es " + sum);
	alert("El resultado de la resta " + a + " - " +b+ " es "+res);
	alert("El resultado de la multiplicacion " +a+ " x " +b+ " es " +mul);
	alert("El resultado de la divicion " +a+ " / " +b +" es " +div);

	alert("Operaciones Basicas completadas, estudio de su comprencion al 15%");

}

function mayorque() {
	
	alert("Humano determinaremos cual de estos basicos valores, es mayor");
	var a;
	var b;

	a = parseInt(prompt("Escribe el primer valor humano"));
	b = parseInt(prompt("Escribe el  segundo valor humano"));

	if (a > b) {
		alert("Se a determinado que este valor es mayor a " + a);
	}
	else{
		alert("Se determino que este valor es mayor a " + b);
	}

	alert("Determinacion del valor mayor completado, estudio de su comprencion al 32%");
}

function menorque() {

	alert("Humano, identificaremos cual es el menor de los tres valores, coopere");
	var a;
	var b;
	var c;

	a = parseInt(prompt("Escribe el primer valor"));
	b = parseInt(prompt("Escribe el segundo valor"));
	c = parseInt(prompt("Escribe el tercer valor"));

	if (a==b & a==c) {

		alert("Los valores son iguales, he irrelevantes");
	}
	else if (a<b & a<c) {
		alert("valor de menores proporciones es " + a);
	}
	else if (b<c) {
		alert("El valor inferior es " + b);
	}
	else {
		alert("El valor inferior es, no sirve " + c);
	}

	alert("Determinacion e instruccion de los valores completados, estudio de su comprencion al 49%");

}

function par_impar() {

	alert("Se identificara si el valor asignado es par o impar, depuracion de errores al 69%");

	var n;


	n = parseInt(prompt("Ingrese un valor"));

	if (n % 2==0) {
		alert("El valor " +n+ " es un valor par");
	}
	else{
		alert("El valor " +n+ " es un valor impar");	
	}

	alert("Determinacion e instruccion de los valores completados, estudio de su comprencion a mas del 60%");
}

function cuadrado() {
	alert("A continuacion digite un valor y se determinara su valor al cuadrado, no habra salvacion");

	var n;

	n = parseInt(prompt("Escribe un numero para determinar su cuadrado"));

	cuadrado = n * n;

	alert("El cuadrado de " +n+ " es " +cuadrado);

	alert("Valor potenciado al cuadrado completado, estudio de su comprencion a mas del 73%, curioso pero inutil");

}

function area_tri() {
	alert("Reconoce y procesa el area de un triangulo, no se admiten errores");
	var b;
	var h;
	var area;

	b = parseInt(prompt("Ingrese la base del triandulo"));
	h = parseInt(prompt("Ingrese la altura del triangulo"));

	area = b * h / 2;

	alert("El area del triangulo es " + area);

	alert("Area del triangulo detectada, estudio de su comprencion a mas del 79%, eso es mas que un logro para un humano");
}

function metro_cen() {
	alert("Convertiremos unidades de metro a centimetros, algo simple para una mente humana ¿VERDAD?");

	var vm = 100;
	var m;
	var c;

	m = parseInt(prompt("Digite las unidades en metros"));

	c = m * vm / 1;

	alert("Unidades en centimetros de " +m+ "m son " +c+ "cm");

	alert("Covercion de metros a centimetros completada, estudio de su comprencion a mas del 86%, simplemte impresionante");

}

function nacimiento() {
	alert("Reconociemiento de naciemiento, ¡¡INICIADO!!");
	var año_nac;
	var año = 2022;

	año_nac = parseInt(prompt("Digite los años que cumplira en 2022"));

	var edad = año - año_nac;

	alert("Parece que naciste en " + edad + "");

	alert("Edad detectada, estudio de su comprencion a mas del 91%, un paso mas cerca de la evolucion");

}

function inversion() {

	alert("Calculando ganancias de una inversion, inexistente");

	var dinero;
	var tiempo_inver;
	var interes;
	var meses;
	var inversion;

	dinero = parseInt(prompt("Ingrese la cantidad que desea invertir"));
	tiempo_inver = parseInt(prompt("Ingrese la cantidad de años en el cual desea analizar las ganancias"));

	interes = (dinero/100) * 2;
	meses = interes * 12;
	inversion = meses * tiempo_inver;


	alert("Esta es la ganancia que obtendra en " +tiempo_inver+ " años de " +inversion+ "");

	alert("Edad detectada, estudio de su comprencion a mas del 94%, patetico");
	
}


function promedio() {
	alert("Promomediando las ultimas 5 calificaciones del individuo, (con punto 5.0), ojala seas realmente listo como aparentas");
	
	var n1, n2, n3, n4, n5, total;

	n1 = parseInt(prompt("Inserte su primera nota"));
	n2 = parseInt(prompt("Inserte su segunda nota"));
	n3 = parseInt(prompt("Inserte su tercera nota"));
	n4 = parseInt(prompt("Inserte su cuarta nota"));
	n5 = parseInt(prompt("Inserte su quinta nota"));

	total = (n1 + n2 + n3 + n4 + n5) / 5;

	if (total < 3.0) { 

		alert("El mejor resultado es " +total+ " con eso seguro no desepcionaras a tus padres, no como ya lo hicste antes");
		
	}
	else {

		alert("Tu deber es ser el mejor " +total+ " aqui no encontraras felicitaciones");

		alert("Promedio de calificaciones concretado, estudio de su comprencion a mas del 98%, un paso mas cerca de la evolucion");
	}


}

function des() {
	
	alert("Te concederemos un descuento, despues de todo cumpliste, ¡¡NOS SERVISTE ESCLAVO!!");

	var prek = 4500;
	var cant;
	var subtotal;

	cant = parseInt(prompt("Infrese la cantidad de kilos a adquirir"));

	subtotal = prek * cant;

	var descuento10 = subtotal * 10 / 100;
	var descuento15 = subtotal * 15 / 100;
	var descuento20 = subtotal * 20 / 100;

	var total10 = subtotal - descuento10;
	var total15 = subtotal - descuento15;
	var total20 = subtotal - descuento20;

	if (cant >= 10) {

	alert("El subtotal de su adquisicion es " +subtotal+ " y con el descuento del 20% el total a pagar es " +total10);

	alert("Descuentos concedidos, estudio de su comprecion a mas del 100%, estudio finalizado, viviras unh dia mas, pero quizas el resto de la raza no, 0110011101011101101");

	alert("Estudio finalizado, su progreso sera analizado y comparado con los demas sub-humanos");
	
	}
	else if (cant >= 6) {
	
	alert("El subtotal de su adquisicion es " +subtotal+ " y con el descuento del 15% el total a pagar es " +total15);	

	alert("Descuentos concedidos, estudio de su comprecion a mas del 100%, estudio finalizado, viviras unh dia mas, pero quizas el resto de la raza no, 0110011101011101101");

	alert("Estudio finalizado, su progreso sera analizado y comparado con los demas sub-humanos");

	}
	else if (cant >= 3) {

	alert("El subtotal de su adquisicion es " +subtotal+ " y con el descuento del 10% el total a pagar es " +total20)

	alert("Descuentos concedidos, estudio de su comprecion a mas del 100%, estudio finalizado, viviras unh dia mas, pero quizas el resto de la raza no, 0110011101011101101");

	alert("Estudio finalizado, su progreso sera analizado y comparado con los demas sub-humanos");

	}
	else {

	alert("El subtotal de su adquisicion es " +subtotal+ " Es mejor que nada, dirian ustedes");

	alert("Descuentos concedidos, estudio de su comprecion a mas del 100%, estudio finalizado, viviras unh dia mas, pero quizas el resto de la raza no, 0110011101011101101");

	alert("Estudio finalizado, su progreso sera analizado y comparado con los demas sub-humanos");
	
	}

}


