let num = document.querySelector('#num');
let resultBloc = document.querySelector('#result');
let btn = document.querySelector('#btn');
let showSecret = document.querySelector('#showSecret');
let secret = document.querySelector('#secret');

let secretNum = secretNumGenerate();

btn.addEventListener('click', function() {
    result = [];
    if (checkNumCount(num.value)) {

        for (let i = 0; i < num.value.length; i++) {

            if (Number(num.value[i]) == Number(secretNum[i])) {
                result.push('BULL!');
            } else { 

            }
        }

        result.forEach( item =>  console.log(item))         
           
            // let block = document.createElement('div').classList.add('bull');
        
        resultBloc.innerHTML = result;
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
