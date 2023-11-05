const Inputs = document.querySelectorAll("fieldset.product-form__input input");

const insertHTML = document.querySelector("fieldset.product-form__input .selected-value");
insertHTML.textContent = Inputs[0].value;

Inputs.forEach((input) => {
  input.addEventListener("change", () => {
    insertHTML.textContent = input.value;
  });
});
