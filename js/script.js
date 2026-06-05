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
    }
}