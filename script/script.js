function modify_J1(valJ1) {
    var J1 = document.getElementById('J1').value;
    var new_J1 = parseInt(J1,10) + valJ1;
    
    if (new_J1 < 0) {
        new_J1 = 0;
    }
    
    if (valJ1 == 0) {
        new_J1 = 0;
    }
    
    document.getElementById('J1').value = new_J1;
    return new_J1;
}
function modify_J1s(valJ1s) {
    var J1s = document.getElementById('J1s').value;
    var new_J1s = parseInt(J1s,10) + valJ1s;
    
    if (new_J1s < 0) {
        new_J1s = 0;
    }
    
    document.getElementById('J1s').value = new_J1s;
    return new_J1s;
}

function modify_J2(valJ2) {
    var J2 = document.getElementById('J2').value;
    var new_J2 = parseInt(J2,10) + valJ2;
    
    if (new_J2 < 0) {
        new_J2 = 0;
    }
    if (valJ2 == 0) {
        new_J2 = 0;
    }
    
    document.getElementById('J2').value = new_J2;
    return new_J2;
}
function modify_J2s(valJ2s) {
    var J2s = document.getElementById('J2s').value;
    var new_J2s = parseInt(J2s,10) + valJ2s;
    
    if (new_J2s < 0) {
        new_J2s = 0;
    }
    
    document.getElementById('J2s').value = new_J2s;
    return new_J2s;
}


function modify_J3(valJ3) {
    var J3 = document.getElementById('J3').value;
    var new_J3 = parseInt(J3,10) + valJ3;
    
    if (new_J3 < 0) {
        new_J3 = 0;
    }
    if (valJ3 == 0) {
        new_J3 = 0;
    }
    
    document.getElementById('J3').value = new_J3;
    return new_J3;
}
function modify_J3s(valJ3s) {
    var J3s = document.getElementById('J3s').value;
    var new_J3s = parseInt(J3s,10) + valJ3s;
    
    if (new_J3s < 0) {
        new_J3s = 0;
    }
    
    document.getElementById('J3s').value = new_J3s;
    return new_J3s;
}

function modify_J4(valJ4) {
    var J4 = document.getElementById('J4').value;
    var new_J4 = parseInt(J4,10) + valJ4;
    
    if (new_J4 < 0) {
        new_J4 = 0;
    }
    if (valJ4 == 0) {
        new_J4 = 0;
    }
    
    document.getElementById('J4').value = new_J4;
    return new_J4;
}
function modify_J4s(valJ4s) {
    var J4s = document.getElementById('J4s').value;
    var new_J4s = parseInt(J4s,10) + valJ4s;
    
    if (new_J4s < 0) {
        new_J4s = 0;
    }
    
    document.getElementById('J4s').value = new_J4s;
    return new_J4s;
}

function modify_Game(valGame) {
    if (valGame == 0) {
        var new_MJ = 1;
        var new_Game = 5;
        document.getElementById('J1s').value = 0;
        document.getElementById('J2s').value = 0;
        document.getElementById('J3s').value = 0;
        document.getElementById('J4s').value = 0;
    }else {
    var Game = document.getElementById('CARD').value;
    var new_Game = parseInt(Game,10) + valGame;
    
    var MJ = document.getElementById('MJ').value;
    var new_MJ = parseInt(MJ,10) + 1;
    
    if (new_Game == 0) {
        new_Game = 5;
    }
    
    if (new_MJ == 5) {
        new_MJ = 1;
    }
    }
    
    document.getElementById('CARD').value = new_Game;
    document.getElementById('MJ').value = new_MJ;
    return new_Game;
}

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}
