
 let root = document.getElementById("slider"),
 
 base = [];
// img.src = "images/nuestros jobs.jpg"


const render = (data)=>{
let card = document.createElement("a"),
    img = document.createElement("img"),
    info = document.createElement("div"),
    title = document.createElement("h3"),
    paragraf = document.createElement("p")

    root.appendChild(card);
      card.appendChild(info);
      card.appendChild(img);
      info.appendChild(title);
      info.appendChild(paragraf);
      img.src = data.img;
      title.innerText = data.title;
      paragraf.innerHTML = data.info;
      console.log(data);
      info.className = "info-jobs";

}


const pet = () => {
  fetch("https://sheet.best/api/sheets/5d4c8ca4-0692-4c1b-b2b9-c5053e06bf9d")
    .then((response) => response.json())
    .then(function(data){    
      base = data;
      base.map( x =>render(x))     
    })
};

