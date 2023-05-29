card1.style.opacity = 100;
card1.style.zIndex = 1;
card2.style.zIndex = -1;
card2.style.opacity = 0;
var num = 0;

function sobre() {
    if(num == 0) {
        card1.style.animation = 'card 2s';
        card2.style.animation = 'card2 2s';
        card1.style.zIndex = '-1';
        card1.style.opacity = 0
        card2.style.opacity = 100
        card2.style.zIndex = '1';
        num = 1
    } else {
        card2.style.animation = 'card 2s';
        card1.style.animation = 'card2 2s';
        card2.style.zIndex = '-1';
        card1.style.opacity = 100
        card2.style.opacity = 0
        card1.style.zIndex = '1';
        num = 0
    }
}