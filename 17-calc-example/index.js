'use strict';

const page = {
    buttons: document.querySelector('.buttons'),
    inputs: document.querySelector('.inputs'),
    answer: document.querySelector('.answer'),
    selectedAction: null,
};

page.buttons.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') return;

    const btn = event.target;
    
    // Если кнопка уже активна, снимаем активность
    if (btn.classList.contains('button-active')) {
        btn.classList.remove('button-active');
        page.selectedAction = null;
        return;
    }

    resetActiveButtons();
    selectButton(btn);
});

function clearForm() {
    resetActiveButtons();
    resetInputs();
}

function resetInputs() {
    page.inputs.querySelectorAll('input').forEach(input => input.value = '');
}

function resetActiveButtons() {
    page.buttons.querySelectorAll('button').forEach(button => {
        button.classList.remove('button-active');
    });
    page.selectedAction = null;
}

function selectButton(button) {
    button.classList.add('button-active');    
    page.selectedAction = button.dataset.action;
}

function showError(message) {
    page.answer.innerText = message;
    page.answer.classList.add('error');
}

function renderResult(result) {
    page.answer.innerText = result;
    page.answer.classList.remove('error'); // Удаляем класс ошибки, если есть результат
    clearForm();
}

function getCalculateFunction(char) {
    const actions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '/': (a, b) => b !== 0 ? a / b : 'Нельзя делить на ноль',
        '×': (a, b) => a * b,
    };
    return actions[char];
}

function submitForm() {
    const inputs = [...page.inputs.querySelectorAll('input')];
    const [input1, input2] = inputs.map(input => Number(input.value));

    if (isNaN(input1) || !input1) {
        return showError('Введите первое число');
    }
    if (isNaN(input2) || !input2) {
        return showError('Введите второе число');
    }
    if (!page.selectedAction) {
        return showError('Выберите операцию');
    }

    const action = getCalculateFunction(page.selectedAction);
    const result = action ? action(input1, input2) : 'Нет такой операции';

    renderResult(`${input1} ${page.selectedAction} ${input2} = ${parseFloat(result.toFixed(2))}`);
};