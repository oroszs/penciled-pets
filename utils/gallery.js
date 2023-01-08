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
        if(obj.orientation === 'landscape') {
            imgEl.classList.add('gallery-img-landscape');
            divEl.classList.add('landscape-div');
        } else {
            imgEl.classList.add('gallery-img-portrait');
            divEl.classList.add('portrait-div');
        }
        divEl.appendChild(imgEl);
        imgHolder.appendChild(divEl);
    });
}