export function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10);
  return `${randomString}@mail.com`;
}

const randomEmail = generateRandomEmail();
