function sendEmail(){
    Email.send({
        SecureToken : "7368a25d-f01f-4616-83e3-6ec947f5eb5c",
        To : "mosesyasin01@gmail.com",
        From : document.querySelector("#email").value,
        Subject : "New contact Query",
        Body : "Name:" + document.querySelector("#first").value
                + "<br> Second Name:" + document.querySelector("#second").value
                +"<br> Phone No:" + document.querySelector("#phone-no").value
                +"<br. Email:" + document.querySelector("#email").value
                +"<br> Message:" + document.querySelector("#message").value,
    }).then(
    message => alert("Message sent successfully")
    );
}   