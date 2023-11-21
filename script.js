let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("reactJS");
        habilidades[3].classList.add("Java8");
        habilidades[4].classList.add("MySQL");
        habilidades[5].classList.add("SQLserver");
        habilidades[6].classList.add("Booststrap");
        habilidades[7].classList.add("AWS");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
        habilidades[10].classList.add("creatividad");
        habilidades[11].classList.add("dedicacion");
        habilidades[12].classList.add("pm");
        
    }
}


document.getElementById('descargarCV').addEventListener('click', function() {
    // URL del archivo PDF
    var pdfUrl = './archivo/cvJhonnySota.pdf';
  
    // Crea un elemento <a> oculto
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cvJhonnySota.pdf';
  
    // Añade el elemento al DOM y simula un clic
    window.open(pdfUrl, '_blank');
  
  });

  function enviarCorreo() {
    var nombre = document.getElementById('nombre').value;
            var telefono = document.getElementById('telefono').value;
            var correo = document.getElementById('correo').value;
            var tema = document.getElementById('tema').value;
            var mensaje = document.getElementById('mensaje').value;

            var cuerpoCorreo = "Nombre: " + nombre + "\nTeléfono: " + telefono + "\nCorreo: " + correo + "\nTema: " + tema + "\nMensaje: " + mensaje;

            var templateParams = {
                from_name: nombre,
                to_email: 'destinatario@example.com',
                message: cuerpoCorreo,
            };

            emailjs.send("sendinblue", "template_dcfeqo3", templateParams)
                .then(function(response) {
                    console.log('Correo enviado con éxito', response);
                    alert('Correo enviado con éxito');
                }, function(error) {
                    console.log('Error al enviar el correo', error);
                    alert('Error al enviar el correo');
                });
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 