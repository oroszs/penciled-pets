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
        } else {
            divEl.classList.add('portrait-div');
        }
        let wrap = document.createElement('div');
        wrap.appendChild(divEl);
        divEl.appendChild(imgEl);
        imgHolder.appendChild(wrap);
        imgEl.onload = () => {
            divEl.classList.add('fadeIn');
        }
    });
}