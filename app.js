const num = document.querySelector('#num');
const resultBloc = document.querySelector('#result');
const btn = document.querySelector('#btn');
const showSecret = document.querySelector('#showSecret');
const secret = document.querySelector('#secret');
const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const secretNum = secretNumGenerate();
const descriptions = document.querySelectorAll('.description');
const historyBlock = document.querySelector('#history');

console.log(secretNum)
startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');

})


btn.addEventListener('click', function() {
    resultBloc.innerHTML = '';
    
    result = [];
    let hist = document.createElement('div');
    if (checkNumCount(num.value)) {

        for (let i = 0; i < num.value.length; i++) {

            if (Number(num.value[i]) == Number(secretNum[i])) {
                result.push('Bull');
            } else if (secretNum.includes(Number(num.value[i]))) { 
                result.push('Cow');
            } else {
                result.push(null)
            }
        }
        
        const histSpan = document.createElement('span');
        histSpan.classList.add('hist');
        histSpan.innerHTML = num.value + ' - ';
        hist.append(histSpan);

        for (let i = 0; i < result.length; i++ ) {
            
            if (result[i] == 'Bull') {
                let block = document.createElement('div');
                block.classList.add('bull');
                resultBloc.append(block);
                hist.append(block);

            } else if (result[i] == 'Cow'){
                let block = document.createElement('div');
                block.classList.add('cow');
                resultBloc.append(block);
                hist.append(block);
            }
        }

    
        historyBlock.append(hist);
        num.value = '';
        
        if (isBull(result)) {
            alert('You Won!')
            btn.setAttribute('disabled', true);
            if (confirm('Restart game?')) { location.reload(); }
        }

    }
})

// проверка на победу
function isBull(result) {
    for (let i = 0; i < result.length; i++) {
        if (result[i] != 'Bull') return false;
    }
    return true;
}

// 
function checkNumCount(num) {
    console.log(num)
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
    
    // let num = result.join('');
    return result;
}


showSecret.addEventListener('click', function () {
    secret.innerHTML = secretNum.join('');
})

const description = document.querySelector('#description');
description.addEventListener('click' , () => {
    console.log(descriptions);
    descriptions.forEach((item) => {
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    })
})
//TODO: ИСТОРИЮ 