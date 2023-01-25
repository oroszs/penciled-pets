window.onload = () => {
    galleryInit();
    galleryControlsInit();
    setup();
}
const galleryInit = () => {
    populateGallery('medium');
}
const galleryControlsInit = () => {
    const holders = Array.from(document.querySelectorAll('.button-holder'));
    holders.forEach(holder => {
        holder.onclick = (e) => {
            e.stopPropagation();
            holder.classList.toggle('revealed');
        }
    });
    const smlButton = document.querySelector('#sml-size-button');
    const medButton = document.querySelector('#med-size-button');
    const lgButton = document.querySelector('#lg-size-button');
    smlButton.onclick = changeSize(smlButton, 'small');
    medButton.onclick = changeSize(medButton, 'medium');
    lgButton.onclick = changeSize(lgButton, 'large');
}
const changeSize = (button, newSize) => {
    console.log('size changed');
    if(!button.classList.contains('current-button') && !button.classList.contains('selected-button')) {
        const imgHolder = document.querySelector('#img-holder');
        const currentButton = document.querySelector('.current-button');
        if(currentButton.dataset.size === 'large') {
            currentButton.classList.remove('fa-lg');
        } else if (currentButton.dataset.size==='small') {
            currentButton.classList.remove('fa-xs')
        }
        const selectedButton = document.querySelector('.selected-button');
        selectedButton.classList.remove('selected-button');
        selectedButton.classList.add('unselected-button');
        while(imgHolder.firstChild) {
            imgHolder.removeChild(imgHolder.lastChild);
        }
        switch (newSize) {
            case 'large':
                currentButton.dataset.size = 'large';
                currentButton.classList.add('fa-lg');
                populateGallery('large');
            break;
            case 'medium':
                currentButton.dataset.size = 'medium';
                populateGallery('medium');
            break;
            case 'small':
                currentButton.dataset.size = 'small';
                currentButton.classList.add('fa-xs');
                populateGallery('small');
            break;
            default:
                populateGallery('medium');
            break;
        }
        button.classList.remove('unselected-button');
        button.classList.add('selected-button');
    }
}
const populateGallery = (size) => {
    console.log(size);
    const imgHolder = document.querySelector('#img-holder');
    imgObjArray.forEach(obj => {
        let butEl = document.createElement('button');
        butEl.classList.add('gallery-img-button');
        let imgEl = document.createElement('img');
        imgEl.src = obj.src;
        imgEl.classList.add('gallery-img');
        switch (size) {
            case 'small':
                if(obj.orientation === 'landscape') {
                    butEl.classList.add('small-landscape');
                } else {
                    butEl.classList.add('small-portrait');
                }
                break;
            case 'medium':
                if(obj.orientation === 'landscape') {
                    butEl.classList.add('medium-landscape');
                } else {
                    butEl.classList.add('medium-portrait');
                }
                break;
            case 'large':
                if(obj.orientation === 'landscape') {
                    butEl.classList.add('large-landscape');
                } else {
                    butEl.classList.add('large-portrait');
                }
                break;
            default:
                if(obj.orientation === 'landscape') {
                    butEl.classList.add('medium-landscape');
                } else {
                    butEl.classList.add('medium-portrait');
                }
                break;
        }
        let wrap = document.createElement('div');
        wrap.classList.add('div-wrap');
        addModal(butEl, obj.src, obj.orientation);
        wrap.appendChild(imgEl);
        butEl.appendChild(wrap);
        imgHolder.appendChild(butEl);
        imgEl.onload = () => {
            butEl.classList.add('fadeIn');
        }
    });
}
const addModal = (buttonElement, imgSrc, imgOrientation) => {
    buttonElement.onclick = () => {
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
        modalImg.src = imgSrc;
        if(imgOrientation === 'portrait') {
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
}