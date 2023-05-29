var pop_up = true;

function fechar() {
    confirmar.classList.remove('block')
    pop_up = false;
}

function fechar1() {
    calc1.classList.remove('block')
    pop_up = false;
}
function abrir1() {
    if(pop_up == true) {
        fechar();
        fechar2();
        fechar3();
    }
    calc1.classList.add('block')
    pop_up = true;
}


function fechar2() {
    calc2.classList.remove('block')
    pop_up = false;
}
function abrir2() {
    if(pop_up == true) {
        fechar();
        fechar1();
        fechar3();
    }
    calc2.classList.add('block')
    pop_up = true;
}

function fechar3() {
    calc3.classList.remove('block')
    pop_up = false;
}
function abrir3() {
    if(pop_up == true) {
        fechar();
        fechar1();
        fechar2();
    }
    calc3.classList.add('block')
    pop_up = true;
}

function calc_lvl() {
    var lvl_agr = Number(lvl_atual.value) + 1;
    var lvl_obj = Number(lvl_objetivo.value);
    var lvl_mora = 0;
    var lvl_xp = 0;
    
    for(var cont = lvl_agr; cont <= lvl_obj; cont++) {
        
        if(cont == 10) {
            lvl_mora += 1;
            lvl_xp += 1;
        }
        if(cont == 20) {
            lvl_mora += 100;
            lvl_xp += 100;
        }
        if(cont == 30) {
            lvl_mora += 1000;
            lvl_xp += 1000;
        }
        if(cont == 40) {
            lvl_mora += 10000;
            lvl_xp += 10000;
        }
        if(cont == 50) {
            lvl_mora += 100000;
            lvl_xp += 100000;
        }
        if(cont == 60) {
            lvl_mora += 100000;
            lvl_xp += 100000;
        }
        if(cont == 70) {
            lvl_mora += 100000;
            lvl_xp += 100000;
        }
        if(cont == 80) {
            lvl_mora += 100000;
            lvl_xp += 100000;
        }
        if(cont == 90) {
            lvl_mora += 100000;
            lvl_xp += 100000;
        }
    }
    
    var qtd_xp = lvl_xp;
    var livro_roxo = 0;
    var livro_azul = 0;
    var livro_verde = 0;
    while(qtd_xp > 0){
        
        if(qtd_xp >= 20000) {
            qtd_xp -= 20000;
            livro_roxo += 1;
        } else if (qtd_xp >= 5000) {
            qtd_xp -= 5000;
            livro_azul += 1;
        } else {
            qtd_xp -= 1000;
            livro_verde += 1;
        }
    }
    
    var custo_xp = ``
    if(livro_roxo > 0) {
        custo_xp += `${livro_roxo} EXP do Herói`
    } if(livro_azul > 0) {
        if(custo_xp != ``) {
            custo_xp += `, `
        }
        custo_xp += `${livro_azul} EXP do Aventureiro`
    } if(livro_verde > 0) {
        if(custo_xp != ``) {
            custo_xp += `, `
        }
        custo_xp += `${livro_verde} EXP de Andarilho`
    }

    mensagem1.innerHTML = `Custará ${lvl_mora} Mora e precisará de ${custo_xp}.`
}

var pity = 0;

function calc_pity() {
    pity = Number(id_pity.value);
    var calc = 90 - pity
    var gemas = calc * 160

    if(pity > 90 || pity < 0) {
        alert(`Calma lá, não existe pity ${calc}.`)
    } else if(pity == 90) {
        mensagem2.innerHTML = `Estranho...<br>Ou você pegou um 5* agora e seu pity é 0 ou o numero inserido foi errado.`
    } else {
        mensagem2.innerHTML = `Faltam giros ${calc} para seu 5* garantido, e com isso são ${gemas} primogens para chegar lá. <img src="assets/img/Primogem.webp" height="30px" width="30px">`

        localStorage.setItem('pity', pity);
        localStorage.setItem('gemas', gemas);
    }
}

function calc_asc() {
    var asc_agr = Number(asc_atual.value);
    var asc_obj = Number(asc_objetivo.value);
    var lasca = 0;
    var fragmento = 0;
    var pedaço = 0;
    var gema = 0;
    var mora = 0;
    var item = 0;
    var item2a = 0;
    var item2b = 0;
    var item2c = 0;
    var boss = 0;
    var texto = ``;
// LOST FIFTY FIFTY
    for(var cont = asc_agr; cont <= asc_obj; cont++) {

        if(cont == 1) {
            lasca += 1;
            item += 3;
            item2a += 3;
            mora += 20000;
        }
        if(cont == 2) {
            fragmento += 3;
            boss += 2;
            item += 10;
            item2a += 15;
            mora += 40000;
        }
        if(cont == 3) {
            fragmento += 6;
            boss+= 4
            item += 20;
            item2b += 12;
            mora += 60000;
        }
        if(cont == 4) {
            pedaço += 3;
            boss += 8
            item += 30;
            item2b += 18;
            mora += 80000;
        }
        if(cont == 5) {
            pedaço += 6;
            boss += 12;
            item += 45;
            item2c += 12;
            mora += 100000;
        }
        if(cont == 6) {
            gema += 6;
            boss += 20;
            item += 60;
            item2c += 24;
            mora += 120000;
        }
    }
    if(gema >= 1) {
        texto += `- ${gema} Gemas`
    } 
    if(pedaço >= 1) {
        texto += `<br> - ${pedaço} Pedaços`
    }
    if(fragmento >= 1) {
        texto += `<br> - ${fragmento} Fragmentos`
    }
    if(lasca >= 1) {
        texto += `<br> - ${lasca} Lascas`
    }

    if(item2a >= 1) {
        texto += `<br> - ${item2a} Itens de monstro(1° estágio),`
    }
    if(item2b >= 1) {
        texto += `<br> - ${item2b} Itens de monstro(2° estágio),`
    }
    if(item2c >= 1) {
        texto += `<br> - ${item2c} Itens de monstro(3° estágio),`
    }

    mensagem3.innerHTML = `<span>Serão necessarios:
                    <br>${texto}
                    <br> - ${item} Itens da Natureza
                    <br> - ${mora} Mora
                    <br>Para subir seu personagem do nivel de ascenção ${asc_agr} para o ${asc_obj}<span>.
                    
                    `
}