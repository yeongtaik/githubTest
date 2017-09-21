function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
function CWE_476() { // NULL_POINTER
    var obj;
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


function checkSNAS() {

    var numArray = [11, 3, 2];
    //numArray.sort();
}


function checkSTCP() {

    if ( typeof xx == 'undefind' ) {

        x = {};
    }
}


function checkIPD() {

    var a = {};

    /*Object.defineProperties(a, 'x', {
        value: 42,
        get: function () {
            return 42 ;
        }
    });*/
}

function checkSNEE1() {

    var x = undefined + 0;
    if ( x == NaN) {
        x = 0;
    }
}

function checkIAL1() {
    var length = 0;
    length = 2;
    array = new Array(length) ;
}


function checkSNAS1() {

    var numArray = [11, 3, 2];
    numArray.sort();
}


function checkSTCP1() {

    if ( typeof xx == 'undefind' ) {

        x = {};
    }
}


function checkIPD1() {

    var a = {};

    Object.defineProperties(a, 'x', {
        value: 42,
        get: function () {
            return 42 ;
        }
    });
}

function checkSNEE2() {

    var x = undefined + 0;
    if ( x == NaN) {
        x = 0;
    }
}

function checkIAL2() {
    var length = 0;
    length = 2;
    array = new Array(length) ;
}


function checkSNAS2() {

    var numArray = [11, 3, 2];
    numArray.sort();
}


function checkSTCP2() {

    if ( typeof xx == 'undefind' ) {

        x = {};
    }
}


function checkIPD2() {

    var a = {};

    Object.defineProperties(a, 'x', {
        value: 42,
        get: function () {
            return 42 ;
        }
    });
}

function checkSNEE3() {

    var x = undefined + 0;
    if ( x == NaN) {
        x = 0;
    }
}

function checkIAL3() {
    var length = 0;
    length = 2;
    array = new Array(length) ;
}


function checkSNAS3() {

    var numArray = [11, 3, 2];
    numArray.sort();
}


function checkSTCP3() {

    if ( typeof xx == 'undefind' ) {

        x = {};
    }
}


function checkIPD3() {

    var a = {};

    Object.defineProperties(a, 'x', {
        value: 42,
        get: function () {
            return 42 ;
        }
    });
}

checkSNEE();
checkIAL();
checkSNAS();
checkSTCP();
checkIPD();
