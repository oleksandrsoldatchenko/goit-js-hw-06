const counter = {
    counterValue: 0,
    decrement() {
        this.counterValue -=1;
    },
    increment() {
        this.counterValue +=1;
    },
}; 

const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", function() {
    counter.decrement();
    valueEl.textContent = counter.counterValue;
});

incrementBtn.addEventListener("click", function() {
    counter.increment();
    valueEl.textContent = counter.counterValue;
});