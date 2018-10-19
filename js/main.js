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
   var rows = table.getElementsByTagName("tr");
    console.log(rows)
    var state = [];
    for (var y=0; y<rows.length; y += 1) {
        var row = rows [y];
        var cells = row.getElementsByTagName("td");
        for (var x=0; x<cells.length; x += 1) {
            var cell = cells [x];
            var alive = cell.classList.contains('alive');
            console.log(alive)
        }
    }
}
