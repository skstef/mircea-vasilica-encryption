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

function divideString(str: string, groupSize: number): string[][] {
  const result: string[][] = [];
  let currentIndex = 0;

  while (currentIndex < str.length) {
    // Slice the string into groups of the specified size
    let slice = str
      .slice(currentIndex, currentIndex + groupSize)
      .replaceAll(" ", "*");

    // If the group is not full, add spaces to the end
    if (slice.length < groupSize) {
      slice = slice.padEnd(groupSize, "*");
    }

    const charGroup = slice.split("");
    result.push(charGroup);
    currentIndex += groupSize;
  }

  return result;
}

export const encrypt = (message: string, key: string) => {
  const groupLength = key.length;

  const matrix: string[][] = divideString(message, groupLength);
  const alphabeticalOrderKey = getAlphabeticalOrderKey(key);

  let encryptedMessage = "";

  for (let i = 0; i < groupLength; i++) {
    const currentColumn = alphabeticalOrderKey.indexOf(i + 1);

    matrix.forEach((charGroup) => {
      encryptedMessage += charGroup[currentColumn];
    });

    encryptedMessage += "_";
  }

  return encryptedMessage;
};
