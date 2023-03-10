window.addEventListener('load', ()=> {pawsInit()});

const pawsInit = () => {
    createTrail();
}
const createTrail = () => {
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
    let maxPaws;
    let width = window.screen.width;
    let height = window.screen.height;
    if((angle > 310) || (angle < 50) || (angle > 130 && angle < 230) || width < 700) {
        maxPaws = Math.ceil(height / 150) + 2;
    } else {
        maxPaws = Math.ceil(width / 150);
    }
    maxPaws *=2;
    colHolder.style.height = `${(150 * Math.ceil(maxPaws / 4))}px`;
    createPaw(colHolder, 'right', pawSpeed, 0, maxPaws);
}
const createPaw = (holder, side, speed, totalPaws, maxPaws) => {
    const animTime = 3000;
    const paw = document.createElement('i');
    paw.classList.add('fa-solid');
    paw.classList.add('fa-paw');
    paw.classList.add('fa-2x');
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
            color: 'rgba(0,0,0,.7)',
            transform: 'scale(1.3)',
            offset: .1
        },
        {
            color: 'rgba(0,0,0,0)',
            transform: 'scale(1)',
        }], 
        {
            duration: animTime,
            fill: 'forwards'
        }
    );
    totalPaws++;
    if(totalPaws < maxPaws) {
        setTimeout(() => {createPaw(holder, side, speed, totalPaws, maxPaws)}, speed);
    } else {
        holder.remove();
        createTrail();
    }
}
