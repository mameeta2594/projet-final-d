var toggle_menu =document.querySelector('.responsive-menu');
var menu =document.querySelector('.menu');
toggle_menu.onclick= function() {
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive')
}

const inputs =document.querySelectorAll(" .input");
function focusFunc(){
    let prent = this.parentNode;
    if(this.value == "");
    prent.classList.add("focus");
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
})



function sendMessage(){
    (function(){
        emailjs.init("");//Public key
    }) ();
    var serviceID= ""; // email service ID
    var templateID = ""; // email template ID

    var params ={
        sendername:document.querySelector("#name").value,
        senderemail:document.querySelector("#email").value,


        Object: document.querySelector("objet").value,
        message:document.querySelector("#message").value,   
    };
    emailjs.send(seviceID, templateID, params)
    .then( res=> {
    alert('Thank you ,' +params['sendername'] + '! Your message has been sent.');
    })
    .catch();
}