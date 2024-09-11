const numBtn = document.querySelectorAll('.num-btn');
const pointBtn = document.getElementById('point-btn');
const opBtn = document.querySelectorAll('.op-btn');
const displayBox = document.querySelector('#disp_field');
let ans = '0';

function displayResult(btnValue) {
    if (true) {
        if (ans === '0') {
            ans = btnValue;
        }
        else {
            ans += btnValue;
        }
        displayBox.innerHTML = ans;
    }
}

// Event listeners for number buttons
for (const each_btn of numBtn) {
    each_btn.addEventListener('click', (e) => {
        displayResult(each_btn.value)
    });
}
// Event listeners for point button
pointBtn.addEventListener('click', function(){
    if (!(ans.includes(pointBtn.value))) {
        ans += pointBtn.value;
        displayBox.innerHTML = ans;
    }
});

// Event listeners for operation buttons
for (const each_btn of opBtn) {
    each_btn.addEventListener('click', ()=>{
        if (each_btn.value === '=') {
            displayBox.innerHTML = eval(ans);
        }
        else {
            ans += each_btn.value;

            displayBox.innerHTML = ans;
        }
    })
}

