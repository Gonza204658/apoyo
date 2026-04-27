particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#3b82f6" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2
    }
  }
});

function mostrarTexto(card){

    document.querySelectorAll(".textoOculto").forEach(p => {
        if(p !== card.querySelector(".textoOculto")){
            p.classList.add("oculto");
        }
    });

    const texto = card.querySelector(".textoOculto");
    texto.classList.toggle("oculto");
}