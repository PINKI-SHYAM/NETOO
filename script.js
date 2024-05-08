//counter section
let counterstart = document.querySelectorAll(".number"); 
let last = 5000;
counterstart.forEach((counterstart) =>{
    let starting = 0;
    let ending = parseInt(counterstart.getAttribute("count"));
    let duration = Math.floor(last/ending);
    let counter = setInterval(function(){
        starting +=1;
        counterstart.textContent = starting;
        if (starting == ending){
            clearInterval(counter);
        }
    },duration);
});


//testimorial section
const slides = document.querySelector('.slides');
const indicator = [...document.querySelectorAll('.indicator button')];

let num = 0; 

indicator.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicator[num].classList.remove('necessary');
        slides.style.marginLeft = `-${100 * i}%`;
        item.classList.add('necessary');
        num = i;
    })
})
 
//porfolio section


filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var BUTTONS = document.getElementById("BUTTONS");
var btns = BUTTONS.getElementsByClassName("PORT");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("ACTIVE");
    current[0].className = current[0].className.replace(" ACTIVE", "");
    this.className += " ACTIVE";
  });
}