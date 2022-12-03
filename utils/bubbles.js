window.onload = () => init();

const init = () => {
    let intervalTime;
    let availableQuadrants = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let numElements = 3;
    let bubbleWrapper = document.querySelector('.bubbleHolder');
    const fullImgArray = Array.from(document.querySelectorAll('.bubbleImg'));
    let imgArray = fullImgArray.slice();
    let quadIndex = availableQuadrants[Math.floor(Math.random() * availableQuadrants.length)];
    let quad = availableQuadrants.splice(availableQuadrants.indexOf(quadIndex), 1);
    let imgIndex = Math.floor(Math.random() * imgArray.length);
    let chosenImg = imgArray.splice(imgIndex, 1);
    if(imgArray.length === 0) {
        imgArray = fullImgArray.slice();
    }
    const tryToCreateBubble = (img, wrap, quad) => {
        console.log(img, wrap, quad);
        if(quad) {
            createBubble(img, wrap, quad);
            bubbles++;
        }
        if(bubbles === 1) {
            intervalTime = 0;
        } else if (bubbles < numElements) {
            intervalTime = 1000;
        } else {
            intervalTime = 3000;
        }
    }
    setInterval(tryToCreateBubble, intervalTime, chosenImg, bubbleWrapper, quad);
}
const createBubble = (img, wrapper, quad) => {
    let bubble = document.createElement('div');
    bubble.className += 'bubbleDiv';
    bubble.dataset.quad = `${quad}`;
    let classString = getBubbleLocation(quad);
    bubble.className += ` ${classString}`;
    bubble.appendChild(img);
    wrapper.appendChild(bubble);
    bubble.className += ` bubbleFadeClass`;
}
const getBubbleLocation = (quad) => {
    let classString = '';
    switch (quad) {
        case 0:
            classString = 'top left';
        break;
        case 1:
            classString = 'top center';
        break;
        case 2:
            classString = 'top right';
        break;
        case 3:
            classString = 'left middle';
        break;
        case 4:
            classString = 'middle center';
        break;
        case 5:
            classString = 'right middle';
        break;
        case 6:
            classString = 'bottom left';
        break;
        case 7:
            classString = 'bottom center';
        break;
        case 8:
            classString = 'bottom right';
        break;
    }
    return classString;
}