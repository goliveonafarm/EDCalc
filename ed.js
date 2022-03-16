let inputID = null;
let ed = null;
let armorName = null;
let output = null;
let ethValue = 1.0;
let isEthCheckBox = document.getElementById("isEthCheckbox");
let isSup = 1;

function setEth() {
    if (isEthCheckBox.checked == true) {
        ethValue = 1.5;
    }
    else {
        ethValue = 1.0;
    }
    calcDef()
}

function setInputID(_inputID) {
    inputID = _inputID;

    armorName = document.getElementById(inputID).innerHTML;
    document.getElementById("chooseArm").innerText = armorName;

    calcDef()
}

function setED(_ed) {
    ed = _ed;

    if (ed == 0) {
        document.getElementById("edTag").innerText = "Max def (non ED)";
        isSup = 0;
    }
    else {
        isSup = 1;
        (document.getElementById("edTag").innerText = ed + "% Enhanced Defense")
    }
    calcDef()
}

function calcDef() {

    if (ed !== null && inputID !== null) {
        output = Math.floor((((parseFloat(inputID) + isSup) * ethValue) * (1 + (parseFloat(ed) * 0.01))));
        document.getElementById("outputID").innerText = "Defense: " + output;
        
    }
}