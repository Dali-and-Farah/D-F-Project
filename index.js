var stickman = document.getElementById("stickman");
var obstacle = document.getElementById("obstacle");

stickman.addEventListener("click", function() {
    jump(stickman);
});

var s = stickman.offsetTop;
console.log(s);

function jump(stickman) {
    if (stickman.style.animation !== "jump 0.5s ease") {
        stickman.style.animation = "jump 0.55s ease";    
        setTimeout(function () {
            stickman.style.animation = "";
        }, 500);
    }
}


var num = setInterval(function() {
    var stic = stickman;
    var obss = obstacle;

    var stickmanRect = stic.getBoundingClientRect();
    var obstacleRect = obss.getBoundingClientRect();

    if (
        stickmanRect.right > obstacleRect.left &&
        stickmanRect.left < obstacleRect.right &&
        stickmanRect.bottom > obstacleRect.top
    ) {
        clearInterval(num); 
        alert("You lost! Refresh and start again.");
    }
}, 10);






