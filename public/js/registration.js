const form = document.querySelector('.registrationForm');
const formStatus = document.querySelector('.status');
form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const login = event.target.login.value;
    const password = event.target.password.value;
    const email = event.target.email.value;
    const passwordConfirm = event.target.passwordConfirm.value;

    await fetch('/registration');
    const response = await fetch('/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        login,
        password,
        email,
        passwordConfirm,
      }),
    });


    const data = await response.json();
    if (data.status === 'success') {
      window.location.assign(data.url);
    }
    if (data.status === 'error') {
      formStatus.innerHTML = data.message;
    }
  } catch (error) {
    console.log(error.message);
  }
});
