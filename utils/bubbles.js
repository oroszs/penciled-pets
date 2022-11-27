window.onload = () => init();

function init () {
    let bubbleElements = [];
    let numElements = 15;
    let minSize = 50;
    let maxSize = 200;
    let bubbleWrapper = document.querySelector('.main');
    for(let elemIndex = 0; elemIndex < numElements; elemIndex++) {
        let bubble = document.createElement('div');
        let size = Math.floor((Math.random() * (maxSize - minSize) + 1));
        bubble.classList.add('bubbleDiv');
        bubble.style.width = `${size.toString()}px`;
        bubble.style.height = `${size.toString()}px`;
        bubbleElements.push(bubble);
    }
    bubbleElements.forEach(bub => {
        bubbleWrapper.appendChild(bub);
    });
}