// mobile menu
// SCROLL REVEAL ANIMATION

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;

    const revealTop = element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");

    }

  });

});

/* FLOATING STARS */

for(let i = 0; i < 50; i++){

  const star = document.createElement("div");

  star.classList.add("star");

  document.body.appendChild(star);

  star.style.left = Math.random() * 100 + "vw";

  star.style.top = Math.random() * 100 + "vh";

  star.style.width = Math.random() * 4 + 2 + "px";

  star.style.height = star.style.width;

  star.style.animationDuration = Math.random() * 3 + 2 + "s";

}


// BUTTON CLICK EVENT
function openPage(pageName){

  window.location.href = pageName;

}
// script.js


// FUNCTION TO OPEN EXPLORE PAGE

function goToExplore(){

  window.location.href = "explore.html";

}

// simple floating particles (works on all pages)

for(let i=0;i<25;i++){
  let dot=document.createElement("div");

  dot.style.position="absolute";
  dot.style.width="4px";
  dot.style.height="4px";
  dot.style.background="white";
  dot.style.borderRadius="50%";

  dot.style.left=Math.random()*window.innerWidth+"px";
  dot.style.top=Math.random()*window.innerHeight+"px";

  dot.style.animation="float 6s linear infinite";

  document.body.appendChild(dot);
}


const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    clearErrors();

    /* NAME VALIDATION */

    if(nameInput.value.trim() === ""){
        showError(nameInput, "Name is required");
        valid = false;
    }

    /* EMAIL VALIDATION */

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput.value.trim() === ""){
        showError(emailInput, "Email is required");
        valid = false;
    }

    else if(!emailPattern.test(emailInput.value)){
        showError(emailInput, "Enter a valid email");
        valid = false;
    }

    /* MESSAGE VALIDATION */

    if(messageInput.value.trim() === ""){
        showError(messageInput, "Message cannot be empty");
        valid = false;
    }

    else if(messageInput.value.trim().length < 10){
        showError(messageInput,
        "Message must contain at least 10 characters");
        valid = false;
    }

    /* SUCCESS */

    if(valid){

        successMessage.style.display = "block";

        form.reset();

        setTimeout(()=>{
            successMessage.style.display = "none";
        },3000);
    }

});

/* SHOW ERROR */

function showError(input, message){

    const inputGroup =
    input.parentElement;

    const error =
    inputGroup.querySelector(".error");

    error.innerText = message;
}

/* CLEAR ERRORS */

function clearErrors(){

    const errors =
    document.querySelectorAll(".error");

    errors.forEach(error=>{
        error.innerText = "";
    });

}