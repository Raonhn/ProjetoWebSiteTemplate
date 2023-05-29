var radio = document.querySelector('.btn_manual')
var contador = 0

document.getElementById('slide0').checked = true

setInterval(() => {
   proximaImg() 
}, 5000)

function proximaImg() {
    contador += 1

    if(contador > 4){
        contador = 0
    }

    document.getElementById('slide'+ contador).checked = true
}