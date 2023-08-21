const accordionTabs = document.querySelectorAll('.accordion-tab');
const closeIcon = document.querySelector('.close-icon');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-item');
const overlay = document.querySelector('.overlay')

accordionTabs.forEach(tab => {
    const accordionTrigger = tab.querySelector('.accordion-trigger');
    const accordionContent = tab.querySelector('.accordion-item');
    const arrowTrigger = tab.querySelector('.rotate'); 

    accordionTrigger.addEventListener('click', () => {
        accordionContent.classList.toggle('active');
        arrowTrigger.classList.toggle('active');  

        if (arrowTrigger.classList.contains('active')) {
            arrowTrigger.src = '/images/icon-arrow-up.svg';
        } else {
            arrowTrigger.src = '/images/icon-arrow-down.svg';
        }
    });
});

closeIcon.addEventListener('click', () => {
    nav.style.transform = 'translateX(100%)'; 
    overlay.style.opacity = '0' 
});

hamburger.addEventListener('click', () => {
    nav.style.transform = 'translateX(0)';
    overlay.classList.add('active');  
    overlay.style.opacity = '1' 
});