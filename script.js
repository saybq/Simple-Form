const form = document.getElementById("sample-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  form.reset();
  window.location.href = "thankyou.html";
  
});