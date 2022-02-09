let num = document.querySelector('#num');
let resultBloc = document.querySelector('#result');
let btn = document.querySelector('#btn');
let showSecret = document.querySelector('#showSecret');
let secret = document.querySelector('#secret');

let secretNum = secretNumGenerate();

btn.addEventListener('click', function() {
    resultBloc.innerHTML = '';
    result = [];
    if (checkNumCount(num.value)) {

        for (let i = 0; i < num.value.length; i++) {

            if (Number(num.value[i]) == Number(secretNum[i])) {
                result.push('Bull');
            } else if (secretNum.includes(Number(num.value[i]))) { 
                result.push('Cow');
            }
        }
        

    }
    for (let i = 0; i < result.length; i++ ) {
        if (result[i] == 'Bull') {
            let block = document.createElement('div');
            block.classList.add('bull');
            // block.innerHTML = ' ';
            resultBloc.append(block);
        } else if (result[i] == 'Cow'){
            let block = document.createElement('div');
            block.classList.add('cow');
            // block.innerHTML = ' 1';
            resultBloc.append(block);
        }
    }

    if (result.every(item => item == 'Bull')) {
        alert('You Won!')
        if (confirm('Restart game?')) {
            location.reload();
        }
    }
})


function checkNumCount(num) {
    if (Array.from(num).length === 4) {
        // console.log('Все верно');
        return true;
    } else {
        // console.log('ввели меньше!');
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
    
    // let num = result.join('');
    return result;
}


showSecret.addEventListener('click', function () {
    secret.innerHTML = secretNum.join('');
})
