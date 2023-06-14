let c = 0;
function output() {
    c++;
    console.log(`You clicked ${c} times`)
}

const btn = document.querySelector("[data-page]");
btn.addEventListener("click", output);