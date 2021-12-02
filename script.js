const alertLogin = document.getElementById('button-login');
const verifEmail = document.getElementById('input-email-header');

alertLogin.addEventListener('click', () => {
  if (verifEmail.value.includes('@') === true) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
