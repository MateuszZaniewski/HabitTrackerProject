document.querySelector('.tittle-nawyki').innerText = 'Nawyki'
document.querySelector('#date1').innerText = 'CZW.  12'
document.querySelector('#date2').innerText = 'ŚR.  11'
document.querySelector('#date3').innerText = 'WT.  10'
document.querySelector('#date4').innerText = 'PON.  9'
document.querySelector('#nawyk1-span').innerText = 'Programowanie'


function Kalendarz(dzien, data){
    this.dzien = dzien
    this.data = data
}

let data1 = new Kalendarz('Czw. ', 12)
console.log(data1)
