import { valida } from "./validar-formulario.js";

const inputs = document.querySelectorAll(".inputs");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        console.log(input)
        valida(input.target);
    });
});