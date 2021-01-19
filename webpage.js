
var logForm = document.getElementById("logForm");
var regiForm = document.getElementById("regiForm");
var s = document.getElementById("sent");
var m = document.getElementById("modals");
var logIn = document.getElementById("sIn");
var signUp = document.getElementById("sUp");


function signin() {
    regiForm.style.display = "none";
    logForm.style.display = "block";
    signUp.classList.remove("active");
    logIn.classList.add("active");
   
}

function signup(){
    regiForm.style.display = "block";
    logForm.style.display = "none";
    
    signUp.classList.add("active");
    logIn.classList.remove("active");
  
    
}

var userLogData = document.getElementById("userLog");
var passLogData = document.getElementById("passLog");

var logbtn = document.getElementById("loginButton");
var signbtn = document.getElementById("signupButton");



logbtn.addEventListener("click", logSubmit); 


function logSubmit(){

    // ===================username======================
    if(userLogData.value == "happy"){
        userLogData.style.borderColor = "green";
        userLogData.style.backgroundColor = "rgb(226,255,235)";
        // userLogData.style.boxShadow = " 2px 2px 15px rgb(60, 255, 0) ";
        
        
    }
    else if(userLogData.value !== "happy"){
        userLogData.style.borderColor = "red";
        userLogData.style.backgroundColor = "rgb(255,185,185)";
        // userLogData.style.boxShadow = " 2px 1px 15px red ";
        
    }

    // =====================password=====================
    if(passLogData.value == "happy"){
        passLogData.style.borderColor = "green";
        passLogData.style.backgroundColor = "rgb(226,255,235)";
        // passLogData.style.boxShadow = " 2px 2px 15px rgb(60, 255, 0) ";
        
        
    }
    else if(passLogData.value !== "happy"){
        passLogData.style.borderColor = "red";
        passLogData.style.backgroundColor = "rgb(255,185,185)";
        // passLogData.style.boxShadow = " 2px 1px 15px red ";
        
    }
    
    
}

var mailSignData = document.getElementById("mailSign");
var userSignData = document.getElementById("userSign");
var passSignData = document.getElementById("passSign");

signbtn.addEventListener("click", signSubmit);

function signSubmit(){

    // ======================e-mail======================
    if(mailSignData.value == "happy112@gmail.com"){
        mailSignData.style.borderColor = "green";
        mailSignData.style.backgroundColor = "rgb(226,255,235)";
        // mailSignData.style.boxShadow = " 2px 2px 15px rgb(60, 255, 0) ";
    
        
    }
    else if(mailSignData.value !== "happy112@gmail.com"){
        mailSignData.style.borderColor = "red";
        mailSignData.style.backgroundColor = "rgb(255,185,185)";
        // mailSignData.style.boxShadow = " 2px 1px 15px red ";
    
    }

    // ================username==================
    if(userSignData.value.length >= 4){
        userSignData.style.borderColor = "green";
        userSignData.style.backgroundColor = "rgb(226,255,235)";
        // userSignData.style.boxShadow = " 2px 2px 15px rgb(60, 255, 0) ";
        
        
    }
    else if(userSignData.value.length < 4 ){
        alert("password must have more that 12 charecters.");
        userSignData.style.borderColor = "red";
        userSignData.style.backgroundColor = "rgb(255,185,185)";
        // userSignData.style.boxShadow = " 2px 1px 15px red ";

    }

    // =====================password=====================
    if(passSignData.value.length >= 6){
        passSignData.style.borderColor = "green";
        passSignData.style.backgroundColor = "rgb(226,255,235)";
        // passSignData.style.boxShadow = " 2px 2px 15px rgb(60, 255, 0) ";
        
        
    }
    else if(passLogData.value.length < 6){
        alert("password must have more that 12 charecters.");
        passSignData.style.borderColor = "red";
        passSignData.style.backgroundColor = "rgb(255,185,185)";
        
        // passSignData.style.boxShadow = " 2px 1px 15px red ";

    }

    // if(passSignData.value == "happy"){
    //     passSignData.style.borderColor = "green";
    //     passSignData.style.backgroundColor = "rgb(226,255,235)";
    //     // passSignData.style.boxShadow = " 2px 2px 15px rgb(60, 255, 0) ";

        
    // }
    // else if(passLogData.value !== "happy"){
    //     passSignData.style.borderColor = "red";
    //     passSignData.style.backgroundColor = "rgb(255,185,185)";
    //     // passSignData.style.boxShadow = " 2px 1px 15px red ";

    // }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navigation").style.top = "0";
  } else {
    document.querySelector("navigation").style.top = "-50px";
  }
}