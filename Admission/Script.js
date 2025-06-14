document.getElementById('admissionForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value.trim();

  if (!name || !email || !phone || !dob || !gender || !course || !address) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Admission Successful!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDOB: ${dob}\nGender: ${gender.value}\nCourse: ${course}\nAddress: ${address}`);
});
