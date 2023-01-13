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
        wrap.classList.add('div-wrap');
        divEl.onclick = () => {
            let wrapper = document.querySelector('.wrapper');
            let modalBg = document.createElement('div');
            modalBg.classList.add('modal-bg');
            let modalHolder = document.createElement('div');
            modalHolder.classList.add('modal-holder');
            let modalImg = document.createElement('img');
            modalImg.classList.add('modal-img');
            modalImg.src = obj.src;
            if(obj.orientation === 'portrait') {
                modalImg.classList.add('modal-img-portrait');
            } else {
                modalImg.classList.add('modal-img-landscape');
            }
            modalHolder.appendChild(modalImg);
            modalBg.appendChild(modalHolder);
            wrapper.appendChild(modalBg);
            modalBg.onclick = () => modalBg.remove();
            modalHolder.onclick = () => modalBg.remove();
        }
        wrap.appendChild(imgEl);
        divEl.appendChild(wrap);
        imgHolder.appendChild(divEl);
        imgEl.onload = () => {
            divEl.classList.add('fadeIn');
        }
    });
}