function getAlphabeticalOrderKey(str: string): number[] {
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

export function decrypt(encryptedMessage: string, key: string): string {
  const groupLength = key.length;
  const alphabeticalOrderKey = getAlphabeticalOrderKey(key);

  // Split the encrypted message by the underscore separator
  const columns = encryptedMessage.split("_").filter((col) => col.length > 0);

  // Calculate the number of rows in our original matrix
  const numRows = columns[0].length;

  // Initialize empty matrix to store characters
  const matrix: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    matrix.push(Array(groupLength).fill(""));
  }

  // Fill the matrix using the encrypted columns
  for (let i = 0; i < groupLength; i++) {
    const originalColumnIndex = alphabeticalOrderKey.indexOf(i + 1);
    const column = columns[i];

    for (let j = 0; j < numRows; j++) {
      matrix[j][originalColumnIndex] = column[j] || "";
    }
  }

  // Reconstruct the original message
  let decryptedMessage = "";
  for (const row of matrix) {
    decryptedMessage += row.join("");
  }

  // Remove padding asterisks
  return decryptedMessage.replaceAll("*", " ");
}
