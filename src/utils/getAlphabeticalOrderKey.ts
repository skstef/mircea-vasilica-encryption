export function getAlphabeticalOrderKey(str: string): number[] {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabeticalPosition: number[] = [];

  // Convert to lowercase to handle case sensitivity
  const lowerCaseStr = str.toLowerCase();

  // Check for duplicate letters
  const uniqueLetters = new Set<string>();
  for (const char of lowerCaseStr) {
    if (uniqueLetters.has(char)) {
      throw new Error("The key contains duplicate letters.");
    }
    uniqueLetters.add(char);
  }

  // Calculate alphabetical positions
  for (const char of lowerCaseStr) {
    const position = alphabet.indexOf(char) + 1; // Find position in alphabet (index + 1)
    if (position > 0) {
      alphabeticalPosition.push(position);
    } else {
      throw new Error("The key contains non-alphabetic symbols.");
    }
  }

  // Sort positions and map to order
  const sortedArr = [...alphabeticalPosition].sort((a, b) => a - b);
  const orderArr = alphabeticalPosition.map(
    (num) => sortedArr.indexOf(num) + 1
  );

  return orderArr;
}
