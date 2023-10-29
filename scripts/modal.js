const buttonPayElem = document.querySelectorAll(".buttonPay-modal");
const modalPay = document.querySelector(".fixed-overlay");
const closeModalBtn = document.getElementById("closeModal");
const closeIntBtn = document.querySelector(".modal__button");

buttonPayElem.forEach((button) => {
  button.addEventListener("click", () => {
    modalPay.classList.add("active");
  });
});

closeModalBtn.addEventListener("click", () => {
  modalPay.classList.remove("active");
});

closeIntBtn.addEventListener("click", () => {
  modalPay.classList.remove("active");
});

//ModalDelivery

const modalDel = document.querySelector(".fixed-overlay-deliv");
const closeModalBtnDel = document.getElementById("closeModalDel");
const closeIntBtnPay = document.querySelector(".modal__button-del");
const buttonDelElem = document.querySelector(
  ".delivery__method_container-change"
);
const deliveryBtnModal = document.querySelectorAll(".delivery-btn-modal");

deliveryBtnModal.forEach((button) => {
  button.addEventListener("click", () => {
    modalDel.style.display = "block";
  });
});

buttonDelElem.addEventListener("click", () => {
  modalDel.style.display = "block";
});

closeModalBtnDel.addEventListener("click", () => {
  modalDel.style.display = "none";
});

closeIntBtnPay.addEventListener("click", () => {
  modalDel.style.display = "none";
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
