var Gbus = document.getElementById('G');
var Gpark = document.getElementById('H');

var gab = document.getElementById('icon-gabi');
var HGtxt = document.getElementById('Htext');

function bus() {
    Gbus.style.display = "none";
    Gpark.style.display = "block";
    
    setTimeout(() => {
        HGtxt.innerHTML = "Yuchi: Where is she...";
    }, 3000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi: Bao!!!";
        gab.style.display = "inline";
    }, 6000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Yuchi: Baby!!";
    }, 8000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi: I missed you, baobei!";
    }, 11000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Yuchi: I missed you more my birthday girl.";
    }, 14000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi: Oh yeah right it's my birthday.";
    }, 18000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Yuchi: Mhm, and because of that..";
    }, 22000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Yuchi: I have something for you.";
    }, 25000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi: WAIT WAIT WAIT WHAT!?";
    }, 29000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi: A GIFT!?";
    }, 34000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi: REALLY!?";
    }, 37000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi: WHAT IS IT!?";
    }, 39000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Yuchi: Here comes...";
    }, 42000);
    
    setTimeout(() => {
        HGtxt.innerHTML = "Gabi's Present";
    }, 45000);
    
    setTimeout(() => {
        location.href = "present.html";
    }, 47000);
}