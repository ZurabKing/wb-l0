export function formatPrice(price) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
  });

  return formatter.format(price).replace(/[,]/g, " ");
}

export function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }

  n %= 10;
  if (n === 1) {
    return one;
  }

  if (n >= 2 && n <= 4) {
    return two;
  }

  return five;
}
