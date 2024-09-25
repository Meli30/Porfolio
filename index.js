document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario
    
    // Limpiar el mensaje de error
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
  
    // Obtener valores del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Validar campos
    if (name === '') {
      errorMessage.textContent = 'El nombre es obligatorio.';
      return;
    }
  
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Por favor ingrese un email válido.';
      return;
    }
  
    if (subject === '') {
      errorMessage.textContent = 'El asunto es obligatorio.';
      return;
    }
  
    if (message === '') {
      errorMessage.textContent = 'El mensaje es obligatorio.';
      return;
    }
  
    // Si todo está bien, se puede enviar el formulario
    alert('Formulario enviado con éxito!');
  });
  
  // Función para validar el formato de email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  