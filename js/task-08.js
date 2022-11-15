const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

// -----------------------version 1
// function onFormSubmit(event) {
//     event.preventDefault();

//     const {
//         elements: { email, password },
//     } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//         return alert("Login or password fields are not filled");
//     }

//     const result = {
//         email: email.value,
//         password: password.value };
//     event.currentTarget.reset();
// };


// -----------------------version 2
function onFormSubmit(event) {
    event.preventDefault();

    const onFormSubmitEl = event.currentTarget.elements;
    const emailEl = onFormSubmitEl.email.value;
    const passwordEl = onFormSubmitEl.password.value;

    if (onFormSubmitEl.email.value === "" || onFormSubmitEl.password.value === "") {
        return alert("Login or password fields are not filled");
    }

    const result = {
        emailEl,
        passwordEl,
    };

    console.log(result);

    event.currentTarget.reset();
};