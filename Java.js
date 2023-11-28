
function evaluaRespuesta() {
    var select = document.getElementById("opciones");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion2") { 
        document.getElementById("resultado").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
        document.getElementById("resultado").textContent = "Intenta de Nuevo";
    }
}

function verificarRespuesta() {
    var select = document.getElementById("opcion");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion3") {
        document.getElementById("Respuesta").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
        document.getElementById("Respuesta").textContent = "Intenta de Nuevo";
    }
}


function Respuestas() {
    var select = document.getElementById("evaluar");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion2") {
      document.getElementById("answer").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("answer").textContent = "Intenta de Nuevo";
    }
  }

function comprovar() {
    var select = document.getElementById("Answer");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion2") {
        document.getElementById("select").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
        document.getElementById("select").textContent = "Intenta de Nuevo";
    }
}

function finish() {
    var select = document.getElementById("final");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion2") {
      document.getElementById("options").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("options").textContent = "Intenta de Nuevo";
    }
  }

  function evaluarEstructura() {
    var select = document.getElementById("estructura");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion1") {
      document.getElementById("ESTRUCTURA").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("ESTRUCTURA").textContent = "Intenta de Nuevo";
    }
  }

  function Estructuraswitch() {
    var select = document.getElementById("estructuraswitch");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion3") {
      document.getElementById("switch").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("switch").textContent = "Intenta de Nuevo";
    }
  }

  function BUcleFor() {
    var select = document.getElementById("buclefor");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion3") {
      document.getElementById("FOR").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("FOR").textContent = "Intenta de Nuevo";
    }
  }

  function BUclewhile() {
    var select = document.getElementById("buclewhile");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion1") {
      document.getElementById("while").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("while").textContent = "Intenta de Nuevo";
    }
  }


  function BUcleDowhile() {
    var select = document.getElementById("bucledowhile");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion2") {
      document.getElementById("dowhile").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("dowhile").textContent = "Intenta de Nuevo";
    }
  }

  /* encapsula iento */
  function encapsulamiento() {
    var select = document.getElementById("ENCAPSULAMIENTO");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion2") {
      document.getElementById("encapsulamientoResultado").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("encapsulamientoResultado").textContent = "Intenta de Nuevo";
    }
  }

   /* abstraccion*/
  function abstraccion() {
    var select = document.getElementById("ABSTRACCION");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion3") {
      document.getElementById("abstraccionResultado").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("abstraccionResultado").textContent = "Intenta de Nuevo";
    }
  }

   /* polimorfismo*/
   function polimorfismo() {
    var select = document.getElementById("POLIMORFISMO");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion1") {
      document.getElementById("polimorfismoResultado").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("polimorfismoResultado").textContent = "Intenta de Nuevo";
    }
  }

   /*herencia */
   function herencia() {
    var select = document.getElementById("HERENCIA");
    var opcionCorrecta = select.value;
    if (opcionCorrecta === "opcion2") {
      document.getElementById("herenciaResultado").textContent = "¡Felicidades, has aprendido algo nuevo!";
    } else {
      document.getElementById("herenciaResultado").textContent = "Intenta de Nuevo";
    }
  }