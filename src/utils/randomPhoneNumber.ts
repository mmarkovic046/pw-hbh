export function generateRandomPhoneNumber() {
  const prefix = "060";
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  return `${prefix}${randomNumber}`;
}
const randomPhoneNumber = generateRandomPhoneNumber();
