window.onload = () => init();

const init = () => {
    let availableQuadrants = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let numElements = 9;
    let bubbleWrapper = document.querySelector('.bubbleHolder');
    const fullImgArray = Array.from(document.querySelectorAll('.bubbleImg'));
    let imgArray = fullImgArray.slice();
    if (imgArray.length < numElements) numElements = imgArray.length;
    for(let elemIndex = 0; elemIndex < numElements; elemIndex++) {
        createBubble(imgArray, fullImgArray, bubbleWrapper, availableQuadrants);
    }
}
const createBubble = (imgs, full, wrapper, quads) => {
    let bubble = document.createElement('div');
    bubble.className += 'bubbleDiv';
    let quad = quads[Math.floor(Math.random() * quads.length)];
    quads.splice(quads.indexOf(quad), 1);
    bubble.dataset.quad = `${quad}`;
    let classString = getBubbleLocation(quad);
    bubble.className += ` ${classString}`;
    let imgIndex = Math.floor(Math.random() * imgs.length);
    bubble.appendChild(imgs[imgIndex]);
    imgs.splice(imgIndex, 1);
    console.log(imgs.length);
    if(imgs.length === 0) {
        imgs = full.slice();
    }
    wrapper.appendChild(bubble);
    bubble.className += ` bubbleInClass`;
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