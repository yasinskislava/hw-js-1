let c = 0;
const output = () => {
  c++;
  console.log(`You clicked ${c} times`);
}

const btn = document.querySelector("[data-page]");
btn.addEventListener("click", output);
