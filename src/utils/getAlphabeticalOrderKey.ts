export function getAlphabeticalOrderKey(str: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabeticalPosition: (number | null)[] = [];

  for (const char of str.toLowerCase()) {
    // Convert to lowercase to handle case sensitivity
    const position = alphabet.indexOf(char) + 1; // Find position in alphabet (index + 1)
    alphabeticalPosition.push(position > 0 ? position : null); // Push position or null if character is not found
  }

  const sortedArr = [...alphabeticalPosition].sort((a, b) => a! - b!);
  const orderArr = alphabeticalPosition.map(
    (num) => sortedArr.indexOf(num) + 1
  );

  return orderArr;
}
