const searchInput = document.getElementById('searchInput');

if(searchInput){
    searchInput.addEventListener("keyup",function(){
        let filter = this.value.toLowerCase();
        let cards =
               document.querySelectorAll(".product-card");
               card.forEach(card =>{
                let text = card.textContent.toLowerCase();
                if(text.includes(filter)){
                   card.style.display = "block";
                }
                else{
                    card.style.display ="none";
                }

               });
    });
        

}

const orderButtons = document.querySelectorAll('.orderBtn');
orderButtons.forEach(button=>  {
    button.addEventListener("click", () => {
        alert("Thank you for choosing Idi Delites!");
    });
});

const contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email =document.getElementById("email").value.trim();
        let messsage = document.getElementById("message").value.trim();

        if(name===""){
            alert("Please enter your name");
            return;
        }

        if(!email.includes("@")){
            alert("Please enter a valid email");
            return;
        }

        if(message===""){
            alert("Please enter a message");
            return;
        }

        alert("Message sent successfully!");
        
    });
}

const missionCards = document.querySelectorAll(".mission-hover");
missionCards.forEach(card => { 
    card.addEventListener("click",() => {
        alert("Thank you for learning more about Idi Delites!");
    });
});

window.addEventListener("scroll",() => {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach(elements =>{
    let position = elements.getBoundingClientRect().top;
    if (position < window.innerHeight - 100){
        elements.classList.add("show");
    }
    });
});

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        navToggle.classList.toggle('open');
        navToggle.setAttribute(
            'aria-label',
            navToggle.classList.contains('open') ? 'Close navigation' : 'Open navigation'
        );
    });
}

const heroText = document.querySelector(".hero-text");
if(heroText){
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Welcome to Idi Delites - Fressly baked treats made with love!";
}

window.addEventListener("scroll",() => {

});

const heroText = document.querySelector(".hero-text");
if(heroText){
    const welcomeMessage = document.createElement("P");
    welcomeMessage.textContent = "Welcome to Idi Delites -Freshly baked treats made with love!";
    heroText.appendChild(welcomeMessage);
}