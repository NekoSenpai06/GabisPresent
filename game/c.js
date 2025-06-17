var Cbedroom = document.getElementById('A');
var Cbathroom = document.getElementById('C');

var CKITCHEN = document.getElementById('KITCHEN');

function rr(i) {
    if(i === 1) {
        Cbedroom.style.display = "block";
        Cbathroom.style.display = "none";
    }
    else if(i === 2) {
        if(tookbath === false) {
            Ctxt.innerHTML = Cmsg[0];
            ACtxt.innerHTML = Cmsg[2];
            tookbath = true;
            CKITCHEN.disabled = false;
        }
        else {
            Ctxt.innerHTML = "I'm done bathing";
        }
    }
    else if(i === 3) {
        Ctxt.innerHTML = Cmsg[1];
    }
}

var ACtxt = document.getElementById('Atext');
var Ctxt = document.getElementById('Ctext');
var Cmsg = ["*/🚿🚿🚿", "*/🪥🪥🪥", "Done. I'm going to eat now."];
var tookbath = false;