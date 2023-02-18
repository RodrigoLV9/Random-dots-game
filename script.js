const cronometro=document.getElementById("cronometro")
const punto=document.getElementById("punto");
const puntaje=document.getElementById("puntaje");
const contenedor=document.getElementById("contenedor");
let calificacion=0;
let seg=0;
let min=0;
let hora=0;



function enemigos(){
    let yy=Math.round(Math.random()*200)
    let xx=Math.round(Math.random()*200)
    const enemigo=document.createElement("div");
    
    enemigo.style.marginTop=yy+"px"
    enemigo.style.marginLeft=xx+"px"
    enemigo.style.width= 35+"px"
    enemigo.style.height= 35+"px"
    enemigo.style.background="blue"
    enemigo.style.borderRadius=10+"px"
    contenedor.appendChild(enemigo)
    
}

function mover(){
    let y=Math.round(Math.random()*470)
    let x=Math.round(Math.random()*470)
    punto.style.marginTop=y+"px"
    punto.style.marginLeft=x+"px"
    calificacion++
}
function puntajee(){
    puntaje.textContent=calificacion
}

function tiempo(){
    seg++;
    cronometro.textContent=hora + ":" + min + ":" + seg
    if(seg==60){
        seg=0
        min++
    }
    if(min==60){
        hora++
    }
}

punto.addEventListener("click",(e)=>{
    mover()
    puntajee()
    
})

setInterval(tiempo,1000)



