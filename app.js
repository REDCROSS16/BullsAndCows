let num = document.querySelector('#num');
let btn = document.querySelector('#btn');
let showSecret = document.querySelector('#showSecret');
let secret = document.querySelector('#secret');

let secretNum = secretNumGenerate();

btn.addEventListener('click', function() {
    
    if (checkNumCount(num.value)) {

    }
})


function checkNumCount(num) {
    if (Array.from(num).length === 4) {
        console.log('Все верно');
        return true;
    } else {
        console.log('ввели меньше!');
        return false;
    }
}

function secretNumGenerate(secretNumLength = 4) {
    let i = 0;
    let result = [];
    while (i < secretNumLength ) {
        let num = Math.floor(Math.random() * 9);
        if (result.indexOf(num) == -1) {
            result.push(num);
            i++;
        }
    }

    let num = result.join('');

    return num;
}


showSecret.addEventListener('click', function () {
    secret.innerHTML = secretNum;
})
