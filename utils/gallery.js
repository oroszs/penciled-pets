window.onload = () => {
    galleryInit();
    setup();
}
const galleryInit = () => {
    const imgHolder = document.querySelector('#img-holder');
    imgObjArray.forEach(obj => {
        let imgEl = document.createElement('img');
        imgEl.src = obj.src;
        if(obj.orientation === 'landscape') {
            imgEl.classList.add('gallery-img-landscape');
        } else {
            imgEl.classList.add('gallery-img-portrait');
        }
        let divEl = document.createElement('div');
        divEl.classList.add('gallery-img-div');
        divEl.appendChild(imgEl);
        imgHolder.appendChild(divEl);
    });
}