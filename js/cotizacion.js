document.getElementById("boton").addEventListener("click",function(){


  //destinos
  var destino01 = document.getElementById("chichen").value;

    //fechas informativas
    var fechaInicio = document.getElementById("inicio").value;
    var fechaFinal = document.getElementById("fin").value;
  
  //fechas para calculo de dias 
    var ini = parseInt(fechaInicio.substr(8,5));
    var fi = parseInt(fechaFinal.substr(8,5));
	
	var diferencia = fi - ini;

    var hospedajeVuelo = document.getElementById("caja").value;
    var personas = document.getElementById("personas").value;

    var chichen = document.getElementById("chichen").value;
    var machu = document.getElementById("machu").value;
    var china = document.getElementById("china").value;
    var paris = document.getElementById("paris").value;
    var vegas = document.getElementById("vegas").value;
    var san = document.getElementById("san").value;

    if(document.getElementById("chichen").checked){
      var precio = 1000;

    }else if(document.getElementById("machu").value){
      alert('machu');

    }else if(document.getElementById("china").value){
      alert('china');

    }else if(document.getElementById("paris").value){
      alert('paris');
    }else if(vegas == vegas){
      alert('vegas');
    }else{
      alert('san');
    }
  
    alert('Presupuesto total'+'\n'+ 
            'Destino : '+chichen +'\n'+
            'Inicio : ' + fechaInicio +'\n'+
            'Fin : ' + fechaFinal +'\n'+
            'Total días : ' +diferencia+'\n'+
            'Hospedaje y avion : ' +'\n'+
            'Personas : ' + personas +'\n'+
            'Precio : ' +'\n'+
            'Total : ');
  });