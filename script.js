const output = document.querySelector(".calculator__output");
const buttons = document.querySelectorAll(".calculator__key");

let calculation = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.textContent.trim();

        if (value === "AC") {
            calculation = "";
            output.textContent = "0";
        }

        else if (value === "=") {
            try {
                calculation = calculation.replace("×", "*");
                calculation = calculation.replace("÷", "/");

                output.textContent = eval(calculation);
            } catch {
                output.textContent = "Error";
                calculation = "";
            }
        }

        else {
            calculation += value;
            output.textContent = calculation;
        }
    });
});
