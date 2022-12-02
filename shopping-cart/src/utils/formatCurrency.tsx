const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "inr",
  style: "currency",
});

export default function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}

export function convertToHigher(number: number) {
  return Math.ceil(number);
}

export function convertToLower(number: number) {
  return Math.floor(number);
}

export function roundOff(number: number) {
  return Math.round(number);
}

export function getRandomEntity(
  values: number | object | undefined = undefined
) {
  if (typeof values === "number") return Math.floor(Math.random() * values) + 1;

  if (Array.isArray(values)) {
    return values.at(Math.floor(Math.random() * values.length));
  }
  return Math.floor(Math.random() * 10) + 1;
}
