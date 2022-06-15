const newRegister = {
    name :"default",
    collageName :"default",
    mobileNumber :"default",
    email :"default",
    gender:"default",
    hobies :"default",
    dateofBirt:"default",
    state :"default",
}
var fullName,mobile,email,collageName,hobies,gender,state;

function validateRegister(){
    fullName = document.getElementById('Name').value;
    mobile = document.getElementById('mobilenum').value;
     email = document.getElementById('email').value;
    // collageName = document.getElementById('collage').value;
    // hobies = document.getElementById('hobies').value;
    // gender = document.getElementById('gender').value;
    // state = document.getElementById('city').value;

    if(fullName == "" && fullName.length < 4){
        console.log("enter a valid name")
    }
    var regexforMobile = /^[7-9][0-9]{9}$/;
    if(regexforMobile.test(mobile) == false){
        console.log("err mobile number")
    }
    var regexforEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regexforEmail.test(email) == false){
        console.log("err email")
    }
    if(fullName == ""){
        console.log("name cannot be empty")
    }



    
    
}