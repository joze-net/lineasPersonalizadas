
var botonDibujar=document.getElementById("btn");
var botonLimpiar=document.getElementById("limpiar");
var d=document.getElementById("dibujito");
var tamano=d.width;

var lienzo=d.getContext("2d");//le damos contexto al lienzo
botonDibujar.addEventListener("click",dibujoPersonalizado);//ponemos al escucha los botones de formulario
botonLimpiar.addEventListener("click",limpiar);

function limpiar(){//esta funcion lo que hace es limpiar el canvas
	lienzo.clearRect(0,0,d.width,d.height);
}

function dibujoPersonalizado (){//funcion para dibujar con las lineas y color seleccionado por el usuario
	var texto=document.getElementById("txtlineas");//obtenemos las`propiedades del cajon de las lineas`
	var color1=document.getElementById("tuColor1").value;//obtenemos el valor del txt  de color 1
	var color2=document.getElementById("tuColor2").value;//obtenemos el valor del txt  de color 2
	var lineaLimite=parseInt(texto.value);//guradomos eñ valor digitado en la casilla de texto de numero de lienas
	var espacio=tamano/lineaLimite;//el espacio es equivalente al ancho del canvas / las lineas limite o seleccionadas
	
	
    var linea=0;//contador

	while (linea<lineaLimite) {
		yinicial=linea*espacio;
		xfinal=(linea*espacio)+espacio;
		
		dibujarLinea(0,yinicial,xfinal,tamano,color1);
		
		linea++;
	}
	dibujarLinea(1,1,1,tamano,"green");
	dibujarLinea(0,tamano-1,tamano-1,tamano-1,"green");

//voy a dar la vuelta al dibujo opuestamente
    linea=0;
    while (linea<lineaLimite) {
		yinicial=linea*espacio;
		xfinal=(linea*espacio)+espacio;
		
		dibujarLinea(tamano,yinicial,xfinal,0,color1);
		
		linea++;
	}
	dibujarLinea(tamano-1,tamano-1,tamano-1,0,"green");
	dibujarLinea(tamano-1,0,0,0,"green");

//voy a mover el dibujo ahora a la parte superior
	linea=0;
    while (linea<lineaLimite) {
		yinicial=tamano-(linea*espacio);
		xfinal=(linea*espacio);
		
		dibujarLinea(0,yinicial,xfinal,0,color2);
		
		linea++;
	}

	//voy a mover el dibujo ahora a la parte inferior
	linea=0;
    while (linea<lineaLimite) {
		xinicial=(linea*espacio);
		yfinal=tamano-(linea*espacio);
		
		dibujarLinea(xinicial,tamano,tamano,yfinal,color2);
		
		linea++;
	}
	
	
	
	

}

function dibujarLinea(xinicial,yinicial,xfinal,yfinal,color){//funcion para dibujar lineas

	lienzo.beginPath();//empezamos el dubujo
	lienzo.strokeStyle=color;//le damos un color
	lienzo.moveTo(xinicial,yinicial);//posicionamos el cursor
	lienzo.lineTo(xfinal,yfinal);//dibujamos una linea hasta donde le indiquemos
	lienzo.stroke();//hacemmos el trazo
	lienzo.closePath();//serramos el dibujo


}


