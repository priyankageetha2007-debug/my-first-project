const registerButton = document.getElementById('registerBtn');
const loginButton = document.getElementById('loginBtn');
const container = document.getElementById('container');

// Register பட்டனை கிளிக் பண்ணா வலது பக்கம் ஸ்லைடு ஆகும்
registerButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

// Login பட்டனை கிளிக் பண்ணா பழையபடி இடது பக்கம் ஸ்லைடு ஆகும்
loginButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});