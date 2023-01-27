const setup = () => {
    let tab = document.querySelector('.contact');
    tab.addEventListener('click', () => {
        if(tab.style.bottom === '0px') {
            tab.style.bottom = "";
        } else {
            tab.style.bottom = '0px';
        }
    });
}