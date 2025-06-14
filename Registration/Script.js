document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!name || !email || !password || !gender) {
    alert("Please fill in all fields!");
    return;
  }

  alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nGender: ${gender.value}`);
});
