const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output')
};

refs.inputEl.addEventListener('input', spanChange);

// -----------------------version 1
// function spanChange(event) {
//     refs.spanEl.textContent = event.currentTarget.value;
//     if (event.currentTarget.value === "") {
//         spanEl.textContent = 'Anonymous'
//     }
// };

// -----------------------version 2
function spanChange(event) {
    const spanChangeCheck = event.currentTarget.value;
    if (spanChangeCheck.length === 0) {
        return refs.spanEl.textContent = 'Anonymous'
    }
    refs.spanEl.textContent = event.currentTarget.value;
};