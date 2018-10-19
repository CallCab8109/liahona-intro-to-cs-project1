function onBeginClicked() {
    console.log('Begin button clicked');
    getstate()
}

function initialize() {
    document.getElementById('begin').addEventListener('click', onBeginClicked);
}
function getstate() { 
     var table = document.getElementById('gameBoard');
    console.log(table)
    
}
