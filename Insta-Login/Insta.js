document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
  } else if (username.toLowerCase() === "raviraj") {
    alert("Login successful. Welcome, Raviraj!");
  } 
  else {
    alert("Invalid username. Access denied.");
  }
});
