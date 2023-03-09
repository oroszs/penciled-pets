window.onload = () => {
    pawsInit();
}

const pawsInit = () => {
    const colHolder = document.querySelector('.column-holder');
    createPaw(colHolder, 'left', 200, 0);
}
const createPaw = (holder, side, speed, totalPaws) => {
    const paw = document.createElement('i');
    paw.classList.add('fa-solid');
    paw.classList.add('fa-paw');
    paw.classList.add('fa-2x');
    paw.classList.add('pawprint');
    if(side === 'left') {
        paw.classList.add('left-column');
        holder.children[0].appendChild(paw);
        side = 'right';
    } else {
        paw.classList.add('right-column');
        holder.children[1].appendChild(paw);
        side = 'left';
    }
    totalPaws++;
    if(totalPaws < 20) {
        setTimeout(() => {createPaw(holder, side, speed, totalPaws)}, speed);
    } else {
        holder.remove();
    }
}