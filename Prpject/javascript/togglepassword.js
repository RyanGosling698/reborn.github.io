function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeImages = document.querySelectorAll(".eye");
  
    eyeImages.forEach(function (eyeImage) {
      var isVisible = eyeImage.getAttribute("data-visible") === "true";
      eyeImage.setAttribute("data-visible", !isVisible);
    });
  
    var visibleEye = document.querySelector(".eye[data-visible='true']");
    var hiddenEye = document.querySelector(".eye[data-visible='false']");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      visibleEye.style.display = "none";
      hiddenEye.style.display = "inline";
    } else {
      passwordInput.type = "password";
      hiddenEye.style.display = "inline";
      visibleEye.style.display = "none";
    }
  }

  function togglePasswordVisibility2() {
    var passwordInput = document.getElementById("password2");
    var eyeImages = document.querySelectorAll(".eye2");
  
    eyeImages.forEach(function (eyeImage) {
      var isVisible = eyeImage.getAttribute("data-visible") === "true";
      eyeImage.setAttribute("data-visible", !isVisible);
    });
  
    var visibleEye = document.querySelector(".eye2[data-visible='true']");
    var hiddenEye = document.querySelector(".eye2[data-visible='false']");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      visibleEye.style.display = "none";
      hiddenEye.style.display = "inline";
    } else {
      passwordInput.type = "password";
      hiddenEye.style.display = "inline";
      visibleEye.style.display = "none";
    }
  }
