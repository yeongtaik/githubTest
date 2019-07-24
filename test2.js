function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
function CWE_476() { // NULL_POINTER
    var y = obj.x;
    console.log(y);
}

function checkSNEE() {
    var x = undefined + 0;
    if ( x == NaN) {
        x = 0;
    }
}

function checkIAL() {
    var length = 0;
    length = 2;
    array = new Array(length) ;
}




checkSNEE();
checkIAL();
checkSNAS();
checkSTCP();
checkIPD();
