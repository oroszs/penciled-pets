window.onload = () => {
    faqInit();
}
const faqInit = () => {
    const faqButtons = Array.from(document.querySelectorAll('.faq-button'));
    faqButtons.forEach(but => {
        but.onclick = (e) => e.currentTarget.parentNode.children[1].classList.toggle('faq-expanded');
    });
}