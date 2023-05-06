const pageOne = document.getElementById("Home");
const pageTwo = document.getElementById("origin");
const pageThree = document.getElementById("rules");
const pageFour = document.getElementById("competitions");

function pageHomeLoad() {
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

function pageOriginLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "block";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

function pageRuleoLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "block";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

function pageCompLoad() {
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "block";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
}

window.onload = function () {
    pageHomeLoad();


}