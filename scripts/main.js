import products from "../products.json" assert { type: "json" };
import {
  getMobileCardStructure,
  getDesktopCardStructure,
  getCounterCardStructure,
} from "./structures.js";
import { formatPrice, getNoun } from "./helpers.js";

let productsState = structuredClone(products);

function renderProductsData() {
  const toolbarCartBadge = document.querySelector(
    ".toolbar-item--cart .badge__count-container"
  );
  const toolbarCartCount = toolbarCartBadge.querySelector(".badge__count");
  toolbarCartCount.textContent = productsState.length;

  const headerCartBadge = document.querySelector(
    ".nav__list-item--cart .badge__count-container"
  );
  const headerCartCount = headerCartBadge.querySelector(".badge__count");
  headerCartCount.textContent = productsState.length;

  if (!productsState.length) {
    toolbarCartBadge.classList.add("hidden-content");
    headerCartBadge.classList.add("hidden-content");
  }

  renderCounterCards(productsState, {
    selector: ".count-cards",
  });
  renderCounterCards(productsState, {
    selector: ".count-cards--mobile",
  });

  renderProducts(productsState, {
    selector: ".backet__main-block + .mobile-cards-container",
  });
  renderProducts(productsState, {
    selector: ".missing__block .mobile-cards-container",
    isMissing: true,
  });

  renderProducts(productsState, {
    selector: ".backet__main-block",
    isMobile: false,
  });
  renderProducts(productsState, {
    selector: ".missing__cart-container",
    isMissing: true,
    isMobile: false,
  });

  renderTotalPriceCard(productsState);
}

const mobileCardsContainer = document.querySelector(
  ".backet__main-block + .mobile-cards-container"
);
const mobileMissingCardsContainer = document.querySelector(
  ".basket__block + .mobile-cards-container"
);

function renderTotalPriceCard(products) {
  const totalNewPrice = document.querySelector(".total-new-price");
  const totalOldPrice = document.querySelector(".total-old-price");
  const discount = document.querySelector(".discount");
  const totalProductsCount = document.querySelector(".products-count");
  const totalCartButton = document.querySelector(".total__cart-button");
  const otherCheck = document.querySelector(".other--inp");

  otherCheck.addEventListener("change", function () {
    if (this.checked) {
      totalCartButton.textContent = `Оплатить ${formatPrice(newPrice)} сом`;
    } else {
      totalCartButton.textContent = "Заказать";
    }
  });

  const { newPrice, oldPrice, totalCount } = products.reduce(
    (sum, { price, count }) => {
      sum.newPrice += price.new * count;
      sum.oldPrice += price.old * count;
      sum.totalCount += count;

      return sum;
    },
    { newPrice: 0, oldPrice: 0, totalCount: 0 }
  );

  totalProductsCount.textContent =
    totalCount + " " + getNoun(totalCount, "товар", "товара", "товаров");
  totalNewPrice.textContent = formatPrice(newPrice) + " сом";
  totalOldPrice.textContent = formatPrice(oldPrice) + " сом";
  discount.innerHTML = "&minus;" + formatPrice(oldPrice - newPrice) + " сом";
}

function renderProducts(products, options) {
  const { selector, isMissing = false, isMobile = true } = options;

  const parent = document.querySelector(selector);

  const content = products
    .map((product) => {
      if (isMobile) {
        return getMobileCardStructure(product, isMissing);
      }

      return getDesktopCardStructure(product, isMissing);
    })
    .join("");

  parent.innerHTML = content;
}

function renderCounterCards(products, options) {
  const { selector } = options;

  const parent = document.querySelector(selector);

  const content = products
    .map((product) => getCounterCardStructure(product))
    .join("");

  parent.innerHTML = content;
}

mobileCardsContainer.addEventListener("click", (e) => {
  const { target } = e;
  const productNode = target.closest(".mobile-price__cart");
  const productId = Number(productNode.dataset.id);

  if (target.classList.contains("checkmark-checkbox")) {
    const product = productsState.find(({ id }) => id === productId);
    product.isChecked = !product.isChecked;
  }

  if (target.classList.contains("delete-btn")) {
    productsState = productsState.filter(({ id }) => id !== productId);
  }

  if (target.classList.contains("heart-btn")) {
    const product = productsState.find(({ id }) => id === productId);
    product.isFavorited = !product.isFavorited;
  }

  if (target.classList.contains("mobile-price__cart-counter-action")) {
    const product = productsState.find(({ id }) => id === productId);

    if (target.classList.contains("mobile-price__cart-counter-plus")) {
      product.count++;
    }

    if (target.classList.contains("mobile-price__cart-counter-minus")) {
      product.count--;
    }
  }

  renderProductsData();
});

mobileMissingCardsContainer.addEventListener("click", (e) => {
  const { target } = e;
  const productNode = target.closest(".mobile-price__cart--missing");
  const productId = Number(productNode.dataset.id);

  if (target.classList.contains("delete-btn")) {
    productsState = productsState.filter(({ id }) => id !== productId);
  }

  if (target.classList.contains("heart-btn")) {
    const product = productsState.find(({ id }) => id === productId);
    product.isFavorited = !product.isFavorited;
  }

  renderProductsData();
});

renderProductsData();

// Desktop cards
const desktopCardsContainer = document.querySelector(".backet__main-block");
const desktopMissingCardsContainer = document.querySelector(
  ".missing__cart-container"
);

desktopCardsContainer.addEventListener("click", (e) => {
  const { target } = e;
  const productNode = target.closest(".price__cart");
  const productId = Number(productNode.dataset.id);

  if (target.classList.contains("checkmark-checkbox")) {
    const product = productsState.find(({ id }) => id === productId);
    product.isChecked = !product.isChecked;
  }

  if (target.classList.contains("delete-btn")) {
    productsState = productsState.filter(({ id }) => id !== productId);
  }

  if (target.classList.contains("heart-btn")) {
    const product = productsState.find(({ id }) => id === productId);
    product.isFavorited = !product.isFavorited;
  }

  if (target.classList.contains("price__cart-action")) {
    const product = productsState.find(({ id }) => id === productId);

    if (target.classList.contains("increment-btn")) {
      product.count++;
    }

    if (target.classList.contains("decrement-btn")) {
      product.count--;
    }
  }

  renderProductsData();
});

desktopMissingCardsContainer.addEventListener("click", (e) => {
  const { target } = e;
  const productNode = target.closest(".missing__cart");
  const productId = Number(productNode.dataset.id);

  if (target.classList.contains("delete-btn")) {
    productsState = productsState.filter(({ id }) => id !== productId);
  }

  if (target.classList.contains("heart-btn")) {
    const product = productsState.find(({ id }) => id === productId);
    product.isFavorited = !product.isFavorited;
  }

  renderProductsData();
});

//Функцонал скрытия блоков корзины
const toggleButton = document.querySelector(".select__button");
const selectContentBlock = document.querySelector(".backet__main-block");
const selectMobileContentBlock = document.querySelector(
  ".backet__main-block + .mobile-cards-container"
);

toggleButton.addEventListener("click", () => {
  selectContentBlock.classList.toggle("hidden-content");
  selectMobileContentBlock.classList.toggle("hidden-content");
  toggleButton.classList.toggle("toggle-btn");
});

const toggleDisButton = document.querySelector(".select-dis-button");
const selectDisContentBlock = document.querySelector(
  ".missing__cart-container"
);
const selectMobileDisContentBlock = document.querySelector(
  ".missing__block .mobile-cards-container"
);

toggleDisButton.addEventListener("click", () => {
  selectDisContentBlock.classList.toggle("hidden-content");
  selectMobileDisContentBlock.classList.toggle("hidden-content");
  toggleDisButton.classList.toggle("toggle-btn");
});

// выбор всех чекбоксов
const allCheckboxElem = document.getElementById("myCheckbox");

allCheckboxElem.addEventListener("change", function (e) {
  productsState = productsState.map(({ isChecked, ...product }) => ({
    ...product,
    isChecked: e.target.checked,
  }));

  renderProductsData();
});
