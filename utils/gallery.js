window.onload = () => {
    galleryInit();
    setup();
}
const galleryInit = () => {
    const imgHolder = document.querySelector('#img-holder');
    imgObjArray.forEach(obj => {
        let butEl = document.createElement('button');
        butEl.classList.add('gallery-img-button');
        let imgEl = document.createElement('img');
        imgEl.src = obj.src;
        imgEl.classList.add('gallery-img');
        if(obj.orientation === 'landscape') {
            butEl.classList.add('landscape');
        } else {
            butEl.classList.add('portrait');
        }
        let wrap = document.createElement('div');
        wrap.classList.add('div-wrap');
        butEl.onclick = () => {
            let wrapper = document.querySelector('.wrapper');
            let modalBg = document.createElement('div');
            modalBg.classList.add('modal-bg');
            let modalHolder = document.createElement('div');
            modalHolder.classList.add('modal-holder');
            let modalX = document.createElement('div');
            modalX.classList.add('modal-x');
            let xIcon = document.createElement('i');
            xIcon.classList.add('fa-solid');
            xIcon.classList.add('fa-xmark');
            xIcon.classList.add('fa-2x');
            modalX.appendChild(xIcon);
            let modalImg = document.createElement('img');
            modalImg.classList.add('modal-img');
            modalImg.src = obj.src;
            if(obj.orientation === 'portrait') {
                modalImg.classList.add('modal-img-portrait');
            } else {
                modalImg.classList.add('modal-img-landscape');
            }
            modalHolder.appendChild(modalX);
            modalHolder.appendChild(modalImg);
            modalBg.appendChild(modalHolder);
            wrapper.appendChild(modalBg);
            modalBg.onclick = () => modalBg.remove();
            modalHolder.onclick = () => modalBg.remove();
        }
        wrap.appendChild(imgEl);
        butEl.appendChild(wrap);
        imgHolder.appendChild(butEl);
        imgEl.onload = () => {
            butEl.classList.add('fadeIn');
        }
    });
}