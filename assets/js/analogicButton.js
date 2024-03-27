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

button.addEventListener('click', function(){
    const divs = document.querySelectorAll('.analogicOn, .analogicOff' );
    divs.forEach(function(div){ // forEach itera sobre cada Div do querySelector
        if (div.classList.contains('analogicOn')){  
            button.innerText = 'Relógio Digital'
        } else {
            button.innerText = 'Relógio Analógico'
        }
    })
})