const carousel = document.querySelector('.carousel');

let isDragStart = false
const dragging = (e) =>{
    if(!isDragStart)
    carousel.scrollLeft = e.pageX;

}
carousel.addEventListener("mousemove", dragging)