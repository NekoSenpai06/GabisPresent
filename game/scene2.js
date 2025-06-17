var song = new Audio('../song.mp3');
song.volume = 0.3;
song.play();

var on = document.getElementById('music-on');
var off = document.getElementById('music-off');

function music(i) {
    if(i === 0) {
        song.pause();
        on.style.display = "block";
        off.style.display = "none";
    }
    else if(i === 1) {
        song.play();
        on.style.display = "none";
        off.style.display = "block";
    }
}