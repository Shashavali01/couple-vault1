function login() {
  const u = document.getElementById("u").value;
  const p = document.getElementById("p").value;

  if (u === "lucky" && p === "joys") {
    window.location.href = "home.html";
  } else {
    alert("Wrong login");
  }
}

