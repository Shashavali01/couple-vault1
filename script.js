/* LOGIN FUNCTION */
function login() {
  const u = document.getElementById("u").value.trim();
  const p = document.getElementById("p").value.trim();

  if (u === "" || p === "") {
    alert("Please enter your name and password ❤️");
    return;
  }

  if (p === "joys") {
    localStorage.setItem("loveName", u);
    window.location.href = "home.html";
  } else {
    alert("Wrong password ❤️");
  }
}

/* LOVE LETTER FUNCTIONS */
function openLetter() {
  document.getElementById("envelope").classList.add("open");
}

function closeLetter() {
  document.getElementById("envelope").classList.remove("open");
}
