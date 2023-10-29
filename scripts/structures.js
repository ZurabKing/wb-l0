import { formatPrice } from "./helpers.js";

const PAYLOAD_CLASS_BY_WARN = {
  warn: "mobile-price__cart-footer-info--warning",
};

export function getMobileCardStructure(product, isMissing) {
  const {
    id,
    imageUrl,
    isChecked,
    params,
    price,
    name,
    store,
    count,
    payload,
    isFavorited,
  } = product;

  const formattedPrice = {
    new: formatPrice(price.new * count),
    old: formatPrice(price.old * count),
  };

  if (isMissing) {
    return `<div data-id="${id}" class="mobile-price__cart mobile-price__cart--missing">
        <div class="mobile-price__cart-content">
          <div class="mobile-price__cart-main">
            <div class="mobile-price__cart-image-container">
              <img
                src="${imageUrl.colorless}"
                class="mobile-price__cart-image"
                alt="product"
              />
              <label
                class="all-container-checkbox mobile-price__cart-checkbox"
              >
                <input class="card-checkbox" class="checkbox" type="checkbox" ${
                  isChecked ? "checked" : ""
                } />
                <span class="checkmark-checkbox"></span>
              </label>
            </div>
            <div class="mobile-price__cart-main-details">
            <div class="mobile-price__cart-price">
            <span class="mobile-price__cart-price-new">${formattedPrice.new} ${
      price.currency
    }</span>
            <span class="mobile-price__cart-price-old">${formattedPrice.old} ${
      price.currency
    }</span>
          </div>
              <p class="mobile-price__cart-product-name">
                ${name}
              </p>
              ${
                params?.color
                  ? `<p class="mobile-price__cart-product-param">
              <span class="mobile-price__cart-product-param-label"
                >Цвет:
              </span>
              <span class="mobile-price__cart-product-param-value"
                >${params.color}</span
              >
            </p>`
                  : ""
              }
              <p class="mobile-price__cart-product-store">
                ${store}
              </p>
            </div>
          </div>
          <div class="mobile-price__cart-footer">
            <div class="mobile-price__cart-footer-counter">
              <button
                class="mobile-price__cart-counter-minus mobile-price__cart-counter-action mobile-price__cart-counter-item ${
                  count === 1 ? "counter-action--disabled" : ""
                }"
              >
                &minus;
              </button>
              <div
                class="mobile-price__cart-counter-value mobile-price__cart-counter-item"
              >
                ${count}
              </div>
              <button
                class="mobile-price__cart-counter-plus mobile-price__cart-counter-action mobile-price__cart-counter-item ${
                  count === payload?.leftAmount
                    ? "counter-action--disabled"
                    : ""
                }">
                &plus;
              </button>
            </div>
            ${
              payload
                ? `<span
            class="mobile-price__cart-footer-info ${
              PAYLOAD_CLASS_BY_WARN[payload.severity] ?? ""
            }"
          >
          Осталось ${payload.leftAmount} шт.
          </span>`
                : ""
            }
            <div class="mobile-price__cart-actions">
              <button class="heart-btn ${
                isFavorited ? "heart-btn--favorited" : ""
              }">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon-20">
                    <path
                      id="Vector (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </button>
              <button class="delete-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon-20">
                    <g id="Vector">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="black"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }

  if (!isMissing) {
    return `<div data-id="${id}" class="mobile-price__cart">
        <div class="mobile-price__cart-content">
          <div class="mobile-price__cart-main">
            <div class="mobile-price__cart-image-container">
              <img
                src="${imageUrl.color}"
                class="mobile-price__cart-image"
                alt="product"
              />
              <label
                class="all-container-checkbox mobile-price__cart-checkbox"
              >
                <input class="card-checkbox" class="checkbox" type="checkbox" ${
                  isChecked ? "checked" : ""
                } />
                <span class="checkmark-checkbox"></span>
              </label>
              ${
                params?.size
                  ? `<div class="mobile-price__cart-tag">${params.size}</div>`
                  : ""
              }
            </div>
            <div class="mobile-price__cart-main-details">
              <div class="mobile-price__cart-price">
                <span class="mobile-price__cart-price-new">${
                  formattedPrice.new
                } ${price.currency}</span>
                <span class="mobile-price__cart-price-old">${
                  formattedPrice.old
                } ${price.currency}</span>
              </div>
              <p class="mobile-price__cart-product-name">
              ${name}
              </p>
              ${
                params?.color
                  ? `<p class="mobile-price__cart-product-param">
              <span class="mobile-price__cart-product-param-label"
                >Цвет:
              </span>
              <span class="mobile-price__cart-product-param-value"
                >${params.color}</span
              >
            </p>`
                  : ""
              }
              <p class="mobile-price__cart-product-store">${store}</p>
            </div>
          </div>
          <div class="mobile-price__cart-footer">
            <div class="mobile-price__cart-footer-counter">
              <button
                class="mobile-price__cart-counter-minus mobile-price__cart-counter-action mobile-price__cart-counter-item ${
                  count === 1 ? "counter-action--disabled" : ""
                }"
              >
                &minus;
              </button>
              <div
                class="mobile-price__cart-counter-value mobile-price__cart-counter-item"
              >
                ${count}
              </div>
              <button
                class="mobile-price__cart-counter-plus mobile-price__cart-counter-action mobile-price__cart-counter-item ${
                  count === payload?.leftAmount
                    ? "counter-action--disabled"
                    : ""
                }"
              >
                &plus;
              </button>
            </div>
            ${
              payload
                ? `<span
            class="mobile-price__cart-footer-info ${
              PAYLOAD_CLASS_BY_WARN[payload.severity] ?? ""
            }"
          >
          Осталось ${payload.leftAmount} шт.
          </span>`
                : ""
            }
            <div class="mobile-price__cart-actions">
              <button class="heart-btn ${
                isFavorited ? "heart-btn--favorited" : ""
              }">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon-20">
                    <path
                      id="Vector (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </button>
              <button class="delete-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon-20">
                    <g id="Vector">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="black"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>`;
  }
}

export function getDesktopCardStructure(product, isMissing) {
  const {
    id,
    imageUrl,
    isChecked,
    params,
    price,
    name,
    store,
    count,
    payload,
    isFavorited,
    companyName,
  } = product;

  const formattedPrice = {
    new: formatPrice(price.new * count),
    old: formatPrice(price.old * count),
  };

  if (isMissing) {
    return `<div data-id="${id}" class="missing__cart">
    <div class="missing__cart_img-block">
      <img src=${imageUrl.colorless} alt="t-shirt">
      <div class="missing__cart_info-block">
        <p>${name}</p>
        <div class="missing__cart_info-size">
          ${params?.color ? `<span>Цвет: ${params.color}</span>` : ""}
          ${params?.size ? `<span>Размер: ${params.size}</span>` : ""}
        </div>
      </div>
    </div>
    <div class="missing__btn-delete">
      <button class="heart-btn ${isFavorited ? "heart-btn--favorited" : ""}">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="icon-20">
            <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z" fill="black"></path>
          </g>
        </svg>
      </button>
      <button class="delete-btn">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="icon-20">
            <g id="Vector">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"></path>
            </g>
          </g>
        </svg>
      </button>
    </div>
  </div>`;
  }

  if (!isMissing) {
    return `<div data-id="${id}" class="price__cart">
    <div class="price__cart-container">
      <div class="price__cart-block">
        <div class="price__cart-checkbox-img">
          <label class="all-container-checkbox second-checkbox">
            <input class="card-checkbox" class="checkbox" type="checkbox" ${
              isChecked ? "checked" : ""
            }>
            <span class="checkmark-checkbox"></span>
          </label>
          <img class="tshirt-images" src="${imageUrl.color}" alt="t-shirt">
        </div>
        <div class="price__cart-name-block">
          <span class="price__cart-name">${name}</span>
          <div class="price__cart_name-info">
            ${params?.color ? `<span>Цвет: ${params.color}</span>` : ""}
            ${params?.size ? `<span>Размер: ${params.size}</span>` : ""}
          </div>
          <div class="price__cart_wb-block">
            <span class="price__cart-wb">${store}</span>
            <span class="price__cart-wb">${companyName}
              <img src="./assets/icons/info.svg" alt="info"></span>
          </div>
        </div>
      </div>
      <div class="price__number-summ">
        <div class="price__cart-number">
          <div class="price__cart_number-block">
            <button class="decrement-btn price__cart-action ${
              count === 1 ? "counter-action--disabled" : ""
            }">−</button>
            <span class="quantity">${count}</span>
            <button class="increment-btn price__cart-action ${
              count === payload?.leftAmount ? "counter-action--disabled" : ""
            }">+</button>
          </div>
          ${
            payload
              ? `<span class="rest__span">Осталось ${payload.leftAmount} шт.</span>`
              : ""
          }
          <div class="price__cart_heart-block">
            <button class="heart-btn ${
              isFavorited ? "heart-btn--favorited" : ""
            }">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon-20">
                  <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z" fill="black"></path>
                </g>
              </svg>
            </button>
            <button class="delete-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon-20">
                  <g id="Vector">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"></path>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div class="price__cart-summ">
          <h4>${formattedPrice.new} ${price.currency}</h4>
          <span>${formattedPrice.old} ${price.currency}</span>
        </div>
      </div>
    </div>
  </div>`;
  }
}

export function getCounterCardStructure({ imageUrl, count }) {
  return `
    <div class="badge">
      <div class="badge__count-container">
        <span class="badge__count">${count}</span>
      </div>
      <div class="badge__content">
        <img class="count-cards__image" src="${imageUrl.color}" alt="product image">
      </div>
    </div>`;
}
