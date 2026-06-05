const searchInput = document.getElementById('searchInput');

if(searchInput){
    searchInput.addEventListener("keyup",function(){
        let filter = this.value.toLowerCase();
        let cards = document.querySelectorAll(".product-card");
        cards.forEach(card =>{
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
        let message = document.getElementById("message").value.trim();

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

        if(/[0-9]/.test(message)){
            alert("Message cannot contain numbers");
            return;
        }

        alert("Message sent successfully!");
        
    });
}

/* Form Input Validation - Letters only for name fields */
const nameInputs = document.querySelectorAll('input[id="name"]');
nameInputs.forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
});

/* Phone/Number input - Numbers only */
const phoneInputs = document.querySelectorAll('input[type="tel"], input[placeholder*="phone"], input[placeholder*="Phone"], input[id*="phone"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9\s\-\(\)]/g, '');
    });
});

/* Product name input - letters and spaces only */
const productInputs = document.querySelectorAll('input[id="product"]');
productInputs.forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
    });
});

/* Message input - no numbers allowed for both contact and enquiry forms */
const messageFields = document.querySelectorAll('form textarea#message');
messageFields.forEach(field => {
    field.addEventListener('input', function() {
        this.value = this.value.replace(/[0-9]/g, '');
    });
});

/* Enquiry Form Validation */
const enquiryForm = document.getElementById("enquiryForm");
if(enquiryForm){
    enquiryForm.addEventListener("submit", function(e){
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone") ? document.getElementById("phone").value.trim() : "";
        let product = document.getElementById("product").value.trim();
        let message = document.getElementById("message").value.trim();

        if(name===""){
            alert("Please enter your name");
            return;
        }

        if(!email.includes("@")){
            alert("Please enter a valid email");
            return;
        }

        if(phone === "" || phone.length < 10){
            alert("Please enter a valid phone number");
            return;
        }

        if(product===""){
            alert("Please enter a product name");
            return;
        }

        if(/[0-9]/.test(product)){
            alert("Product name cannot contain numbers");
            return;
        }

        if(message===""){
            alert("Please enter your enquiry");
            return;
        }

        if(/[0-9]/.test(message)){
            alert("Enquiry cannot contain numbers");
            return;
        }

        alert("Enquiry submitted successfully!");
        enquiryForm.reset();
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

const navToggles = document.querySelectorAll('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggles.length > 0 && mainNav) {
    navToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            const open = mainNav.classList.contains('active');
            navToggles.forEach(btn => {
                btn.classList.toggle('open', open);
                btn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
            });
        });
    });
}

/*Mission card interaction*/

const heroText = document.querySelector(".hero-text");
if(heroText){
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Welcome to Idi Delites - Fressly baked treats made with love!";
    heroText.appendChild(welcomeMessage);
}

window.addEventListener("scroll",() => {

});

/*Welcome Banner animation - animate only the text, not the banner container*/
const banner = document.getElementById("welcomeBanner");
const welcomeText = banner ? banner.querySelector('.welcome-text') : null;
if (banner && welcomeText) {
    const headerEl = document.querySelector('header');
    function positionBannerAtHeader() {
        const headerRect = headerEl ? headerEl.getBoundingClientRect() : { bottom: 0 };
        const top = window.scrollY + headerRect.bottom; // directly below header
        banner.style.position = 'absolute';
        banner.style.top = top + 'px';
    }

    positionBannerAtHeader();
    let textPos = window.innerWidth; // start text off-screen to the right
    welcomeText.style.left = textPos + 'px';

    function moveText() {
        textPos -= 2; // speed
        welcomeText.style.left = textPos + 'px';
        if (textPos < -welcomeText.offsetWidth) {
            textPos = window.innerWidth; // reset when text exits left
        }
        requestAnimationFrame(moveText);
    }

    window.addEventListener('resize', () => {
        positionBannerAtHeader();
    });

    window.addEventListener('scroll', positionBannerAtHeader);

    moveText();
}
