const fullrating = document.getElementById("star");
const display = document.getElementById("display");
fullrating.addEventListener("click",() => {
  display.style.position="relative"
  display.style.left="0"
});
const stars = document.querySelectorAll(".star-widgth a label");

stars.forEach((star,index1) => {
  star.addEventListener("click",() => {
    stars.forEach((star,index2) => {
      index1 <= index2 ? star.classList.add("active"):star.classList.remove("active");
    });
 
  });
});


