document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validar que todos los campos estén completos
  if (!email || !username || !name || !password || !confirmPassword) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  // Si todo es válido, puedes enviar el formulario
  alert('Registro exitoso');
});
