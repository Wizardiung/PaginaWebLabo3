// Obtener el botón
const btnScrollTop = document.getElementById("btnScrollTop");

// Mostrar el botón cuando el usuario ha desplazado hacia abajo 100px
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
};

// Cuando el usuario hace clic en el botón, desplazarse hacia arriba suavemente
btnScrollTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Desplazamiento suave
    });
};





