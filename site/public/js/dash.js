var pop_up = false;

function fechar() {
    calc.classList.remove('block')
    pop_up = false;
}
function abrir() {
    if(pop_up == true) {
        fechar();
    }
    calc.classList.add('block')
    pop_up = true;
}

function calc_pity() {
    novoPity = Number(id_pity.value);
    var calc = 90 - novoPity
    var gemas = calc * 160

    if(novoPity > 90 || novoPity < 0) {
        alert(`Calma lá, não existe pity ${calc}.`)
    } else if(novoPity == 90) {
        mensagem.innerHTML = `Estranho...<br>Ou você pegou um 5* agora e seu pity é 0 ou o numero inserido foi errado.`
    } else {
        mensagem.innerHTML = `Faltam giros ${calc} para seu 5* garantido, e com isso são ${gemas} primogens para chegar lá. <img src="../assets/img/Primogem.webp" height="30px" width="30px">`

        localStorage.setItem('pity', novoPity);
        localStorage.setItem('gemas', gemas);

        setTimeout(() => {
            window.location = "cards.html";
        }, "2000")
    }
}