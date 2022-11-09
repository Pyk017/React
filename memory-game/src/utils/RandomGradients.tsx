export function randomGradient() {
  let hexCode = "#";
  let hexString = "0123456789abcdef";

  let i = 0;

  while (i++ < 6) {
    hexCode += hexString[Math.floor(Math.random() * hexString.length)];
  }
  return hexCode;
}
