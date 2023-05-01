var userName = prompt("Hello There!, Before you continute, I am going to need you name. Please Input your name!");
var userFeeling = prompt("So " + userName + " how are your feeling?");
var companyName = ("Jawad Safi's Enterprise");



var todayDate = new Date();
var currentTime = (todayDate.getHours() + ":" + todayDate.getMinutes());


var months = ["January ", "Febuary ", "March ", "April ", "May ", "June ", "July", "August ", "September ", "October ", "November ", "December "];

var introDate = ("<h3>Today is " + currentTime + " on " + todayDate.getDay() + ", " + todayDate.getDate() + " " + months[todayDate.getMonth()] + ", " + todayDate.getFullYear() + "<br>");
var introWelcome = (companyName + " weclome you, " + userName + "! <br> We are glad you are doing " + userFeeling + "!");


function intro() {
    document.getElementById('introDate').innerHTML = introDate;
    document.getElementById('introWelcome').innerHTML = introWelcome;
}



function newsletterContact() {
    var userEmail = prompt("Please input you email for Monthly Updates!");
    alert("Thanks for Signing under that " + userEmail + ". We will be in contact");
}

function phonenumberContact() {
    var userPhoneNum = prompt("Please input for Annoying SMS");
    alert("Thanks for Signing under that " + userPhoneNum + " We will be in contact");
}

function buildingPriceAdd() {
    var buildingPrice = prompt("Please input the budget for your buildings");
    var totalPrice = 200000 + buildingPrice; //200000 is Commision
    alert("Your Estimated Price is " + totalPrice);
}

function buildingPaint() {
    var paintBudget = prompt("Please input your paint budget for your buildings");
    var totalPricePaint = 1000 + paintBudget; //200000 is Commision
    alert("Your Estimated Paint Price is : " + totalPricePaint);
}

function buildingDemo() {
    var priceDemo = prompt("Please input your Demo budget for your buildings");
    var totalPriceDemo = 1348 + priceDemo ; //200000 is Commision
    alert("Your Estimated Demo Price is : " + totalPriceDemo);
}