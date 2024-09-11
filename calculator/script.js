const numBtn = document.querySelectorAll('.num-btn');
const displayBox = document.querySelector('#disp_field');
let ans = 0;

for (const each_btn of numBtn) {
    each_btn.addEventListener('click', (e) => {
        const btnVal = Number(each_btn.value);
        if (ans === 0) {
            ans = btnVal;
            console.log(ans);
        }
        else {
            ans = (ans * 10) + btnVal;
        }
        displayBox.innerHTML = String(ans);
        console.log(ans);
    });
}