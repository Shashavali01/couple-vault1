function login() {
  const u = document.getElementById("u").value.trim();
  const p = document.getElementById("p").value.trim();

  if (u === "" || p === "") {
    alert("Please enter your name and password ❤️");
    return;
  }

  if (p === "joys") {
    // Save name
    localStorage.setItem("loveName", u);

    // Go to home page
    window.location.href = "home.html";
  } else {
    alert("Wrong password ❤️");
  }
}
