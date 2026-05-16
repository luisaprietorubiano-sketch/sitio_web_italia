let pagina = window.location.pathname;

let mensajes = {
    cultura: [
        ["Le feste italiane sono patrimonio culturale"], ["Los festivales italianos son patrimonio cultural"], ["L'opera è nata in Italia"], ["La ópera nació en Italia"], ["L'arte è ovunque"], ["El arte está en cada rincón"], ["L'Italia ha più di 50 siti UNESCO"], ["Italia tiene más de 50 sitios UNESCO"], ["Le piazze sono il cuore sociale"], ["Las plazas son el corazón social"]
    ],

    gastronomia: [
        ["Il vino cambia con la stagione"], ["El vino cambia según la temporada"], ["Ogni regione ha la sua pasta"], ["Cada región tiene su pasta"], ["Il caffè si beve veloce al bar"], ["El café se toma rápido en barra"], ["Il formaggio è fondamentale"], ["El queso es parte clave de la cocina"], ["Le pizza originale è napoletana"], ["La pizza original es napolitana"]
    ],

    naturaleza: [
        ["L'Italia ha vulcani attivi"], ["Italia tiene volcanes activos"], ["I vigneti dominano il paesaggio"], ["Los viñedos dominan el paisaje"], ["Le coste sono molto diverse"], ["Las costas son muy diversas"], ["Le Alpi proteggono il nord"], ["Los Alpes protegen el norte"], ["Ci sono parchi naturali incredibili"], ["Hay parques naturales increíbles"]
    ],

    destinos: [
        ["Roma ha clima mediterraneo"], ["Roma tiene clima mediterráneo"], ["Venezia può allagarsi in inverno"], ["Venecia puede inundarse en invierno"], ["La Toscana è ideale in primavera"], ["Toscana es ideal en primavera"], ["Milano è più fredda del sud"], ["Milán es más frío que el sur"], ["Firenze è molto turistica"], ["Florencia es muy turística"]
    ]
};



let seccion = "";

if(pagina.includes("cultura")) seccion = "cultura";
if(pagina.includes("gastronomia")) seccion = "gastronomia";
if(pagina.includes("naturaleza")) seccion = "naturaleza";
if(pagina.includes("destinos")) seccion = "destinos";

let indice = 0;
let idioma = 0;


function mostrarMensaje(){

    let panel = document.getElementById("panel-info");
    let texto = document.getElementById("texto-panel");

    if(!panel || !texto || !mensajes[seccion]) return;

    texto.textContent = mensajes[seccion][indice][idioma];
    panel.classList.add("mostrar");

    indice++;

    if(indice >= mensajes[seccion].length){
        indice = 0;
    }
}


setTimeout(mostrarMensaje, 10000);


setInterval(mostrarMensaje, 5000);



setInterval(() => {
    idioma = idioma === 0 ? 1 : 0;
}, 120000);