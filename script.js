document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');
    let input = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (buttonText === 'AC') {
                input = '';
                inputBox.value = '';
            } else if (buttonText === 'DEL') {
                input = input.slice(0, -1);
                inputBox.value = input;
            } else if (buttonText === '=') {
                try {
                    input = eval(input).toString();
                } catch {
                    input = 'Error';
                }
                inputBox.value = input;
            } else {
                if (input === 'Error') {
                    input = '';
                }
                input += buttonText;
                inputBox.value = input;
            }
        });
    });
});
