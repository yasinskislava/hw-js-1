function output() {
    console.log("Hello World!");
}

const btn = document.querySelector("[data-btn]");
btn.addEventListener("click", output);