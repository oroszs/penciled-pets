window.onload = () => {
    galleryInit();
}
const galleryInit = () => {
    populateGallery();
    galleryControlsInit();
}
const galleryControlsTutorialSetup = () => {
    const wrap = document.querySelector('.gallery-wrapper');
    const imgHolder = document.querySelector('#img-holder');
    const tutBg = document.createElement('div');
    tutBg.classList.add('help-bg');
    let tutDiv = document.createElement('div');
    tutDiv.classList.add('help-div');
    let tutArrowLeft = document.createElement('div');
    tutArrowLeft.classList.add('help-div-arrow');
    tutArrowLeftIcon = document.createElement('i');
    tutArrowLeftIcon.classList.add('fa-solid');
    tutArrowLeftIcon.classList.add('fa-arrow-left');
    tutArrowLeft.appendChild(tutArrowLeftIcon);
    let tutArrowRight = document.createElement('div');
    tutArrowRight.classList.add('help-div-arrow');
    tutArrowRightIcon = document.createElement('i');
    tutArrowRightIcon.classList.add('fa-solid');
    tutArrowRightIcon.classList.add('fa-arrow-right');
    tutArrowRight.appendChild(tutArrowRightIcon);
    let tutDivHolder = document.createElement('div');
    tutDivHolder.classList.add('help-div-holder');
    hideAllRevealedHolders();
    imgHolder.style.overflow = 'hidden';
    wrap.style.height = '100%';
    wrap.style.overflow = 'hidden';
    window.scroll(0,0);
    tutDivHolder.append(tutArrowLeft, tutDiv, tutArrowRight);
    tutBg.appendChild(tutDivHolder);
    wrap.appendChild(tutBg);
    let tutStep = 1;
    tutArrowLeft.onclick = () => {
        if(tutStep > 1){
            tutStep--;
            galleryControlsTutorial(tutStep);
        }
    }
    tutArrowRight.onclick = () => {
        if(tutStep < 5) {
            tutStep++;
            galleryControlsTutorial(tutStep);
        }
    }
    tutDiv.onclick = () => {
        tutStep++;
        galleryControlsTutorial(tutStep);
    }
    galleryControlsTutorial(tutStep);
}
const galleryControlsTutorial = (tutStep) => {
    let tutDiv = document.querySelector('.help-div');
    let tutBg = document.querySelector('.help-bg');
    let arrows = Array.from(document.querySelectorAll('.arrow'));
    if(arrows) {
        arrows.forEach(arrowEl => {
            arrowEl.remove();
        });
    }
    hideAllRevealedHolders();
    switch (tutStep){
    case 1:
        tutDiv.textContent = 'These are the gallery control buttons\n(1/4)';
        const arrow1 = createArrow();
        const arrow2 = createArrow();
        const arrow3 = createArrow();
        arrow1.classList.add('arrow-1');
        arrow2.classList.add('arrow-2');
        arrow3.classList.add('arrow-3');
        tutBg.append(arrow1, arrow2, arrow3);
    break;
    case 2:
        tutDiv.textContent = 'This button controls the size of the images\n(2/4)';
        let arrow = createArrow();
        arrow.classList.add('arrow-1');
        let sizeButton = document.querySelector('#size-holder');
        sizeButton.classList.add('revealed');
        tutBg.appendChild(arrow);
    break;
    case 3:
        tutDiv.textContent = 'This button filters the images by medium\n(3/4)';
        let medButton = document.querySelector('#medium-holder');
        medButton.classList.add('revealed');
        let arr = createArrow();
        tutBg.appendChild(arr);
    break;
    case 4:
        tutDiv.textContent = 'This button filters the images by subject\n(4/4)';
        let subButton = document.querySelector('#subject-holder');
        subButton.classList.add('revealed');
        let ar = createArrow();
        ar.classList.add('arrow-3');
        tutBg.appendChild(ar);
    break;
    default:
        removeBg();
    break;
    }
}
const removeBg = () => {
        hideAllRevealedHolders();
        const wrap = document.querySelector('.gallery-wrapper');
        const imgHolder = document.querySelector('#img-holder');
        const tutBg = document.querySelector('.help-bg');
        wrap.style.height = '';
        imgHolder.style.overflow = '';
        wrap.style.overflow = '';
        tutBg.remove();
}
const hideAllRevealedHolders = () => {
    let revealed = Array.from(document.querySelectorAll('.revealed'));
    revealed.forEach(el => {
        el.classList.remove('revealed');
    });
}
const createArrow = () => {
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    const point = document.createElement('div');
    point.classList.add('arrow-point');
    const line = document.createElement('div');
    line.classList.add('arrow-line');
    arrow.append(point, line);
    return arrow;
}
const galleryControlsInit = () => {
    const wrap = document.querySelector('.gallery-wrapper');
    wrap.onclick = (e) => hideHolders(e.currentTarget);
    const holders = Array.from(document.querySelectorAll('.button-holder'));
    holders.forEach(holder => {
        holder.onclick = (e) => {
            if(document.querySelector('.help-bg')) return;
            e.stopPropagation();
            holder.classList.toggle('revealed');
        }
    });
    const controlButtons = Array.from(document.querySelectorAll('.control-button'));
    controlButtons.forEach(control => {
        control.onclick = (e) => changeGallery(e);
    });
    const helpButton = document.querySelector('#gallery-controls-help');
    helpButton.onclick = () => {
        helpButton.classList.remove('fa-bounce');
        galleryControlsTutorialSetup();
    }
}
const changeGallery = (e) => {
    const button = e.currentTarget;
    if(!button.classList.contains('current-button') && !button.classList.contains('selected-button')) {
        hideHolders(button);
        const imgHolder = document.querySelector('#img-holder');
        const currentButton = button.parentNode.querySelector('.current-button');
        currentButton.textContent = '';
        const selectedButton = button.parentNode.querySelector('.selected-button');
        selectedButton.classList.remove('selected-button');
        selectedButton.classList.add('unselected-button');
        button.classList.remove('unselected-button');
        button.classList.add('selected-button');
        while(imgHolder.firstChild) {
            imgHolder.removeChild(imgHolder.lastChild);
        }
        imgHolder.textContent = '';
        currentButton.dataset.type = button.dataset.type;
        const iconEl = document.createElement('i');
        iconEl.classList.add('fa-solid');
        switch (button.dataset.type) {
            case 'large':
                iconEl.classList.add('fa-square');
                iconEl.classList.add('fa-lg');
                currentButton.appendChild(iconEl);
                galleryDataObj.size = 'large';
            break;
            case 'medium':
                iconEl.classList.add('fa-square');
                currentButton.appendChild(iconEl);
                galleryDataObj.size = 'medium';
            break;
            case 'small':
                iconEl.classList.add('fa-square');
                iconEl.classList.add('fa-xs');
                currentButton.appendChild(iconEl);
                galleryDataObj.size = 'small';
            break;
            case 'all-mediums':
                currentButton.textContent = 'All';
                galleryDataObj.medium = 'all';
            break;
            case 'watercolor':
                iconEl.classList.add('fa-paintbrush');
                currentButton.appendChild(iconEl);
                galleryDataObj.medium = 'watercolor';
            break;
            case 'pencil':
                iconEl.classList.add('fa-pencil');
                currentButton.appendChild(iconEl);
                galleryDataObj.medium = 'pencil';
            break;
            case 'digital':
                iconEl.classList.add('fa-pen-to-square');
                currentButton.appendChild(iconEl);
                galleryDataObj.medium = 'digital';
            break;
            case 'all-subjects':
                currentButton.textContent = 'All';
                galleryDataObj.subject = 'all';
            break;
            case 'person':
                iconEl.classList.add('fa-person');
                currentButton.appendChild(iconEl);
                galleryDataObj.subject = 'person';
            break;
            case 'dog':
                iconEl.classList.add('fa-dog');
                currentButton.appendChild(iconEl);
                galleryDataObj.subject = 'dog';
            break;
            case 'cat':
                iconEl.classList.add('fa-cat');
                currentButton.appendChild(iconEl);
                galleryDataObj.subject = 'cat';
            break;
            case 'house':
                iconEl.classList.add('fa-house');
                currentButton.appendChild(iconEl);
                galleryDataObj.subject = 'house';
            break;
            default:
                alert('Error: Missing gallery filter');
            break;
        }
        populateGallery();
    }
}
const hideHolders = (butt) => {
    if(document.querySelector('.help-bg')) return;
    const revealedHolders = Array.from(document.querySelectorAll('.revealed'));
    revealedHolders.forEach(holder => {
        if(butt.parentNode !== holder){
            holder.classList.remove('revealed');
        }
    });
}
const populateGallery = () => {
    const imgHolder = document.querySelector('#img-holder');
    const mediumFilteredArray = imgObjArray.filter(obj => {return (obj.medium===galleryDataObj.medium) || (galleryDataObj.medium==='all')});
    const subjectAndMediumFilteredArray = mediumFilteredArray.filter(obj => {return (obj.subject[0]===galleryDataObj.subject) || (obj.subject[1] === galleryDataObj.subject) || (galleryDataObj.subject==='all')});
    subjectAndMediumFilteredArray.forEach(obj => {
        let butEl = document.createElement('button');
        butEl.classList.add('gallery-img-button');
        let imgEl = document.createElement('img');
        imgEl.src = obj.src;
        imgEl.classList.add('gallery-img');
        switch (galleryDataObj.size) {
            case 'small':
                if(obj.orientation === 'landscape') {
                    butEl.classList.add('small-landscape');
                } else {
                    butEl.classList.add('small-portrait');
                }
                butEl.classList.add('small-gallery-img-button');
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
    if(subjectAndMediumFilteredArray.length === 0) {
        imgHolder.textContent = 'No Results';
    }
}
const addModal = (buttonElement, imgSrc, imgOrientation) => {
    buttonElement.onclick = () => {
        let wrapper = document.querySelector('.gallery-wrapper');
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
        xIcon.onclick = (e) => {
            e.stopPropagation();
            modalBg.remove();
        }
    }
}
