const handleLogin = (event) => {
  event.preventDefault();
  try {
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username || !password) {
      alert("Please fill both fields");
      return;
    }

    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "index.html";
  } catch (e) {
    console.error("Failed to login: ", e);
    alert("Failed to login. Please try again later!");
  }
};

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");
    loginForm.addEventListener("submit", handleLogin);
  });
};

main();
