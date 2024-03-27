const button = document.getElementById('analogic');

button.addEventListener('click', function() {
    const divs = document.querySelectorAll('.analogicOn, .analogicOff' );
    divs.forEach(div => {
        div.classList.toggle('analogicOn');
        div.classList.toggle('analogicOff');
    });

    const clocks = document.querySelectorAll('.relogio, .relogioOff');
    clocks.forEach(clock => {
        clock.classList.toggle('relogioOff');
        clock.classList.toggle('relogio');
    });
    
});