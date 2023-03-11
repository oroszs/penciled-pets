window.addEventListener('load', ()=> {pawsInit()});

const pawsInit = () => {
    let trailTime = createTrail();
    setInterval(() => {
        createTrail();
    }, trailTime);
}
const createTrail = () => {
    let holders = Array.from(document.querySelectorAll('.column-holder'));
    if(holders.length > 1) return;
    const min = 0;
    const max = 360;
    const angle = Math.floor(Math.random() * (max - min)) + min;
    const colHolder = document.createElement('div');
    colHolder.classList.add('column-holder');
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('column');
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('column');
    colHolder.appendChild(leftColumn);
    colHolder.appendChild(rightColumn);
    colHolder.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    let wrap = document.querySelector('.wrapper');
    wrap.prepend(colHolder);
    const pawSpeed = 500;
    let maxPaws, pawSize, size, time;
    let width = window.screen.width;
    let height = window.screen.height;
    if(width >= 700) {
        pawSize = 150;
        size='big';
        time = 8000;
    } else {
        pawSize = 70;
        size='small';
        time = 8000;
    }
    if((angle > 310) || (angle < 50) || (angle > 130 && angle < 230)) {
        maxPaws = Math.ceil(height / pawSize) + 4;
    } else {
        maxPaws = Math.ceil(width / pawSize) + 4;
    }
    colHolder.style.height = `${(pawSize * Math.ceil(maxPaws / 1.5))}px`;
    maxPaws *=2;
    createPaw(colHolder, 'right', pawSpeed, 0, maxPaws, size);
    return time;
}
const createPaw = (holder, side, speed, totalPaws, maxPaws, size) => {
    const animTime = 3000;
    const paw = document.createElement('i');
    paw.classList.add('fa-solid');
    paw.classList.add('fa-paw');
    if(size === 'big') {
        paw.classList.add('fa-2x');
    } else {
    }
    paw.classList.add('pawprint');
    if(side === 'left') {
        paw.classList.add('left-column');
        holder.children[0].prepend(paw);
        side = 'right';
    } else {
        paw.classList.add('right-column');
        holder.children[1].prepend(paw);
        side = 'left';
    }
    paw.animate(
        [{
            color: 'rgba(0, 0, 0, 0)',
            transform: 'scale(.9)'
        },
        {
            color: 'rgba(0, 0, 0, 0.3)',
            transform: 'scale(1)',
            offset: .05
        },
        {
            color: 'rgba(53, 83, 21,.8)',
            transform: 'scale(1.3)',
            offset: .1
        },
        {
            color: 'rgba(53, 83, 21,0)',
            transform: 'scale(1)',
            offset: .9
        },
        {
            color: 'rgba(53, 83, 21,0)'
        }], 
        {
            duration: animTime,
            fill: 'forwards'
        }
    );
    totalPaws++;
    if(totalPaws < maxPaws) {
        setTimeout(() => {createPaw(holder, side, speed, totalPaws, maxPaws, size)}, speed);
    } else {
        holder.remove();
    }
}
