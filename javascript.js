"use strict"

let rating = 0;
let eventId = "";
const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
  if(event.target.id === 'btn__1'){
    rating = 1;
    eventId = event.target.id;
  }else if(event.target.id === 'btn__2'){
    rating = 2;
    eventId = event.target.id;
  }else if(event.target.id === 'btn__3'){
    rating=3;
    eventId = event.target.id;
  }else if(event.target.id === 'btn__4'){
    rating=4;
    eventId = event.target.id;
  }else if(event.target.id === 'btn__5'){
    rating = 5;
    eventId = event.target.id;
  }
//   document.getElementById(eventId).style.backgroundColor = "hsl(217, 12%, 63%)";
//   let previousId = eventId;
//   if(previousId != ""){
//     document.getElementById(previousId).style.backgroundColor = "hsl(216, 12%, 8%)";
//   }
  myFunction(rating);
});

function myFunction(rating){
    const submitBtn = document.getElementById('sub');
    submitBtn.addEventListener("click", function(){
        document.getElementById("mainHide").className = "hidden"; 
        document.getElementById("thanks-page").classList.remove("hidden");

        let hide = document.getElementById('thank-oragnge-p');
        hide.innerHTML = "You selected " + rating.toString() + " out of 5";
    })
}

