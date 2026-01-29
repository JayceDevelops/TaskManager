function passwordChecker(){
    const password = document.getElementById("thePassword").value;

    // Regex For Digit (0-9)
    let regex = /\d/;

    // Used For Checking For Special Characters In Password
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?~]/;

    if (password.length > 0){

        // Length Check
        if (password.length >= 8){
            document.getElementById("atLeast8").style.color = "lightgreen";
        }
        else {
            document.getElementById("atLeast8").style.color = "red";
        }

        // Digit Check
        if (regex.test(password)){
            document.getElementById("conDigit").style.color = "lightgreen";
        } else {document.getElementById("conDigit").style.color = "red";}

        // Special Symbol Check 
        if (specialChars.test(password)){
            document.getElementById("conSymbol").style.color = "lightgreen";
        } else {document.getElementById("conSymbol").style.color = "red";}
    } 
    else {
        document.getElementById("atLeast8").style.color = "black";
        document.getElementById("conDigit").style.color = "black";
        document.getElementById("conSymbol").style.color = "black";
    }
}

function submitData(){
    window.location.href = "/TaskManager/index.html";
}