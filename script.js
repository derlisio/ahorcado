let palabras= ["casa","perro","gato","auto","mesa","zapato","cama","mochila","cielo","lluvia"];
        let palabraOc="";
        let palabraAdi="";
        let vidas=5;
        document.getElementById("boton").addEventListener("click",comprobar);
        iniciar();
        function iniciar() {
            palabraOc=palabras[Math.floor(Math.random()*palabras.length)];
            for(let i=0;i<palabraOc.length;i++){
                palabraAdi=palabraAdi+"_ ";
            }
            document.getElementById("frase").innerHTML=palabraAdi;
        }
        function comprobar(){
            let letra= document.getElementById("letra").value.toLowerCase();
            palabraOc=palabraOc.toLowerCase();

        
        let nuevo="";
        for (let i = 0; i < palabraOc.length; i++) {
            if(letra==palabraOc[i]){
                nuevo=nuevo+letra+" ";
            }
            else{
                nuevo=nuevo+palabraAdi[i*2]+" ";
            }
        }
        if(nuevo==palabraAdi){
            vidas--;
            document.getElementById ("vida").innerHTML="El número de vidas que quedan son: " + vidas;
        }
        palabraAdi=nuevo;
        document.getElementById ("frase").innerHTML = palabraAdi;
        
        if(vidas==0){
        alert("Perdiste :( ");
        }
        if(palabraAdi. search ("_")==-1){
        alert("Ganaste :D ");
        }
        document.getElementById ("letra").value="";
        document.getElementById ("letra").focus();
    } 