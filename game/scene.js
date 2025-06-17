var loop = setInterval(run, 40);
var text = document.getElementById('text');
var i = 0;
var x = 0;
var next;

var msg = ["June 17, 9:30 PM", "I was busy working on...", "something...", "After a few hours, I finished it.", "I was very happy with how it turned out.", "“I hope she likes it...” I whispered to myself with a smile.", "After that night, I immediately went to sleep.",".."];

function run() {
    text.innerHTML += msg[x][i++];
    
    if(text.innerHTML.length === msg[x].length) {
        clearInterval(loop);
        i = 0;
        x++;
    }
    
    else if(x === 7) {
        next = location.href = "scene2.html"
    }
}

function func() {
    text.innerHTML = "";
    loop = setInterval(run, 50);
}
