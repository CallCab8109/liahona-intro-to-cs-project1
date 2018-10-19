function onBeginClicked() {
    console.log('Begin button clicked');
}

function initialize() {
    document.getElementById('begin').addEventListener('click', onBeginClicked);
}
function getstate() { 
     var table = document.getElementById('gameBoard');
    console.log(table)
    
}
