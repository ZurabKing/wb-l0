const phoneInput = document.getElementById("phone");

// Функция для форматирования номера телефона
function formatPhoneNumber(event) {
  const input = event.target;
  let value = input.value.replace(/\D/g, ""); // Удаляем все нецифровые символы

  if (value.length === 0) {
    input.value = ""; // Если поле пустое, оставляем его пустым
  } else if (value.length <= 1) {
    input.value = value;
  } else if (value.length <= 4) {
    input.value = `+7 ${value.slice(1)}`;
  } else if (value.length <= 7) {
    input.value = `+7 ${value.slice(1, 4)} ${value.slice(4)}`;
  } else if (value.length <= 9) {
    input.value = `+7 ${value.slice(1, 4)} ${value.slice(4, 7)} ${value.slice(
      7
    )}`;
  } else {
    input.value = `+7 ${value.slice(1, 4)} ${value.slice(4, 7)} ${value.slice(
      7,
      9
    )} ${value.slice(9, 11)}`;
  }
}

phoneInput.addEventListener("input", formatPhoneNumber);

//маска email
