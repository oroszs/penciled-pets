window.onload = () => init();

const init = () => {
    let intervalTime = 1000;
    let availableQuadrants = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let bubbleWrapper = document.querySelector('.bubbleHolder');
    let full = Array.from(document.querySelectorAll('.bubbleImg'));
    let imgArray = full.slice();
    const tryToCreateBubble = (imgArray, wrap, availableQuadrants) => {
        let imgIndex = Math.floor(Math.random() * imgArray.length);
        chosenImg = imgArray[imgIndex];
        let quadIndex = Math.floor(Math.random() * availableQuadrants.length);
        let quadArr = availableQuadrants.splice(availableQuadrants.indexOf(quadIndex), 1);
        let quad = quadArr[0];
        createBubble(chosenImg, wrap, quad, availableQuadrants);
    }
    setInterval(tryToCreateBubble, intervalTime, imgArray, bubbleWrapper, availableQuadrants);
}
const createBubble = (img, wrapper, quad, quads) => {
    let bubble = document.createElement('div');
    bubble.className += 'bubbleDiv';
    bubble.dataset.quad = `${quad}`;
    let classString = getBubbleLocation(quad);
    bubble.className += ` ${classString}`;
    bubble.appendChild(img);
    wrapper.appendChild(bubble);
    bubble.className += ` bubbleFadeClass`;
    bubble.onanimationend = () => {
        quads.push(parseInt(bubble.dataset.quad));
        bubble.remove();
    }
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