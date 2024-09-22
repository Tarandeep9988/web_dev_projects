const inputField = document.getElementById('input-num');
const fromSelection = document.getElementById('from-base');
const toSelection = document.getElementById('to-base');
const convertBtn = document.getElementById('convert-btn');
const resultField = document.getElementById('result-box');
const resetBtn = document.getElementById('reset-btn');

convertBtn.addEventListener('click', function() {
    const fromBase  = fromSelection.value;
    const input = inputField.value;
    const decimalNum = parseInt(input, fromBase);
    console.log(decimalNum);
    
    if (isNaN(decimalNum)) {
        resultField.value = "Invalid Input!";
    }
    else {
        const toBase = toSelection.value;
        const numAfterConverting = decimalNum.toString(toBase);
        resultField.value = numAfterConverting;
    }
});

resetBtn.addEventListener('click', ()=> {
    inputField.value = "";
    resultField.value = "";
})