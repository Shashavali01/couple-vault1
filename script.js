function login() {
  const u = document.getElementById("u").value;
  const p = document.getElementById("p").value;

  if (u === "lucky" && p === "joys") {
    window.location.href = "home.html";
  } else {
    alert("Wrong login");
  }
}
const gallery = document.getElementById("gallery");
const totalImages = 50; // increase if needed

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



