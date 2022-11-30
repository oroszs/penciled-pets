window.onload = () => init();

function init () {
    let bubbleElements = [];
    let numElements = 10;
    let minSize = 200;
    let maxSize = 300;
    let bubbleWrapper = document.querySelector('.bubbleHolder');
    let imgNodeList = document.querySelectorAll('.bubbleImg');
    let imgArray = Array.from(imgNodeList);
    if (imgArray.length < numElements) numElements = imgArray.length;
    for(let elemIndex = 0; elemIndex < numElements; elemIndex++) {
        let bubble = document.createElement('div');
        let size = Math.floor((Math.random() * (maxSize - minSize) + minSize));
        bubble.classList.add('bubbleDiv');
        bubble.style.height = `${size.toString()}px`;
        bubble.style.width = `${size.toString()}px`;
        let imgIndex = Math.floor(Math.random() * imgArray.length);
        bubble.appendChild(imgArray[imgIndex]);
        imgArray.splice(imgIndex, 1);
        bubbleElements.push(bubble);
        bubbleWrapper.appendChild(bubble);
        bubble.classList.add('bubbleInClass');
        bubble.onmouseleave = () => {
            bubble.remove();
        }
    }
}