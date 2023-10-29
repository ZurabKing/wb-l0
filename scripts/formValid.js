//Вспылытие label при наведении
const inputContainers = document.querySelectorAll(
  ".delivery__validate_input-container"
);

inputContainers.forEach((container) => {
  const input = container.querySelector("input");
  const label = container.querySelector("label");

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      label.style.top = "-20px";
      label.style.fontSize = "13px";
      removeError(input);
    } else {
      label.style.top = "0px";
      label.style.fontSize = "16px";
    }
  });
});

//Валидация инпутов формы
function validationForm(form) {
  let result = true;

  function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains("error")) {
      parent.querySelector(".error-span").remove();
      parent.classList.remove("error");
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorSpan = document.createElement("p");
    errorSpan.classList.add("error-span");
    const innSpan = document.querySelector(
      ".delivery__validate_input-container-p"
    );
    innSpan.style.display = "none";
    errorSpan.textContent = text;
    parent.classList.add("error");

    parent.append(errorSpan);

    //Функция для обработки ошибки Input
    function getFieldName(inputId) {
      const fieldNames = {
        name: "Укажите имя",
        surname: "Введите фамилию",
        email: "Проверьте адрес электронной почты",
        phone: "Формат: +9 999 999 99 99",
        inn: "Проверьте ИНН",
      };

      return fieldNames[inputId] || inputId;
    }
  }

  //Функция для обработки ошибки пустого Input
  function getFieldEmptyName(inputId) {
    const fieldNames = {
      name: "Укажите имя",
      surname: "Введите фамилию",
      email: "Укажите электронную почту",
      phone: "Укажите номер телефона",
      inn: "Укажите ИНН",
    };

    return fieldNames[inputId] || inputId;
  }

  const inputElems = document.querySelectorAll(".delivery__validate_input");
  const emailRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  inputElems.forEach((input) => {
    removeError(input);

    if (input.dataset.required == "true" && input.value == "") {
      const fieldName = getFieldEmptyName(input.getAttribute("id"));
      createError(input, fieldName);
      result = false;
    } else if (
      input.getAttribute("id") === "phone" &&
      input.value.replace(/\D/g, "").length !== 11
    ) {
      createError(input, "Формат: +7 999 999 99 99"); // Вывод ошибки для неправильного формата телефона
      result = false;
    } else if (
      input.getAttribute("id") === "email" &&
      !emailRegExp.test(input.value)
    ) {
      createError(input, "Проверьте адрес электронной почты"); // Вывод ошибки для неправильного формата email
      result = false;
    } else if (
      input.getAttribute("id") === "inn" &&
      input.value.replace(/\D/g, "").length !== 14
    ) {
      const innSpan = document.querySelector(
        ".delivery__validate_input-container-p"
      );
      innSpan.style.display = "none";
      createError(input, "Проверьте ИНН");
      result = false;
    }
  });

  return result;
}

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validationForm(this) == true) {
    alert("форма отправилась");
  }
});
