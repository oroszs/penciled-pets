const setup = () => {
    let tab = document.querySelector('.contact');
    tab.addEventListener('click', () => {
        console.log(window.screen.width);
        if(tab.style.bottom === '0px') {
            if(window.screen.width <= 550) {
                tab.style.bottom = '-100px';
            } else {
                tab.style.bottom = '-60px';
            }
        } else {
            tab.style.bottom = '0px';
        }
    });
}