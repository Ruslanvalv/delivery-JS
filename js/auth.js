const auth = () => {
  const buttonAuth = document.querySelector('.button-auth');
  const modalAuth = document.querySelector('.modal-auth');
  const closeAuth = document.querySelector('.close-auth');
  const logInForm = document.getElementById('logInForm');

  const inputLogin = document.getElementById('login');
  const inputPass = document.getElementById('password');
  const buttonLogin = document.querySelector('.button-login');
  const buttonOut = document.querySelector('.button-out');
  const userName = document.querySelector('.user-name');
  const btnCart = document.querySelector('.button-cart');
  const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';
    btnCart.style.display = 'flex';
    userName.textContent = user.login;
    closeForm();
  };

  const logOut = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';
    btnCart.style.display = 'none';
    userName.textContent = '';
    localStorage.removeItem('user');
  };

  const closeForm = () => {
    modalAuth.style.display = 'none';
  };
  buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
  });

  buttonOut.addEventListener('click', () => {
    logOut();
  });
  closeAuth.addEventListener('click', closeForm);
  logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
      login: inputLogin.value,
      password: inputPass.value,
    };
    console.log(user.login);
    if (user.login) {
      localStorage.setItem('user', JSON.stringify(user));
      login(user);
    } else {
      alert('Вы не ввели логин.Пожалуйста введите логин.');
    }
  });
  if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
  }
};
auth();
