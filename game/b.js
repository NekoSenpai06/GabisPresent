var Bbedroom = document.getElementById('A');
var Bgift = document.getElementById('B');

var BUSRIDE = document.getElementById('BUS-RIDE');

function gift(i) {
    if(i === 1) {
        Bbedroom.style.display = "block";
        Bgift.style.display = "none";
    }
    else if(i === 2) {
        alert('Gift acquired!');
        BUSRIDE.disabled = false;
        ABtxt.innerHTML = "She's probably at the park already."
        Btxt.innerHTML = "She's probably at the park already."
        CBtxt.innerHTML = "She's probably at the park already."
        DBtxt.innerHTML = "She's probably at the park already."
        EBtxt.innerHTML = "She's probably at the park already."
        FBtxt.innerHTML = "She's probably at the park already."
    }
}

var ABtxt = document.getElementById('Atext');
var Btxt = document.getElementById('Btext');
var CBtxt = document.getElementById('Ctext');
var DBtxt = document.getElementById('Dtext');
var EBtxt = document.getElementById('Etext');
var FBtxt = document.getElementById('Ftext');
var msg = "My gift is finally done. Hope she likes it.";
Btxt.innerHTML = msg;