var FlivingRoom = document.getElementById('D');
var Fout = document.getElementById('F');
var Fbus = document.getElementById('G');

var Fpark = document.getElementById('GOTO-PARK');

function house(i) {
    if(i === 1) {
        FlivingRoom.style.display = "block";
        Fout.style.display = "none";
    }
    else if(i === 2) {
        Fbus.style.display = "block";
        Fout.style.display = "none";
        alert("15 minutes later");
        setTimeout(() => {
            GFtxt.innerHTML = "I'm nervous, what if she doesn't like my gift?";
        }, 5000);
        
        setTimeout(() => {
            GFtxt.innerHTML = "Oh well, at least we're together on her birthday.";
        }, 10000);
        
        setTimeout(() => {
            GFtxt.innerHTML = "I miss her.";
        }, 15000);
        
        setTimeout(() => {
            GFtxt.innerHTML = "...";
        }, 18000);
        
        setTimeout(() => {
            alert('Destination reached');
            run();
        }, 22000);
    }
}

var GFtxt = document.getElementById('Gtext');

function run() {
    Fpark.disabled = false;
}