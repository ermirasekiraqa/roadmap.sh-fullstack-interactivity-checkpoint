const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");
    const userObject = JSON.parse(user);

    if (!userObject) {
      window.location.href = "login.html";
    }
  });
};

main();
