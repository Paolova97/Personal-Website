document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const enterButton = document.getElementById('enter-button');
    const body = document.body; 

    body.style.overflow = 'hidden';

    enterButton.addEventListener('click', () => {
        splashScreen.style.opacity = '0';
        body.style.overflow = ''; 
    });

    splashScreen.addEventListener('transitionend', () => {
        if (splashScreen.style.opacity === '0') {
            splashScreen.style.display = 'none';
        }
    });
});