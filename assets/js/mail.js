function sendEmail() {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const subject = document.getElementById("subject").value;
const message = document.getElementById("message").value;
if(name==""){
    alert("Name cannot be empty");
    return;
}
if(email==""){
    alert("Email cannot be empty");
    return;
}
if(email.search("@")==-1){
    alert("Enter a valid Email");
    return;
}
if(subject==""){
    alert("Subject cannot be empty");
    return;
}
if(message==""){
    alert("Message cannot be empty");
    return;
}
console.log("hi");
Email.send({
SecureToken : "b1f7057f-a5a7-4834-ab1c-09fd8fa646a9",
To : 'visionmastermindgroup@gmail.com',
From : "visionmastermindgroup@gmail.com",
Subject: subject,
Body: "Name: "+ name + "\n\nEmail: " + email + "\nMessage: " + message,
})
.then(function (message) {
document.getElementById("confirmation").innerHTML="Thank you for contacting us. We will be getting back to you shortly!"
setTimeout(function(){location.reload();},3000)
});
}

function sendReview(challenge) {
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const review = document.getElementById("review").value;
if(name==""){
    alert("Name cannot be empty");
    return;
}
if(email==""){
    alert("Email cannot be empty");
    return;
}
if(email.search("@")==-1){
    alert("Enter a valid Email");
    return;
}
if(review==""){
    alert("Message cannot be empty");
    return;
}
console.log("hi review");
Email.send({
SecureToken : "1918e517-9b88-4b4d-9cd7-009d61289d48",
To : 'testercomar@gmail.com',
From : "testercomar@gmail.com",
Subject: "Review for challenge: " + challenge,
Body: "Name: "+ name + "\n\nEmail: " + email + "\nReview: " + review,
})
.then(function (message) {
document.getElementById("confirmation").innerHTML="Thank you for time!"
setTimeout(function(){location.reload();},3000)
});
}
    