function checkEmail() {
    let email = document.querySelector('#emailField').value;

    if (!email.includes('@')) {
        alert('Символ @ відсутній');
    }
    else if (!email.includes('.')) {
        alert('Символ . відсутній');
    }
    else {
        alert('Все вірно!')
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rightScrollBtn = document.querySelector('.right-scroll'); // Отримуємо кнопку за класом
    const leftScrollBtn = document.querySelector('.left-scroll');

    if (rightScrollBtn) {
        rightScrollBtn.addEventListener('click', () => {
            numeric = set(1);

            if (numeric === 1) {
                changeView1();
                changeReset4();
                block1Off(3);

            }
            else if (numeric === 2) {
                changeView2();
                changeReset1();
                block1On(1);
                block1Off(4);
            }
            else if (numeric === 3) {
                changeView3();
                changeReset2();
                                block1On(2);
                block1Off(1);

            }
            else if (numeric === 4) {
                changeView4();
                changeReset3();
                block1On(3);
                block1Off(2);

            }
            // changeView();      
        });
    }

    if (leftScrollBtn) {
        leftScrollBtn.addEventListener('click', () => {
            numeric = set(-1);

            if (numeric === 1) {
                changeReset2()
                changeView1()
                block1Off(1);
            }
            else if (numeric === 2) {
                changeReset3()
                changeView2()
                block1On(1);
                block1Off(2);
            }
            else if (numeric === 3) {
                changeReset4()
                changeView3()
                block1On(2);
                block1Off(3);

            }
            else if (numeric === 4) {
                changeReset1()
                changeView4()
                block1On(3);
                block1Off(1);
            }

        })
    }
});

let sum = 1;

function set(n) {
    sum = sum + (+n);
    console.log(sum);
    if (sum > 4) {
        sum = 1;
    }
    else if(sum < 1){
        sum = 4;
    }
    console.log(sum);
    return sum
}

function changeReset4() {
    const el = document.querySelector('.condd .where-im .w4');
    if (el) el.style.backgroundColor = "#DDE0E4";
    if (el) el.style.width = "15px";
}

function changeReset3() {
    const el = document.querySelector('.condd .where-im .w3');
    if (el) el.style.backgroundColor = "#DDE0E4";
    if (el) el.style.width = "15px";
}

function changeReset2() {
    const el = document.querySelector('.condd .where-im .w2');
    if (el) el.style.backgroundColor = "#DDE0E4";
    if (el) el.style.width = "15px";
}

function changeReset1() {
    const el = document.querySelector('.condd .where-im .w1');
    if (el) el.style.backgroundColor = "#DDE0E4";
    if (el) el.style.width = "15px";
}

function changeView4() {
    const el = document.querySelector('.condd .where-im .w4');
    if (el) el.style.backgroundColor = "#DC7000";
    if (el) el.style.width = "45px";
    if (el) el.style.borderRadius = "20px";
}

function changeView3() {
    const el = document.querySelector('.condd .where-im .w3');
    if (el) el.style.backgroundColor = "#DC7000";
    if (el) el.style.width = "45px";
    if (el) el.style.borderRadius = "20px";
}

function changeView2() {
    const el = document.querySelector('.condd .where-im .w2');
    if (el) el.style.backgroundColor = "#DC7000";
    if (el) el.style.width = "45px";
    if (el) el.style.borderRadius = "20px";
}

function changeView1() {
    const el = document.querySelector('.condd .where-im .w1');
    if (el) el.style.backgroundColor = "#DC7000";
    if (el) el.style.width = "45px";
    if (el) el.style.borderRadius = "20px";
}

function block1On(n){
    let newb = `.border-${n}`;
    const el = document.querySelector(newb);
    if(el) el.style.backgroundColor = "#0F0901";
    if(el) el.style.border = "2px solid #DC7000";
    if(el) el.transitionTimingFunction = "ease-in-out";
}

function block1Off(n){
    let newb = `.border-${n}`;
    const el = document.querySelector(newb);
    if(el) el.style.backgroundColor = "#1C140F";
    if(el) el.style.border = "2px solid #DDDDDD";
    if(el) el.transitionTimingFunction = "ease-in-out";

}
