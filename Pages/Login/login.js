const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from reloading the page

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem("admin", email);
      window.location.href = "/Pages/Admin/adminpanel.html";
    } else {
      alert("Invalid username or password");
    }
  })
  .catch(err => {
    console.error("⚠️ Error logging in:", err);
  });
});