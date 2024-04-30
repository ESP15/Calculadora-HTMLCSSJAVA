document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.number, .operator, .calculate, .clear, .decimal');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('clear')) {
                display.value = '';
            } else if (this.classList.contains('calculate')) {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                display.value += this.textContent;
            }
        });
    });
});