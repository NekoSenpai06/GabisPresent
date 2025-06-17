var Dbedroom = document.getElementById('A');
var Dout = document.getElementById('F');
var Dkitchen = document.getElementById('E');
var DlivingRoom = document.getElementById('D');

function lr(i) {
    if(i === 1) {
        Dout.style.display = "block";
        DlivingRoom.style.display = "none";
    }
    else if(i === 2) {
        Dkitchen.style.display = "block";
        DlivingRoom.style.display = "none";
    }
    else if(i === 3) {
        Dbedroom.style.display = "block";
        DlivingRoom.style.display = "none";
    }
}