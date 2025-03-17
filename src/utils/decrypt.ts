import { getAlphabeticalOrderKey } from "./getAlphabeticalOrderKey";

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
