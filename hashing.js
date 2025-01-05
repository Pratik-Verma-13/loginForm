function saltGenerator(){
    let noOfCharacters = Math.floor(Math.random()*3);
    noOfCharacters += 3;
    let salt = "";
    for(let i = 0; i<noOfCharacters; i++){
        let randomCharacter =  String.fromCharCode(Math.floor(Math.random()*95) + 32);
        salt += randomCharacter;
    }
    return salt;
}

function hashingAlgo(totalPassword){
    let passLength = totalPassword.length;
    let newPassword = "";
    for(let x of totalPassword){
        let charCode = x.charCodeAt(0);
        charCode = Math.floor((charCode+(passLength*3.5))*Math.sqrt(passLength));
        charCode = charCode%127;
        if(charCode < 33){
            charCode += 33;
        }
        newPassword += String.fromCharCode(charCode);
    }
    return newPassword;
}

const salt = saltGenerator();
const givenPassword =  document.getElementById("given-password").value;
const userName = document.getElementById("given-user-name");
let newPassword = hashingAlgo(salt + givenPassword);

function signUp(){
    window.location.href = "login.html";
}

const loginPassword = document.getElementById("login-password").value;
let newLoginPassword  = hashingAlgo(salt + loginPassword);
const loginName = document.getElementById("login-user-name").value;

function login(){
    if(newPassword == newLoginPassword){
        document.getElementById("welcome-msg").innerHTML = "You've been successfully logged in";
    }else{
        document.getElementById("welcome-msg").innerHTML = "Sorry! incorrect credentials";
    }
    document.getElementById("form-div").style.backgroundColor =  "blue";
}



