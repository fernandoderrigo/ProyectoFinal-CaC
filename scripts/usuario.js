document.addEventListener('DOMContentLoaded', function() {
  const perfilForm = document.getElementById('perfilForm');
  const nameInput = document.getElementById('name');
  const lastnameInput = document.getElementById('lastname');
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const deleteAccountButton = document.querySelector('.delete-account');

  perfilForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío del formulario por defecto

    if (!validateForm()) {
      return; // Detener el envío si la validación falla
    }

    console.log('Formulario válido, enviando datos...');
    // Aquí puedes agregar código para enviar el formulario o realizar otras acciones
  });

  deleteAccountButton.addEventListener('click', function() {
    if (confirm('¿Está seguro de eliminar su cuenta?')) {
      // Si el usuario confirma la eliminación
      alert('Su cuenta ha sido borrada correctamente');
      // Redirigir a la página principal (Inicio)
      window.location.href = '../index.html';
    } else {
      console.log('Operación cancelada.');
    }
  });

  function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === '') {
      isValid = false;
      setErrorFor(nameInput, 'El nombre no puede estar vacío');
    } else {
      setSuccessFor(nameInput);
    }

    if (lastnameInput.value.trim() === '') {
      isValid = false;
      setErrorFor(lastnameInput, 'El apellido no puede estar vacío');
    } else {
      setSuccessFor(lastnameInput);
    }

    if (usernameInput.value.trim() === '') {
      isValid = false;
      setErrorFor(usernameInput, 'El usuario no puede estar vacío');
    } else {
      setSuccessFor(usernameInput);
    }

    if (emailInput.value.trim() === '') {
      isValid = false;
      setErrorFor(emailInput, 'El correo no puede estar vacío');
    } else if (!isEmailValid(emailInput.value.trim())) {
      isValid = false;
      setErrorFor(emailInput, 'Correo electrónico no válido');
    } else {
      setSuccessFor(emailInput);
    }

    if (passwordInput.value.trim() === '') {
      isValid = false;
      setErrorFor(passwordInput, 'La contraseña no puede estar vacía');
    } else {
      setSuccessFor(passwordInput);
    }

    return isValid;
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // Mostrar mensaje de error y agregar clase de error
    small.innerText = message;
    formControl.className = 'form-control error';
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
  }

  function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
