let inputID = null;
let ed = null;
let armorName = null;
let output = null;

function setInputID(_inputID) {
    inputID = _inputID;

    armorName = document.getElementById(inputID).innerHTML;
    document.getElementById("chooseArm").innerText = armorName;
    
    calcDef()
}

function setED(_ed) {
    ed = _ed;

    if(ed==0){
    document.getElementById("edTag").innerText = "Max def (non ED)";
    }
    else
    {(document.getElementById("edTag").innerText = ed + "% Enhanced Defense")};
    calcDef()
}

function calcDef() {
    if (ed == "0") {
        document.getElementById("outputID").innerText = "Defense: " + inputID;
    }
    else if (ed !== null && inputID !== null) {
        output = Math.floor(((parseFloat(inputID) + 1) * (1 + (parseFloat(ed) * 0.01))));
        document.getElementById("outputID").innerText = "Defense: " + output;

    }
};