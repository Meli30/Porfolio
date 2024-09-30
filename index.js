document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático del formulario

  // Limpiar mensajes de error
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = '';

  // Validaciones
  const errors = validateForm();

  if (errors.length > 0) {
    errorMessage.textContent = errors.join(' ');
  } else {
    alert('Formulario enviado con éxito!');
    // Aquí puedes enviar el formulario usando AJAX o una redirección
  }
});

// Función de validación del formulario
function validateForm() {
  const errors = [];
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validar campo nombre: no vacío y máximo 50 caracteres
  if (name === '') {
    errors.push('El campo "Nombre" no debe estar en blanco o vacío.');
  } else if (name.length > 50) {
    errors.push('El campo "Nombre" debe contener máximo 50 caracteres.');
  }

  // Validar el email
  if (!validateEmail(email)) {
    errors.push('Por favor ingrese un email válido.');
  }

  // Validar campo asunto
  if (subject === '') {
    errors.push('El asunto es obligatorio.');
  }

  // Validar campo mensaje
  if (message === '') {
    errors.push('El mensaje es obligatorio.');
  }

  return errors;
}

// Función para validar el formato de email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

window.addEventListener("scroll", function() {
  var header = document.querySelector(".contenedor-header");

  if (window.scrollY > 600) { // Ajusta este valor si es necesario
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('activo');
}
  
function closeMenu() {
  const menu = document.getElementById('menu');
  menu.classList.remove('activo');
}