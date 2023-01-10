window.onload = () => {
    galleryInit();
    setup();
}
const galleryInit = () => {
    const imgHolder = document.querySelector('#img-holder');
    imgObjArray.forEach(obj => {
        let divEl = document.createElement('div');
        divEl.classList.add('gallery-img-div');
        let imgEl = document.createElement('img');
        imgEl.src = obj.src;
        imgEl.classList.add('gallery-img');
        if(obj.orientation === 'landscape') {
            divEl.classList.add('landscape-div');
            imgEl.classList.add('gallery-img-landscape');
        } else {
            divEl.classList.add('portrait-div');
            imgEl.classList.add('gallery-img-portrait');
        }
        divEl.appendChild(imgEl);
        imgHolder.appendChild(divEl);
    });
}