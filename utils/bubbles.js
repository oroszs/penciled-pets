window.onload = () => {
    init();
    setup();
}

const init = () => {
    let intervalTime = 0;
    let availableQuadrants = [0, 1, 2, 3];
    let bubbleWrapper = document.querySelector('.bubbleHolder');
    let tempImgArray = imgObjArray.slice();
    let numStartingBubbles = 1;
    let bubbles = 0;
    const tryToCreateBubble = (startingBubbles, bubbles, tempImgArray, wrap, availableQuadrants) => {
        let quadIndex = Math.floor(Math.random() * availableQuadrants.length);
        let quadArr = availableQuadrants.splice(availableQuadrants.indexOf(quadIndex), 1);
        let quad = quadArr[0];
        if(quad >= 0){
            let imgIndex = Math.floor(Math.random() * tempImgArray.length);
            let imgObjArr = tempImgArray.splice(imgIndex, 1);
            bubbles++;
            if(bubbles >= startingBubbles) intervalTime = 1000;
            if(tempImgArray.length === 0) tempImgArray = imgObjArray.slice();
            createBubble(imgObjArr[0], wrap, quad, availableQuadrants);
        }
        setTimeout(tryToCreateBubble, intervalTime, numStartingBubbles, bubbles, tempImgArray, bubbleWrapper, availableQuadrants);
    }
    setTimeout(tryToCreateBubble, intervalTime, numStartingBubbles, bubbles, tempImgArray, bubbleWrapper, availableQuadrants);
}
const createBubble = (imgObj, wrapper, quad, quads) => {
    let bubble = document.createElement('div');
    bubble.className += 'bubbleDiv';
    bubble.dataset.quad = `${quad}`;
    let classString = getBubbleLocation(quad);
    bubble.className += ` ${classString}`;
    let imgEl = document.createElement('img');
    imgEl.src = imgObj.src;
    if(imgObj.orientation === 'portrait') {
        imgEl.classList.add('portraitImg')
    } else {
        imgEl.classList.add('landscapeImg');
    }
    imgEl.classList.add('bubbleImg');
    bubble.appendChild(imgEl);
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
            classString = 'top right';
        break;
        case 2:
            classString = 'bottom left';
        break;
        case 3:
            classString = 'bottom right';
        break;
    }
    return classString;
}