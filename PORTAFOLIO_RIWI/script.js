alert("Bienvenido a mi portafolio personal!")

function toggleTextoSobreMi() {
    const parrafo = document.querySelector(".texto1");
    const boton = document.getElementById("btn-leer-mas");

    if (!parrafo || !boton) return;

    const textoCorto = "Mi nombre es <strong>Diego Fernando Gonzalez</strong>, tengo 19 años, estudio <strong>Ingeniería Industrial</strong> en la Universidad de la Costa y también curso <strong>Desarrollo de Software</strong>. ¡Haz clic en Ver más para saber más sobre mí!";

    const textoLargo = `Mi nombre es <strong>Diego Fernando Gonzalez Henriquez</strong>, tengo actualmente 19 años,
        estoy estudiando en la <strong>Universidad de la Costa</strong> Ingeniería Industrial, voy en 5 semestre,
        también hago parte de una capacitación donde estudio <strong>Desarrollo de software</strong>.
        Me considero una persona responsable, con muchas ganas de salir adelante y seguir aprendiendo cada día.
        Además, me encanta el deporte, ya que me ayuda a mantenerme activo, disciplinado y enfocado en mis metas.
        Siempre estoy buscando crecer tanto a nivel personal como profesional, enfrentando nuevos retos que me permitan mejorar mis habilidades.`;

    const expandido = parrafo.getAttribute("data-expandido") === "true";

    if (expandido) {
        parrafo.innerHTML = textoCorto;
        parrafo.setAttribute("data-expandido", "false");
        boton.textContent = "Ver más ▼";
    } else {
        parrafo.innerHTML = textoLargo;
        parrafo.setAttribute("data-expandido", "true");
        boton.textContent = "Ver menos ▲";
    }
}

function mostrarTexto(card) {
    document.querySelectorAll(".textoOculto").forEach(function (p) {
        if (p !== card.querySelector(".textoOculto")) {
            p.classList.add("oculto");
        }
    });

    const texto = card.querySelector(".textoOculto");
    if (texto) {
        texto.classList.toggle("oculto");
    }
}


const formulario = document.querySelector("form.formulario");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); 

        const nombre = formulario.querySelector("input[name='name']").value;
        const confirmacion = document.getElementById("mensaje-confirmacion");

        if (confirmacion) {
            confirmacion.textContent = `✅ ¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;
            confirmacion.style.display = "block";

            setTimeout(() => {
                confirmacion.style.display = "none";
            }, 5000);
        }

        formulario.reset();
    });
}