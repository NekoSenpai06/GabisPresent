var Abedroom = document.getElementById('A');
var Agift = document.getElementById('B');
var Abathroom = document.getElementById('C');
var AlivingRoom = document.getElementById('D');

var AKITCHEN = document.getElementById('KITCHEN');
var ATHEGIFT = document.getElementById('THE-GIFT');
var ABUSRIDE = document.getElementById('BUS-RIDE');
var AEATMEAL = document.getElementById('EAT-MEAL');
var ADRINKWATER = document.getElementById('DRINK-WATER');
var APARK = document.getElementById('GOTO-PARK');
var AGABI = document.getElementById('icon-gabi');

function br(i) {
    if(i === 1) {
        Agift.style.display = "block";
        Abedroom.style.display = "none";
    }
    else if(i === 2) {
        Abathroom.style.display = "block";
        Abedroom.style.display = "none";
    }
    else if(i === 3) {
        AlivingRoom.style.display = "block";
        Abedroom.style.display = "none";
    }
}

var Abtns = document.querySelectorAll('.btns button');
var Atxt = document.getElementById('Atext');
var Amsg = ["*/yawns", "Today is the day!", "I'm so excited to see her.", "Alright, time to get ready.", "I'll take a bath first."];

Abtns.forEach(i => {
    i.disabled = true;
});

setTimeout(() => {
    Atxt.innerHTML = Amsg[0];
}, 1000);

setTimeout(() => {
    Atxt.innerHTML = Amsg[1];
}, 4000);

setTimeout(() => {
    Atxt.innerHTML = Amsg[2];
}, 7000);

setTimeout(() => {
    Atxt.innerHTML = Amsg[3];
}, 10000);

setTimeout(() => {
    Atxt.innerHTML = Amsg[4];
}, 13000);

setTimeout(() => {
    Abtns.forEach(i => {
    i.disabled = false;
});
    ATHEGIFT.disabled = true;
    ABUSRIDE.disabled = true;
    AKITCHEN.disabled = true;
    AEATMEAL.disabled = true;
    ADRINKWATER.disabled = true;
    APARK.disabled = true;
    AGABI.style.display = "none";
}, 15000);