//function enviar(){
    suma=0
    
    
    
    else if (copas=="cuatro"){
        suma+=25
    }
    else if (partidos=="RM"){
        suma+=25
    }
    else if (principe=="EF"){
        suma+=25
    }
    
    
    alert("El total de la encuesta es: " + suma)
    
//}

function enviar(){

    var jugador=document.getElementById("jugador").value
    var copas=document.getElementById("copas").value
    var partidos=document.getElementById("partidos").value
    var principe=documnet.getElementById("principe").value
    
    suma = 50;
    if (jugador =="carlos"){
        suma= suma +25
    }

    alert("Resultado de la encuesta");
    
    if (suma==100){
        document.write("felicidades eres un experto")
        document.write("sacaste el 100%")
    }
    else if (suma==75){
        document.write("conoces mucho de river")
        document.write("sacaste el 75%")
    }   
    else if (suma==50){
        alert("wow eres bueno") 
        alert("sacaste el 50%")
    }
    else if (suma==25){
        alert("tu desempeño en este test fue regular")
        alert("sacaste el 25%")
    }
    else{
        document.write("falta estudiar mas")
        document.write("sacaste el 0%")
    }
}