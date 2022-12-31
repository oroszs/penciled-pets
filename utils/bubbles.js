window.onload = () => {
    init();
    setup();
}

const init = () => {
    let intervalTime = 0;
    let tempImgArray = imgObjArray.slice();
    let numStartingBubbles = 1;
    let bubbles = 0;
    const tryToCreateBubble = (startingBubbles, bubbles, tempImgArray) => {
        let availArray = Array.from(document.querySelectorAll('.available'));
        let visibleAvailableQuadrants = availArray.filter(quadrant => window.getComputedStyle(quadrant).display !== 'none');
        let quadIndex = Math.floor(Math.random() * visibleAvailableQuadrants.length);
        let quadArr = visibleAvailableQuadrants.splice(quadIndex, 1);
        let quad = quadArr[0];
        if(quad) {
            quad.classList.remove('available');
            let imgIndex = Math.floor(Math.random() * tempImgArray.length);
            let imgObjArr = tempImgArray.splice(imgIndex, 1);
            bubbles++;
            if(bubbles >= startingBubbles) intervalTime = getIntervalTime();
            if(tempImgArray.length === 0) tempImgArray = imgObjArray.slice();
            createBubble(imgObjArr[0], quad);
        }
        setTimeout(tryToCreateBubble, intervalTime, numStartingBubbles, bubbles, tempImgArray);
    }
    setTimeout(tryToCreateBubble, intervalTime, numStartingBubbles, bubbles, tempImgArray);
}
const createBubble = (imgObj, quad) => {
    let el = quad.firstChild;
    el.src = imgObj.src;
    if(imgObj.orientation === 'portrait') {
        if(el.classList.contains('landscapeImg')) el.classList.remove('landscapeImg');
        if(!el.classList.contains('portraitImg')) el.classList.add('portraitImg');
    } else {
        if(el.classList.contains('portraitImg')) el.classList.remove('portraitImg');
        if(!el.classList.contains('landscapeImg')) el.classList.add('landscapeImg');
    }
    quad.classList.add('bubbleFadeClass');
    quad.onanimationend = () => {
        quad.firstChild.src = '';
        quad.classList.add('available');
        quad.classList.remove('bubbleFadeClass');
        void quad.offsetWidth;
    }
}
const getIntervalTime = () => {
    let totalQuads = Array.from(document.querySelectorAll('.quad'));
    let visibleQuads = totalQuads.filter(quad => window.getComputedStyle(quad).display !== 'none');
    switch(visibleQuads.length) {
        case 8:
            intTime = 1000;
        break;
        case 6:
            intTime = 1000;
        break;
        case 4:
            intTime = 2000;
        break;
        case 1:
            intTime = 1500;
        break;
        default:
            intTime = 1000;
        break;
    }
    return intTime;
}