import { getAlphabeticalOrderKey } from "./getAlphabeticalOrderKey";

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
