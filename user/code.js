document.addEventListener("DOMContentLoaded", function () {
    const cambiarFotoBtn = document.querySelector(".cambiar-foto-btn");
    const seleccionarFotoInput = document.querySelector(".seleccionar-foto");
    const fotoPerfil = document.querySelector(".foto-perfil");
  
    // Recuperar la imagen de perfil guardada en localStorage al cargar la página
    const fotoPerfilURLGuardada = localStorage.getItem("fotoPerfilURL");
    if (fotoPerfilURLGuardada) {
      fotoPerfil.src = fotoPerfilURLGuardada;
    }
  
    cambiarFotoBtn.addEventListener("click", function () {
      // Cuando se hace clic en el botón, activa el input de selección de archivo
      seleccionarFotoInput.click();
    });
  
    seleccionarFotoInput.addEventListener("change", function () {
      // Cuando el usuario selecciona una nueva imagen, cambia la imagen de perfil
      if (seleccionarFotoInput.files && seleccionarFotoInput.files[0]) {
        const nuevaFoto = seleccionarFotoInput.files[0];
        const nuevaFotoURL = URL.createObjectURL(nuevaFoto);
        fotoPerfil.src = nuevaFotoURL;
  
        // Guardar la nueva imagen de perfil en localStorage
        localStorage.setItem("fotoPerfilURL", nuevaFotoURL);
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombreInput");
    const apellidoInput = document.getElementById("apellidoInput");
    const emailInput = document.getElementById("emailInput");
    const contrasenaInput = document.getElementById("contrasenaInput");
    const guardarCambiosBtn = document.getElementById("guardarCambiosBtn");
    const nombreUsuarioElement = document.querySelector(".nombre-usuario h1");
  
    // Recuperar el valor del nombre guardado en localStorage al cargar la página
    nombreInput.value = localStorage.getItem("nombre") || "";
    apellidoInput.value = localStorage.getItem("apellido") || "";
    emailInput.value = localStorage.getItem("email") || "";
    contrasenaInput.value = localStorage.getItem("contrasena") || "";
  
    // Actualizar el contenido del elemento con clase "nombre-usuario"
    nombreUsuarioElement.textContent = nombreInput.value + " " + apellidoInput.value;
  
    // Manejar el evento de clic en el botón "GUARDAR CAMBIOS"
    guardarCambiosBtn.addEventListener("click", function () {
      // Guardar los valores en localStorage
      localStorage.setItem("nombre", nombreInput.value);
      localStorage.setItem("apellido", apellidoInput.value);
      localStorage.setItem("email", emailInput.value);
      localStorage.setItem("contrasena", contrasenaInput.value);
  
      // Actualizar el contenido del elemento con clase "nombre-usuario"
      nombreUsuarioElement.textContent = nombreInput.value + " " + apellidoInput.value;
  
      // Recargar la página
      location.reload();
    });
  });
  