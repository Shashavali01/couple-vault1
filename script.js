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
const gallery = document.getElementById("gallery");

if (gallery) {
  const totalImages = 50; // increase if you add more photos

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement("img");
    img.src = `photos/pic${i}.jpeg`;
    img.onerror = () => img.remove();

    const caption = document.createElement("p");
    caption.innerText = `Memory ${i} ❤️`;
    caption.classList.add("caption");

    const wrapper = document.createElement("div");
    wrapper.classList.add("photo");
    wrapper.appendChild(img);
    wrapper.appendChild(caption);

    gallery.appendChild(wrapper);
  }
}
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

gallery.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};
function openLetter() {
  document.getElementById("envelope").classList.add("open");
}

function closeLetter() {
  document.getElementById("envelope").classList.remove("open");
}




