function login() {
  const u = document.getElementById("u").value;
  const p = document.getElementById("p").value;

  if (u === "love" && p === "1234") {
    window.location.href = "home.html";
  } else {
    alert("Wrong login");
  }
}
