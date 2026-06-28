function showLastUpdated(){
const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  document.getElementById("result").textContent = "Page last updated on: " + formattedDate;

}

window.addEventListener("load",showLastUpdated);

// btnGreet.addEventListener("click",function(){
//     greetUser();
// });


function generateOTP(){
    let txtotp = document.getElementById("txtotp");
    let rnd = Math.floor(1000 + Math.random() * 9999);
    txtotp.value = rnd;
}

//btnGenerateOtp.addEventListener("click",generateOTP);

// 1. Add two numbers
function addTwoNumbers(a, b) {
    return a + b;
}

// 2. Calculate the hypotenuse of a triangle
function calculateHypotenuse(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

// 3. Find the maximum value
function findMaximum(x, y) {
    return Math.max(x, y);
}

// 4. Multiply three numbers
function multiplyThreeNumbers(a, b, c) {
    return a * b * c;
}

// 5. Calculate the diameter of a circle
function calculateDiameter(radius) {
    return 2 * radius;
}

// 6. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

// 7. Validate phone number (basic pattern)
function validatePhoneNumber(phone) {
    const pattern = /^[0-9]{7,15}$/; // digits only, length 7–15
    return pattern.test(phone);
}

// 8. Validate NIC (example: Mauritius NIC format)
function validateNIC(nic) {
    const pattern = /^[A-Z0-9]{14}$/; // adjust regex to actual NIC rules
    return pattern.test(nic);

}

function error(x, y, msg){
    x.textContent = msg;
        alertmsg.textContent = msg;
        x.style.color = "red";
        y.src = "img/cross.gif";
       
        alertBox.classList.add("alert", "alert-danger", "d-block");
        alertBox.classList.remove("alert-success", "d-none");
        return false;

}

function success(x, y, msg){
 x.textContent = "";
  alertmsg.textContent = msg;
y.src = "img/tick.gif";
alertBox.classList.add("alert", "alert-success", "d-block");
alertBox.classList.remove("alert-danger", "d-none");
        return true;
}

const emailfield = document.getElementById("txtemail");
const emailmsg = document.getElementById("emailmsg");
const iemail = document.getElementById("iemail");
const nicfield = document.getElementById("txtnic");
const nicmsg = document.getElementById("nicmsg");
const inic = document.getElementById("inic");
const alertBox = document.getElementById("alertBox");
const alertmsg = document.getElementById("alertmsg");


function validateEmail(){
    const pattern = /^[\w\._-]+@[\w\.-]+\.[a-zA-Z]{2,7}$/;
    let email = document.getElementById("txtemail").value;
    if (pattern.test(email) == false){
         emailfield.focus();
        error(emailmsg, iemail, "Invald email format");
    }
    else{
          success(emailmsg, iemail, "Email valid");     
    }
}

emailfield.addEventListener("blur", validateEmail);

function validateNic(){
    const pattern = /^[a-zA-Z0-9]{14}$/;
    let nic = document.getElementById("txtnic").value;
    if (pattern.test(nic) == false){
        error(nicmsg, inic, "Invald nic");
    }
    else{
          success(nicmsg, inic, "Nic valid");     
    }
}

nicfield.addEventListener("blur", validateNic);


// 9. Calculate goal difference
function calculateGoalDifference(goalsFor, goalsAgainst) {
    return goalsFor - goalsAgainst;
}

// 10. Generate random questions (simple example)
function generateRandomQuestion() {
    const questions = [
        "What is JavaScript?",
        "Explain CSS selectors.",
        "Define responsive design.",
        "What is a database schema?"
    ];
    const index = Math.floor(Math.random() * questions.length);
    return questions[index];
}

// 11. Display when the page was last updated
function displayLastUpdated() {
    alert("This page was last updated on: " + document.lastModified);
}

