document.getElementById("formClave").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtiene el valor ingresado en el campo de clave
    var clave = document.getElementById("clave").value;
  
    // Verifica si el campo está vacío
    if (clave === "") {
      alert("Por favor, ingresa una contraseña.");
    }
    // Verifica si la clave es correcta (puedes cambiar "claveCorrecta" por la clave que desees)
    else if (clave === "06/08") {
      // Muestra el div oculto
      //document.getElementById("mensaje").style.display = "block";
      //document.getElementById("contenedor").style.display = "none";
      window.location.href ='mensaje.html';
    }
    else {
      alert("Contraseña incorrecta. Por favor, intenta nuevamente.");
    }
  });
  