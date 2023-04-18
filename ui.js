
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

// Slider

// let btnNext = document.getElementById('btn-next')
// let btnPrev = document.getElementById('btn-prev')
// let slider =  document.getElementById('slider')
// let itemSlider = document.querySelectorAll('.item-slider')
// let position




// btnNext.addEventListener('click', ()=>{
//   position = slider.style.marginRight
  
//   slider.style.marginRight = '370px' + position
//   slider.style.transition = 'margin 1s'  
//   console.log( slider.getAttribute("style")  )
// })


  
  let boxSlider = document.getElementById('wrapper-jobs')
  const slider = boxSlider.querySelector("#slider");
  let slide = boxSlider.querySelectorAll(".item-slider");
  let slideLast = slide[slide.length -1,slide.length - 2];
  
  console.log(slideLast)
  const prevBtn = boxSlider.querySelector ("#btn-prev");
  const nextBtn = boxSlider.querySelector ("#btn-next");
  
  slider.insertAdjacentElement( "afterbegin", slideLast)
  
  const moveNext = () =>{
    let slideFirst = boxSlider.querySelectorAll(".item-slider")[0];
    slider.style.marginLeft = "-50%"
    slider.style.transition = "margin 0.5s"
    setTimeout(()=>{
      slider.style.transition = "none"
      slider.insertAdjacentElement("beforeend", slideFirst)
      slider.style.marginLeft = "-2%"
      
      
  
    }, 400);
  }
  const movePrev = () =>{
    let slide = boxSlider.querySelectorAll(".item-slider");
    let slideLast = slide[slide.length - 1, slide.length-2];
    slider.style.marginLeft = "0%"
    slider.style.transition = "margin 0.5s"
    setTimeout(()=>{
      slider.style.transition = "none"
      slider.insertAdjacentElement("afterbegin", slideLast)
      slider.style.marginLeft= "0"
    }, 500);
  }
  
  nextBtn.addEventListener('click', ()=>{moveNext()})
  prevBtn.addEventListener('click', ()=>{movePrev()})

