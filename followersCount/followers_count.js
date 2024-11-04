let count = 0;
function increaseCount() {
count++;
countDisplay();
checkCountValue();
}

function checkCountValue() {
    if (count === 10) {
        alert ("Su instagram tiene 10 seguidores! Felicitaciones!");
        } else if (count === 20 ) {
        alert ("Su instagram tiene 20 seguidores! Buen trabajo!");
    }  
}

function countDisplay() {
    document.getElementById('countDisplay').innerHTML=count;
}