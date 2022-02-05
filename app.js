let num = document.querySelector('#num');
let btn = document.querySelector('#btn');

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