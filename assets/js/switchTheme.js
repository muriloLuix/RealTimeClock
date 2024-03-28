document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeColor');

    button.addEventListener('click', function () {
        const bodies = document.querySelectorAll('.green, .black');
        const btnSwitch = document.querySelectorAll('.btnSwitch, .btnSwitch_Black')
        const btnAnalogic = document.querySelectorAll('.toggleButton, .toggleButton_Black')

        bodies.forEach(function(body){
            body.classList.toggle('black');
            body.classList.toggle('green');
        });
        btnSwitch.forEach(function(btn){
            btn.classList.toggle('btnSwitch');
            btn.classList.toggle('btnSwitch_Black');
        });
        btnAnalogic.forEach(function(btnA){
            btnA.classList.toggle('toggleButton');
            btnA.classList.toggle('toggleButton_Black');
        });
    });
});