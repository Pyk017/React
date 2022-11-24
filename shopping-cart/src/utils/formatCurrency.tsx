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
