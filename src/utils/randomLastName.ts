export function generateRandomLastName(): string {
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
  ];
  const randomIndex = Math.floor(Math.random() * lastNames.length);
  return lastNames[randomIndex];
}

// Primer upotrebe
const randomLastName = generateRandomLastName();
