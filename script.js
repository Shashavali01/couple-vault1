function login() {
  const u = document.getElementById("u").value;
  const p = document.getElementById("p").value;

  if (u === "lucky" && p === "joys") {
    window.location.href = "home.html";
  } else {
    alert("Wrong login ❌");
  }
}

/* Auto load gallery images */
const gallery = document.getElementById("gallery");

if (gallery) {
  for (let i = 1; i <= 50; i++) {
    const img = document.createElement("img");
    img.src = `photos/pic${i}.jpeg`;
    img.onerror = () => img.remove();

    const wrapper = document.createElement("div");
    wrapper.className = "photo";
    wrapper.appendChild(img);

    gallery.appendChild(wrapper);
  }
}

/* Love letter */
function openLetter() {
  document.getElementById("envelope").classList.add("open");
}

function closeLetter() {
  document.getElementById("envelope").classList.remove("open");
}

