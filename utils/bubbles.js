window.onload = () => init();

const init = () => {
    let intervalTime = 0;
    let availableQuadrants = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let bubbleWrapper = document.querySelector('.bubbleHolder');
    let full = Array.from(document.querySelectorAll('.bubbleImg')).slice();
    let imgArray = full.slice();
    let numStartingBubbles = 1;
    let bubbles = 0;
    const tryToCreateBubble = (startingBubbles, bubbles, full, imgArray, wrap, availableQuadrants) => {
        console.log('try');
        let quadIndex = Math.floor(Math.random() * availableQuadrants.length);
        let quadArr = availableQuadrants.splice(availableQuadrants.indexOf(quadIndex), 1);
        let quad = quadArr[0];
        if(quad >= 0){
            let imgIndex = Math.floor(Math.random() * imgArray.length);
            let imgTagArr = imgArray.splice(imgIndex, 1);
            let imgSrc = imgTagArr[0].src;
            bubbles++;
            if(bubbles >= startingBubbles) intervalTime = 2000;
            if(imgArray.length === 0) imgArray = full.slice();
            createBubble(imgSrc, wrap, quad, availableQuadrants);
            console.log('success');
        }
        setTimeout(tryToCreateBubble, intervalTime, numStartingBubbles, bubbles, full, imgArray, bubbleWrapper, availableQuadrants);
    }
    setTimeout(tryToCreateBubble, intervalTime, numStartingBubbles, bubbles, full, imgArray, bubbleWrapper, availableQuadrants);
}
const createBubble = (imgSrc, wrapper, quad, quads) => {
    let bubble = document.createElement('div');
    bubble.className += 'bubbleDiv';
    bubble.dataset.quad = `${quad}`;
    let classString = getBubbleLocation(quad);
    bubble.className += ` ${classString}`;
    let imgEl = document.createElement('img');
    imgEl.classList.add('bubbleImg');
    imgEl.src = imgSrc;
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