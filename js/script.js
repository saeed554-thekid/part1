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

function createFormMessage(form) {
    let message = form.querySelector('.form-message');
    if (!message) {
        message = document.createElement('div');
        message.className = 'form-message';
        form.appendChild(message);
    }
    return message;
}

function setFormMessage(form, text, type = 'success') {
    const message = createFormMessage(form);
    message.textContent = text;
    message.className = `form-message ${type}`;
}

function simulateAjaxSubmit(payload) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                success: true,
                message: 'Your request was submitted successfully. We will contact you soon.'
            });
        }, 900);
    });
}

const contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", async function(e){
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        if(name===""){
            setFormMessage(contactForm, "Please enter your name", 'error');
            return;
        }

        if(!email.includes("@")){
            setFormMessage(contactForm, "Please enter a valid email", 'error');
            return;
        }

        if(message===""){
            setFormMessage(contactForm, "Please enter a message", 'error');
            return;
        }

        if(/[0-9]/.test(message)){
            setFormMessage(contactForm, "Message cannot contain numbers", 'error');
            return;
        }

        setFormMessage(contactForm, "Sending your message...", 'loading');

        try {
            const response = await simulateAjaxSubmit({ name, email, phone, message, page: 'contact' });
            if(response.success){
                setFormMessage(contactForm, response.message, 'success');
                contactForm.reset();
            } else {
                setFormMessage(contactForm, response.message || 'Unable to send your message. Please try again.', 'error');
            }
        } catch (err) {
            setFormMessage(contactForm, 'Unable to submit your message. Please try again later.', 'error');
        }
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
    enquiryForm.addEventListener("submit", async function(e){
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone") ? document.getElementById("phone").value.trim() : "";
        let product = document.getElementById("product").value.trim();
        let message = document.getElementById("message").value.trim();

        if(name===""){
            setFormMessage(enquiryForm, "Please enter your name", 'error');
            return;
        }

        if(!email.includes("@")){
            setFormMessage(enquiryForm, "Please enter a valid email", 'error');
            return;
        }

        if(phone === "" || phone.length < 10){
            setFormMessage(enquiryForm, "Please enter a valid phone number", 'error');
            return;
        }

        if(product===""){
            setFormMessage(enquiryForm, "Please enter a product name", 'error');
            return;
        }

        if(/[0-9]/.test(product)){
            setFormMessage(enquiryForm, "Product name cannot contain numbers", 'error');
            return;
        }

        if(message===""){
            setFormMessage(enquiryForm, "Please enter your enquiry", 'error');
            return;
        }

        if(/[0-9]/.test(message)){
            setFormMessage(enquiryForm, "Enquiry cannot contain numbers", 'error');
            return;
        }

        setFormMessage(enquiryForm, "Submitting your enquiry...", 'loading');

        try {
            const response = await simulateAjaxSubmit({ name, email, phone, product, message, page: 'enquiry' });
            if(response.success){
                setFormMessage(enquiryForm, response.message, 'success');
                enquiryForm.reset();
            } else {
                setFormMessage(enquiryForm, response.message || 'Unable to submit your enquiry. Please try again.', 'error');
            }
        } catch (err) {
            setFormMessage(enquiryForm, 'Unable to submit your enquiry. Please try again later.', 'error');
        }
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

// ===== LIGHTBOX GALLERY FUNCTIONALITY =====
let currentImageIndex = 0;
let galleryImages = [];

function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev-image');
    const nextBtn = document.querySelector('.next-image');

    if (!lightbox) return;

    // Populate gallery images array
    galleryItems.forEach((img, index) => {
        galleryImages.push({
            src: img.src,
            alt: img.alt,
            title: img.getAttribute('data-title') || img.alt
        });

        // Add click listener to each gallery image
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox();
        });
    });

    function openLightbox() {
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        updateLightboxImage();
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function updateLightboxImage() {
        const image = galleryImages[currentImageIndex];
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.title;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }

    // Event listeners for lightbox controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
}

// Initialize lightbox when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
} else {
    initLightbox();
}

// ===== DYNAMIC CONTENT LOADING =====
function loadProductsFromAPI() {
    // Simulated product data - can be replaced with actual API call
    const products = [
        {
            id: 1,
            name: 'Birthday Cake',
            description: 'Custom Birthday cakes made for celebrations',
            price: 'R350',
            image: 'images/Exploring-The-Different-Types-Of-Cake-qn4qikfbsekcwucg0r27cna2n1xq9rgr3vfalewsk4.jpg'
        },
        {
            id: 2,
            name: 'Cookies',
            description: 'Freshly baked cookies',
            price: 'R80',
            image: 'images/types-of-cookies-scaled.webp'
        },
        {
            id: 3,
            name: 'Fresh Bread',
            description: 'Soft bread baked fresh every morning',
            price: 'R40',
            image: 'images/bdf_homepage_product-min-1-scaled.jpg'
        }
    ];
    return products;
}

// Dynamic product listing function
function displayDynamicProducts(products) {
    const productsSection = document.querySelector('.products-page');
    if (!productsSection) return;

    productsSection.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <h4>${product.price}</h4>
            <button class="orderBtn" data-product="${product.name}">Order Now</button>
        `;
        productsSection.appendChild(productCard);
    });

    // Re-attach order button listeners
    document.querySelectorAll('.orderBtn').forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-product');
            alert(`Thank you for choosing ${productName} from Idi Delites!`);
        });
    });
}

// Load featured products dynamically
if (document.querySelector('.featured-products')) {
    const products = loadProductsFromAPI();
    displayDynamicProducts(products);
}

// ===== MAP TOGGLE FUNCTIONALITY =====
function initMapToggle() {
    const mapButtons = document.querySelectorAll('.map-btn');
    const mapEmbeds = document.querySelectorAll('.map-embed');

    mapButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedMap = button.getAttribute('data-map');

            // Remove active class from all buttons and maps
            mapButtons.forEach(btn => btn.classList.remove('active'));
            mapEmbeds.forEach(map => map.classList.remove('active'));

            // Add active class to clicked button and corresponding map
            button.classList.add('active');
            const activeMap = document.querySelector(`.map-embed[data-map="${selectedMap}"]`);
            if (activeMap) {
                activeMap.classList.add('active');
            }
        });
    });
}

// Initialize map toggle when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMapToggle);
} else {
    initMapToggle();
}
