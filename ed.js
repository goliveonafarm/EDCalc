let inputID = null;
let inputIDEth = null;
let ed = 0;
let armorName = null;
let ethValue = 1.0;
let isEthCheckBox = document.getElementById("isEthCheckbox");
let isSup = 0;
let output = null;
let stringifyOutputDefense = ``;
let stringifyOutputEth = ``;

let socketString = "";
let playSoundFalse = "";

let btnItemListIDCounter = 0;
let txtBoxRowsIDCounter = 0;
let buildUniqString = ``;
let buildTradeString = ``;
let tradeList = ``;

let defenseStr = ``;

let lblOutPut = document.getElementById("lblOutPutSellStringID");
let outputTradeTextBox = document.getElementById("outputTradeText");


function clearLblTrade() {
    lblOutPut.innerHTML = ``;
    buildTradeString = ``;
    defenseStr = ``;
}

function setContent() {
    clearLblTrade();
    var x = document.getElementById("uniqContent");
    var y = document.getElementById("baseContent");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        document.getElementById("setContentTextID").innerText = `Uniques`;

    } else {
        x.style.display = "none";
        y.style.display = "block";
        document.getElementById("setContentTextID").innerText = `Base`;
    }
}

function setNewEth(_inputIDEth) {
    inputIDEth = _inputIDEth;
    if (inputIDEth == "flexRadioDefault1") {
        stringifyOutputEth = `\n    Ethereal: true`;
        ethValue = 1.5;
    }
    if (inputIDEth == "flexRadioDefault2") {
        stringifyOutputEth = `\n    Ethereal: false`;
        ethValue = 1.0;
    }
    if (inputIDEth == "flexRadioDefault3") {
        stringifyOutputEth = ``;
        ethValue = 1.0;
    }
    calcDef();
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
        stringifyOutputDefense = `\n  - Defense: ${output}`
        document.getElementById("outputID").innerText = "Defense: " + output;

    }
    setText();
}

function setText() {
    let buildString = `${armorName}:${stringifyOutputDefense}${socketString}${stringifyOutputEth}${playSoundFalse}`;
    document.getElementById("outputText").value = buildString;

}

function copyText() {
    let copiedText = document.getElementById("outputText");
    copiedText.select();
    document.execCommand("copy");

    document.getElementById("btnCopy").innerText = "Copied!"
}

function copyTradeText() {
    let copiedText = document.getElementById("outputTradeText");
    copiedText.select();
    document.execCommand("copy");

    document.getElementById("btnCopyTradeClipboardID").innerText = "Copied!"
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
    document.getElementById("btnCopyTradeClipboardID").innerText = "Copy to clipboard";
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



document.querySelectorAll(".setInputIDClass").forEach(item => {
    item.addEventListener('click', run => {
        setInputID(item.id);
    });
});

document.querySelectorAll(".setEDClass").forEach(item => {
    item.addEventListener('click', run => {
        setED(item.innerHTML);
    });
});

document.querySelectorAll(".setBtnTextToCopyClass").forEach(item => {
    item.addEventListener('click', run => {
        setBtnTextToCopy();
    });
});

document.querySelectorAll(".genSocketStringID").forEach(item => {
    item.addEventListener('click', run => {
        genSocketString();
    });
});

document.querySelectorAll(".playSoundID").forEach(item => {
    item.addEventListener('click', run => {
        playSound();
    });
});

document.querySelectorAll(".setContent").forEach(item => {
    item.addEventListener('click', run => {
        setContent();
    });
});

document.querySelectorAll(".copyTextID").forEach(item => {
    item.addEventListener('click', run => {
        copyText();
    });
});

document.querySelectorAll(".ethRadClass").forEach(item => {
    item.addEventListener('click', run => {
        setNewEth(item.id);
    });
});

document.getElementById("btnCopyTradeClipboardID").addEventListener("click", function () {
    copyTradeText();
});

document.getElementById('btnMoveToTradeID').addEventListener("click", function () {
    tradeList = `${lblOutPut.innerHTML}\n`;
    outputTradeTextBox.value += `${tradeList}`;
});

document.getElementById('btnCopyClearFromClipID').addEventListener("click", function () {
    outputTradeTextBox.value = ``;
});

//The following code is all related to the uniq section of the webpage

setContent();

import uniqs from "./uniqProps.js";


//[array of assasin katar objects]]


function generateUniqString(props, item) {

    if (props.type !== null) {
        buildUniqString += `\n  ${props.type}:\n    `

    }
    if (props.type == null) {
        buildUniqString += `\n  `

    }

    buildUniqString += `${props.attrName}: `;
    buildUniqString += `${props.userValue}`;

    buildTradeString += `/ ${props.attrName} `;
    buildTradeString += ` ${props.userValue} `;

    //Last step for moving information to lbl
    lblOutPut.innerHTML = buildTradeString;
}

let grab = null;
let grab2 = null;

function setOptionTags(classItemID, itemID) {
    clearLblTrade();
    document.getElementById("outputText").value = ``;
    buildUniqString = `${uniqs[classItemID][itemID].base}:\n- Qualities: unique`

    buildTradeString += `${uniqs[classItemID][itemID].name} `;
    let scopeItem = uniqs[classItemID][itemID];
    const deleteTheseElements = document.querySelectorAll(".removableTagsClass");
    for (const elem of deleteTheseElements) {
        elem.remove();
    }

    if (scopeItem.hasOwnProperty('maxDef')) {
        defenseStr = ` Defense ${scopeItem.maxDef} `
    }

    buildTradeString += defenseStr;

    if (scopeItem.hasOwnProperty('maxDef')) {
        buildUniqString += `\n  Defense: ${scopeItem.maxDef}`
    }
   // if (scopeItem.hasOwnProperty('maxED')) {
       // buildUniqString += `\n  Max Damage: ${scopeItem.maxED}`
    //}

    txtBoxRowsIDCounter = 0;
    //alert(`${classItemID} ${itemID} ${uniqs[classItemID][itemID].uniqProps[0].attrName}`);
    for (const props of uniqs[classItemID][itemID].uniqProps) {
        //(1)add all col to this row / create this row first
        const thisRow = document.createElement("div");
        thisRow.classList.add("row");
        thisRow.classList.add("removableTagsClass");

        //(2.1)create property value element and insert info
        const propertyDiv = document.createElement("div");
        propertyDiv.classList.add("col-3");
        const propertyDivText = document.createTextNode(`${props.attrName}`);
        propertyDiv.appendChild(propertyDivText);
        //(2.2)add prop col to row
        thisRow.appendChild(propertyDiv);

        //(3.1)create min value element and insert info
        const minDiv = document.createElement("div")
        minDiv.classList.add("col-2");
        const minDivText = document.createTextNode(`Min: ${props.min}`)
        minDiv.appendChild(minDivText);
        //(3.2) add min value col to row
        thisRow.appendChild(minDiv);

        //(4.1)create max value element and insert info
        const maxDiv = document.createElement("div")
        maxDiv.classList.add("col-2");
        const maxDivText = document.createTextNode(`Max: ${props.max}`)
        maxDiv.appendChild(maxDivText);
        //(4.2) add max value col to row
        thisRow.appendChild(maxDiv);

        //(5.1)create form
        const txtBoxInputControl = document.createElement("textarea");
        txtBoxInputControl.classList.add("col-3");
        txtBoxInputControl.setAttribute("type", "number");
        txtBoxInputControl.setAttribute("rows", 1);
        txtBoxInputControl.setAttribute('id', `p` + txtBoxRowsIDCounter);

        txtBoxInputControl.innerHTML = `${props.userValue}`;
        //txtBoxInputControl.placeholder = `${props.userValue}`
        //pullUserValue.innerHTML = "we changed it";
        //(5.2)add on keypress event -> this is our main driver basically
        txtBoxInputControl.addEventListener("keyup", function () {
            //console.log(`${document.getElementById(this.id)}`);

            let e = document.querySelector(`#${this.id}`).value;
            props.userValue = e;
            setOptionTags(grab, grab2);
            let g = document.querySelector(`#${this.id}`);
            g.setSelectionRange(1, 1);
            g.focus();
            console.log(`Text box input key press ${e}`) //Debug line

            //generateUniqString(props,uniqs[classItemID][itemID]);
        })
        //(5.3)add to row
        thisRow.appendChild(txtBoxInputControl);
        txtBoxRowsIDCounter++; // We have to make this run last because get element by id is tied to id of row
        //Final Step - Add our row to the insertRowHere section of HTML doc
        document.getElementById("insertRowsHere").appendChild(thisRow);

        
        generateUniqString(props, uniqs[classItemID][itemID]);


    }

    document.getElementById("outputText").value = buildUniqString;

}

function genItemListBtn(classItemID) {
    //console.log(`genitemlist: ${test[0].itemClass}`)
    //console.log(`${uniqs[classItemID]} ClassItemID in genItemBTN():${classItemID}`) 
    const deleteTheseElements = document.querySelectorAll(".removableClass");
    for (const elem of deleteTheseElements) {
        elem.remove();
    }
    btnItemListIDCounter = 0;
    for (const item of uniqs[classItemID]) {

        console.log(item.name)

        const liItem = document.createElement("li");
        const liItemTextNode = document.createTextNode(item.name);
        liItem.appendChild(liItemTextNode);
        liItem.classList.add("dropdown-item");
        liItem.classList.add("removableClass")
        liItem.setAttribute('id', btnItemListIDCounter++);
        liItem.addEventListener("click", function () {
            document.getElementById("chooseItemTagID").innerText = item.name;
            grab = classItemID;
            grab2 = this.id;
            setOptionTags(classItemID, this.id);
        })
        document.getElementById("ulItemListID").appendChild(liItem);

    }
}
let btnItemClassIDCounter = 0;


function initilizer() {
    clearLblTrade();
    for (const value of uniqs) {

        console.log(value.itemClass);

        const liItem = document.createElement("li");
        const liItemTextNode = document.createTextNode(value.itemClass);
        liItem.appendChild(liItemTextNode);
        liItem.classList.add("dropdown-item");
        liItem.setAttribute('id', btnItemClassIDCounter++);
        liItem.addEventListener("click", function () {
            document.getElementById("chooseClass").innerText = value.itemClass;
            document.getElementById("chooseItemTagID").innerText = `Choose item`;
            clearLblTrade();
            genItemListBtn(this.id);
            //console.log(`ID: ${this.id} ${value[0].name} valueThis.ID:${value[this.id].itemClass}`);
        })
        document.getElementById("ulClassListID").appendChild(liItem);
        //generate itemClass buttons
        //add listener
        //add class == itemClass
        for (const items of value) {
            console.log(items.id);

            for (const props of items.uniqProps) {
                console.log(props.attrName);
            }
        }
    }

}

initilizer();


