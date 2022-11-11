const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output')
};

refs.inputEl.addEventListener('input', spanChange);

function spanChange(event) {
    refs.spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
        spanEl.textContent = 'Anonymous'
    }
};