document.getElementById("ecetForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const phone = document.getElementById("phone").value;

  if (!/^\d{10}$/.test(phone)) {
    alert("Phone number is strictly 10 digits.");
    return;
  }

  alert("Congrats,Form submitted successfully!");
  this.reset(); 
});
