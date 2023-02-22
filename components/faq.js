window.onload = () => {
    faqInit();
}
const faqInit = () => {
    const faqButtons = Array.from(document.querySelectorAll('.faq-button'));
    faqButtons.forEach(but => {
        but.onclick = (e) => expandFaq(e.currentTarget.parentNode.children[1]);
    });
}
const expandFaq = (el) => {
    if(el.classList.contains('in-progress')) {
        return;
    } else {
        el.classList.add('in-progress');
    }
    el.style.height = '';
    el.style.transition = 'none';
    const startHeight = window.getComputedStyle(el).height;
    el.classList.toggle('faq-collapsed');
    const newHeight = window.getComputedStyle(el).height;
    el.style.height = startHeight;
    window.requestAnimationFrame(() => {
        el.style.transition = '';
        window.requestAnimationFrame(() => {
            el.style.height = newHeight;
        });
    });
    el.addEventListener('transitionend', () => {
        el.style.height = '';
        el.removeEventListener('transitionend', this);
        el.classList.remove('in-progress');
    });
}