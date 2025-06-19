document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#voltear').addEventListener('click', voltear_cartas);
});

function voltear_cartas() {
    const palo1 = document.querySelector('#palo1').value;
    const valor1 = document.querySelector('#valor1').value;
    const palo2 = document.querySelector('#palo2').value;
    const valor2 = document.querySelector('#valor2').value;
    const palo3 = document.querySelector('#palo3').value;
    const valor3 = document.querySelector('#valor3').value;
    // Armar las rutas a las imágenes
    const ruta1 = `baraja/${palo1}${valor1}.png`;
    const ruta2 = `baraja/${palo2}${valor2}.png`;
    const ruta3 = `baraja/${palo3}${valor3}.png`;
    // Actualizar las imágenes en el HTML
    document.querySelector('#naipe_1').src = ruta1;
    document.querySelector('#naipe_2').src = ruta2;
    document.querySelector('#naipe_3').src = ruta3;
    // Opcional: mensaje en el div de respuesta
    
    const card1 = [valor1,palo1];
    const card2 = [valor2,palo2];
    const card3 = [valor3,palo3];

    document.querySelector('#respuesta').innerText = `CARTAS MOSTRADAS : ${card1.join(' de ')} , ${card2.join(' de ')} , ${card3.join(' de ')}`
    
    buscar_parecidos();
}

function buscar_parecidos(){
    const respuesta1 = document.querySelector('#respuesta1');
    const palo1 = document.querySelector('#palo1').value;
    const palo2 = document.querySelector('#palo2').value;
    const palo3 = document.querySelector('#palo3').value;
    if(palo1 == palo2 && palo2  == palo3){
        respuesta1.innerHTML="<p>Son todas del mismo palo</p>";
    } else if(palo1 == palo2 && palo2 != palo3 || palo1 != palo2 && palo2 == palo3 || palo1 == palo3 && palo2 != palo3 ){
        respuesta1.innerHTML="<p>2 cartas del mismo palo y 1 diferente</p>";
    }else{
        respuesta1.innerHTML="Son todos diferentes";
    }
    buscar_mayor();
}

function buscar_mayor(){
    const respuesta2 = document.querySelector('#respuesta2');

    const palo1 = document.querySelector('#palo1').value;
    const valor1 = parseInt(document.querySelector('#valor1').value);
    const palo2 = document.querySelector('#palo2').value;
    const valor2 = parseInt(document.querySelector('#valor2').value);
    const palo3 = document.querySelector('#palo3').value;
    const valor3 = parseInt(document.querySelector('#valor3').value);

    const card1 = [valor1,palo1];
    const card2 = [valor2,palo2];
    const card3 = [valor3,palo3];

    if(card1[0] > card2[0] && card1[0] > card3[0]){
        respuesta2.innerHTML="<p>La carta " + card1.join(' de ') + " es la MAYOR</p>";
    } else if(card2[0] > card1[0] && card2[0] > card3[0] ){
        respuesta2.innerHTML="<p>La carta " + card2.join(' de ') + " es la MAYOR</p>";
    }else if(card3[0] > card1[0] && card3[0] > card2[0]){
        respuesta2.innerHTML="<p>La carta " + card3.join(' de ') + " es la MAYOR</p>";
    }else{
        respuesta2.innerHTML=" No hay un unico mayor ";
    }    
    document.querySelector('#ingreso-datos').classList.add('d-none');
    reiniciar();
}
function reiniciar() {
    let contenedor = document.querySelector('#final');
    contenedor.innerHTML = ""; // Limpiar contenido previo

    let boton = document.createElement('button');
    boton.classList.add('btn', 'btn-success');
    boton.innerHTML = "Reiniciar";

    boton.onclick = function () {
        document.querySelector('#ingreso-datos').classList.remove('d-none');
        document.querySelector('#respuesta').innerHTML = "";
        document.querySelector('#respuesta1').innerHTML = "";
        document.querySelector('#respuesta2').innerHTML = "";
        document.querySelector('#naipe_1').src = "baraja/reverso.png";
        document.querySelector('#naipe_2').src = "baraja/reverso.png";
        document.querySelector('#naipe_3').src = "baraja/reverso.png";
        contenedor.innerHTML = ""; // Ocultar botón luego del reinicio
        document.querySelector('#respuestas-varias').classList.add('d-none');
    }

    contenedor.appendChild(boton);
}