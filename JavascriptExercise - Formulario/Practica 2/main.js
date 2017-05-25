function validation(){
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm-password").value;
    var isRegistrationSuccessful = true;
    
    if(firstName === ""){
        isRegistrationSuccessful = false;
        alert("Please provide a name");
    } 
    
    if (lastName === ""){
        isRegistrationSuccessful = false;
        alert("Please provide a lastname");
    } 
    if(email === ""){
        isRegistrationSuccessful = false;
        alert("Please provide an email address");
    }
    if (password === ""){
        isRegistrationSuccessful = false;
        alert("Please provide a password");
    } 
    if (confirmPass === ""){
        isRegistrationSuccessful = false;
        alert("Please enter your password again");
    }
    if(password !== confirmPass){
        alert("Passwords don't match");
    }
    if(isRegistrationSuccessful === true){
        alert("Registration Successful");
    }
   
}
    
 
