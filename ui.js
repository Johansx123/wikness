let root = document.getElementById("carousel"),
  data = [];

const render = (data) => {
  let card = document.createElement("a"),
    img = document.createElement("img"),
    info = document.createElement("div"),
    title = document.createElement("h3"),
    paragraf = document.createElement("p");
  root.appendChild(card);
  card.className = "item-slider";
  card.appendChild(info);
  card.appendChild(img);
  info.appendChild(title);
  info.appendChild(paragraf);
  img.src = data.img;
  title.innerText = data.title;
  paragraf.innerHTML = data.info;
  console.log(data);
  info.className = "info-jobs";
};

const pet = () => {
  fetch("https://sheet.best/api/sheets/5d4c8ca4-0692-4c1b-b2b9-c5053e06bf9d")
    .then((response) => response.json())
    .then(function (response) {
      data = response;
      data.map((x) => render(x));
    });
};


// Menu de navegacion desplegable

let nav = document.querySelector('#nav')
let openMenu = document.getElementById('openMenu')
let closeMenu = document.getElementById('closeMenu')
const icon = document.getElementById('icon')

openMenu.addEventListener('click', () => { 
  nav.classList.remove('state') 
  document.body.style.overflow = "hidden"
  openMenu.style.transform = "translateX(-100vw)"
  openMenu.style.transition  = "transform 1s"
  icon.style.transform = "translateX(-100vw)"
  icon.style.transition  = "transform 1s"
})
closeMenu.addEventListener('click', () => { 
  nav.classList.add('state') 
  document.body.style.overflow = ""
  openMenu.style.transform = "translateX(0)"
  icon.style.transform = "translateX(0)"
})
