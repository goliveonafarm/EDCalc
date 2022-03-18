let inputID = null;
let ed = 0;
let armorName = null;
let ethValue = 1.0;
let isEthCheckBox = document.getElementById("isEthCheckbox");
let isSup = 0;
let output = null;

let socketString = "";
let playSoundFalse = "";


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
        document.getElementById("edTag").innerText = "Max defense - non ED%";
        isSup = 0;
    }
    else {
        isSup = 1;
        (document.getElementById("edTag").innerText = ed + "% Enhanced Defense")
    }
    calcDef()
}

function calcDef() {

    if (inputID !== null) {
        output = Math.floor((((parseFloat(inputID) + isSup) * ethValue) * (1 + (parseFloat(ed) * 0.01))));
        document.getElementById("outputID").innerText = "Defense: " + output;

    }
    setText();
}

function setText() {
    let buildString = `${armorName}:
  - Defense: ${output}${socketString}
    Ethereal: ${isEthCheckBox.checked}${playSoundFalse}`;
    document.getElementById("outputText").value = buildString;

}

function copyText() {
    let copiedText = document.getElementById("outputText");
    copiedText.select();
    document.execCommand("copy");

    document.getElementById("btnCopy").innerText = "Copied!"
}

function genSocketString() {
    socketString = "";

    let btnCheck0 = document.getElementById("0osCheckbox");
    let btnCheck2 = document.getElementById("2osCheckbox");
    let btnCheck3 = document.getElementById("3osCheckbox");
    let btnCheck4 = document.getElementById("4osCheckbox");

    let flag = false;

    let arr = [];

    if (btnCheck0.checked == true) {
        flag = true;
        arr.push("0");
    }
    if (btnCheck2.checked == true) {
        if (flag == true) {
            arr.push(", ");
        }
        flag = true;
        arr.push("2");
    }
    if (btnCheck3.checked == true) {
        if (flag == true) {
            arr.push(", ");
        }
        flag = true;
        arr.push("3");
    }
    if (btnCheck4.checked == true) {
        if (flag == true) {
            arr.push(", ");
        }
        flag = true;
        arr.push("4");
    }

    socketString = socketString.concat(...arr);
    socketString = `
    Sockets: [${socketString}]`;

    if (flag == false) {
        socketString = ``;
    }

    setText();
}

function setBtnTextToCopy() {
    document.getElementById("btnCopy").innerText = "Copy to clipboard";
}

function playSound() {
    if (document.getElementById("playSoundCheckBox").checked == true) {
        playSoundFalse = `\n    PlaySoundOnDrop: false`
    }
    else {
        playSoundFalse = ``;
    }

    setText();
}