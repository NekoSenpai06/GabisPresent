var ElivingRoom = document.getElementById('D');
var Ekitchen = document.getElementById('E')

var CEATMEAL = document.getElementById('EAT-MEAL');
var CDRINKWATER = document.getElementById('DRINK-WATER');
var GIFT = document.getElementById('THE-GIFT');

function k(i) {
    if(i === 1) {
        ElivingRoom.style.display = "block";
        Ekitchen.style.display = "none";
    }
    else if(i === 2) {
        if(Eshown === false) {
            cooking();
            setTimeout(() => {
                CEATMEAL.disabled = false;
                CDRINKWATER.disabled = false;
            }, 1000);
        }
        else {
            Etxt.innerHTML = "I'm done cooking.";
        }
        
    }
    else if(i === 3) {
        Etxt.innerHTML = "Nomnomnom";
        DEtxt.innerHTML = "I'm good to go, time to meet my baby. But of course i can't leave without her gift ";
        GIFT.disabled = false;
    }
    else if(i === 4) {
        Etxt.innerHTML = "*/🥛🥤☕";
    }
}

var DEtxt = document.getElementById('Dtext');
var Etxt = document.getElementById('Etext');
var Emsg = ["Eggs and Hotdogs!", "My all time favorite!"];

var Eshown = false;

function cooking() {
    setTimeout(() => {
        Etxt.innerHTML = Emsg[0];
    }, 300);
    
    setTimeout(() => {
        Etxt.innerHTML = Emsg[1];
        Eshown = true;
    }, 2000);
}