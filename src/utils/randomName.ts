export function generateRandomFirstName(): string {
    const firstNames = ["John", "Jane", "Alice", "Bob", "Charlie", "Emma", "Liam", "Sophia", "Noah", "Olivia"];
    const randomIndex = Math.floor(Math.random() * firstNames.length);
    return firstNames[randomIndex];
  }
  
  const randomFirstName = generateRandomFirstName();
  