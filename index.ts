const button = document.querySelector(".button") as HTMLButtonElement;
const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
export const screen = document.querySelector(".screen") as HTMLInputElement;

const addNumbers = (a: number, b: number) => {
    screen.innerHTML = (a + b).toString();
}
button.addEventListener("click", () => 
    addNumbers(parseFloat(firstInput.value), parseFloat(secondInput.value))
);
