window.onload = () => {
    bubblesInit();
}

const bubblesInit = () => {
    let intervalTime = 0;
    let tempImgArray = imgObjArray.slice(1);
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
            if(tempImgArray.length === 0) tempImgArray = imgObjArray.slice(1);
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
    const quadHeight = parseInt(window.getComputedStyle(quad).height);
    if(imgObj.hasOwnProperty('largeMarginTop')){
        if(quadHeight > 150) {
            el.style.marginTop = `${imgObj.largeMarginTop}px`;
        } else {
            el.style.marginTop = `${imgObj.smallMarginTop}px`;
        }
    }
    if(imgObj.hasOwnProperty('largeMarginLeft')) {
        if(quadHeight > 150) {
            el.style.marginLeft = `${imgObj.largeMarginLeft}px`;
        } else {
            el.style.marginLeft = `${imgObj.smallMarginLeft}px`;
        }    }
    if(imgObj.hasOwnProperty('largeMarginRight')){
        if(quadHeight > 150) {
            el.style.marginRight = `${imgObj.largeMarginRight}px`;
        } else {
            el.style.marginRight = `${imgObj.smallMarginRight}px`;
        }    }
    quad.classList.add('bubbleFadeClass');
    quad.onanimationend = () => {
        quad.firstChild.src = '';
        quad.firstChild.style.marginTop='0px';
        quad.firstChild.style.marginLeft='0px';
        quad.firstChild.style.marginRight='0px';
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
            intTime = 1500;
        break;
        case 3:
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