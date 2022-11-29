window.onload = () => init();

function init () {
    let bubbleElements = [];
    let numElements = 9;
    let minSize = 75;
    let maxSize = 300;
    let bubbleWrapper = document.querySelector('.main');
    let imgNodeList = document.querySelectorAll('.bubbleImg');
    let imgArray = Array.from(imgNodeList);
    if (imgArray.length < numElements) numElements = imgArray.length;
    for(let elemIndex = 0; elemIndex < numElements; elemIndex++) {
        let bubble = document.createElement('div');
        let size = Math.floor((Math.random() * (maxSize - minSize) + minSize));
        bubble.classList.add('bubbleDiv');
        bubble.style.height = `${size.toString()}px`;
        bubble.style.width = `${size.toString()}px`;
        bubble.appendChild(imgArray[elemIndex]);
        bubbleElements.push(bubble);
    }
    bubbleElements.forEach(bub => {
        bubbleWrapper.appendChild(bub);
    });
}