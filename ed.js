import uniqs from "./uniqProps.js";
let scopeItem = [];
let inputID = null;
let inputIDEth = null;
let ed = 0;
let armorName = null;
let ethValue = 1.0;
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
let newSocketTracker = 0;
let newEthTracker = ``;
let tradeList = ``;
let defenseStr = ``;
let btnItemClassIDCounter = 0;
let firstSymbolInTrade = ``;
let newSocketString = ``;
let lblOutPut = document.getElementById("lblOutPutSellStringID");
let outputTradeTextBox = document.getElementById("outputTradeText");
let btnSortTradeThreadID = document.getElementById("btnSortTradeThreadID");
let arrRadSocketBtns = document.querySelectorAll('.classSocketQuery');
let arrRadEthBtns = document.querySelectorAll('.classEthQuery');

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
    let tempEthString = (ethValue == 1.5) ? `Eth ` : ``;
    if (newSocketString === ``) {
        newSocketString = `0 OS `
    }
    lblOutPut.innerHTML = `${newSocketString}${tempEthString}${armorName} - ${output} Defense`;
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
    newSocketString = "";
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
    let tempTune = ``;
    if (flag == false) {
        socketString = ``;
        tempTune = `0`;
    }
    newSocketString += `${tempTune}${newSocketString.concat(...arr)} OS `

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

function generateUniqString(props) {
    if (props.loot) {
        if (props.type !== null) {
            buildUniqString += `\n  ${props.type}:\n    `
        }
        if (props.type == null) {
            buildUniqString += `\n  `
        }
        buildUniqString += `${props.attrName}: `;
        buildUniqString += `${props.userValue}`;
    }

    buildTradeString += `${firstSymbolInTrade} ${props.attrName} `;
    buildTradeString += ` ${props.userValue} `;

    if (firstSymbolInTrade == ``) {
        firstSymbolInTrade = `/`
    }

    //Last step for moving information to lbl
    lblOutPut.innerHTML = buildTradeString;
}

//its sloppy but using these vars for recursion to help clear fields when clicking buttons
let grab = null;
let grab2 = null;
let grab3 = null;

function setOptionTags(classItemID, itemID) {
    clearLblTrade();
    document.getElementById("outputText").value = ``;
    //Item name declared here into string
    buildUniqString = `${uniqs[classItemID][itemID].base}:\n- Qualities: unique`

    //come back - add ethereal to uniq string
    buildTradeString += `${uniqs[classItemID][itemID].name} - `;
    //come back - add ethereal to trade string
    //come back - add sockets to trade string
    if (newSocketTracker !== 0) {
        buildTradeString += `${newSocketTracker} Socket /`;
        buildUniqString += `\n  Sockets: [${newSocketTracker}]`;
    }
    let ethBaseMultiplier = 1.0;
    if (newEthTracker === `Ethereal`) {
        buildTradeString += ` Ethereal /`;
        buildUniqString += `\n  Ethereal: true`;
        ethBaseMultiplier = 1.5
    }
    console.log(buildTradeString)
    scopeItem = uniqs[classItemID][itemID];
    const deleteTheseElements = document.querySelectorAll(".removableTagsClass");
    for (const elem of deleteTheseElements) {
        elem.remove();
    }

    let myNum = ((parseFloat(scopeItem.baseDef * ethBaseMultiplier) + 1) * ((parseFloat(scopeItem.ed) + 100) / 100));
    myNum = Math.floor(myNum);
    console.log(``)
    console.log(`line 316: scopeItem.ed: ${scopeItem.ed} scopeItem.BaseDef${scopeItem.baseDef} myNum: ${myNum}`);
    //Defense is controlled here

    let addThisDef = 0.0;
    if (scopeItem.hasOwnProperty('addDef')) {
        console.log(`hit: scopeItem.addDef = ${scopeItem.addDef}`);
        addThisDef = parseFloat(scopeItem.addDef);
    }
    if (scopeItem.ed !== 0) {
        if (scopeItem.hasOwnProperty('baseDef')) {
            defenseStr = ` Defense ${parseFloat(myNum) + addThisDef} /`
        }

        buildTradeString += defenseStr;

        if (scopeItem.hasOwnProperty('baseDef')) {
            buildUniqString += `\n  Defense: ${parseFloat(myNum) + addThisDef}`
        }
    }
    console.log(uniqs);
    txtBoxRowsIDCounter = 0;

    console.log(scopeItem.uniqProps);
    if (scopeItem.uniqProps === null) return lblOutPut.innerHTML = scopeItem.name;

    for (const props of uniqs[classItemID][itemID].uniqProps) {
        if (props === null) return;
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

        if (props.attrName == 'Defense') {
            scopeItem.addDef = parseFloat(props.userValue);
        }

        if (props.attrName == 'Enhanced Defense %') {
            scopeItem.ed = props.max;
            console.log(`Line 352: ${scopeItem.ed} selelected def: ${scopeItem.selectedDef} base def: ${scopeItem.baseDef}`); //Come here
            scopeItem.selectedDef = Math.floor(((scopeItem.baseDef + 1) * ((100 + scopeItem.ed) / 10)) / 10);

            txtBoxInputControl.addEventListener("keyup", function () {
                let e = document.querySelector(`#${this.id}`).value;
                scopeItem.ed = e;
                //scopeItem.selectedDef
                let v = 0;
                v = ((parseFloat(scopeItem.baseDef) + 1) * ((parseFloat(scopeItem.ed) + 100) / 100));
                scopeItem.selectedDef = Math.floor(v);
                console.log(`V:${v}`);
                let g = document.querySelector(`#${this.id}`);
                g.setSelectionRange(3, 3);
                g.focus();
                console.log(`Line 348: scopeItem base def: ${scopeItem.baseDef} selected Def: ${scopeItem.selectedDef} scopeitem.ed: ${scopeItem.ed}E: ${e}`);
            })
        }
        //(5.2)add on keypress event -> this is our main driver basically
        txtBoxInputControl.addEventListener("keyup", function () {
            let e = document.querySelector(`#${this.id}`).value;
            props.userValue = e;
            setOptionTags(grab, grab2);
            let g = document.querySelector(`#${this.id}`);
            g.setSelectionRange(3, 3);
            g.focus();
        })
        //(5.3)add to row
        thisRow.appendChild(txtBoxInputControl);
        txtBoxRowsIDCounter++; // We have to make this run last because get element by id is tied to id of row
        //Final Step - Add our row to the insertRowHere section of HTML doc
        document.getElementById("insertRowsHere").appendChild(thisRow);

        generateUniqString(props);
    }

    document.getElementById("outputText").value = buildUniqString;
    firstSymbolInTrade = ``;
}

function genItemListBtn(classItemID) {
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
            /////////////////////////////////////////////////////////////////////

            setOptionTags(classItemID, this.id);
        })
        document.getElementById("ulItemListID").appendChild(liItem);
    }
}

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
        })
        document.getElementById("ulClassListID").appendChild(liItem);
    }
}
function sortTradeBox() {
    let thisStr = outputTradeTextBox.value;
    let splitUp = thisStr.split(`\n`);
    splitUp.sort();
    outputTradeTextBox.value = ``;
    for (const elem of splitUp) {
        if (elem !== ``) outputTradeTextBox.value += `${elem}\n`
    }
}

arrRadSocketBtns.forEach(elemt => {
    elemt.addEventListener("click", function () {
        newSocketTracker = parseInt(this.parentElement.innerText);
        setOptionTags(grab, grab2);
    })
});

arrRadEthBtns.forEach(elemt => {
    elemt.addEventListener("click", function () {
        newEthTracker = this.parentElement.innerText;
        console.log(newEthTracker);
        setOptionTags(grab, grab2);
    })
});
btnSortTradeThreadID.addEventListener("click", sortTradeBox);
initilizer();
const addHrLine = document.createElement("hr");
addHrLine.style.paddingTop = `5px`;
document.getElementById("insertRowsHere").appendChild(addHrLine);