function login() {
  const u = document.getElementById("u").value;
  const p = document.getElementById("p").value;

  if (u === "lucky" && p === "joys") {
    window.location.href = "home.html";
  } else {
    alert("Wrong login");
  }
}

/* Load gallery ONLY if gallery exists (home.html) */
/* Auto-load gallery images */
const gallery = document.getElementById("gallery");
const totalImages = 50;

if (gallery) {
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `photos/pic${i}.jpeg`;
    img.onerror = () => img.remove();

    const wrapper = document.createElement("div");
    wrapper.className = "photo";
    wrapper.appendChild(img);

    gallery.appendChild(wrapper);
  }
}

/* Image modal */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

gallery?.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};

/* Love letter */
function openLetter() {
  document.getElementById("envelope").classList.add("open");
}

function closeLetter() {
  document.getElementById("envelope").classList.remove("open");
}






