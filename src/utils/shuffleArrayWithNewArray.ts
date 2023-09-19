export default function shuffleArrayWithNewArray(array: string[], stringToInsert: string): string[] {
    // Create a new array to store the shuffled elements.
    const shuffledArray = [...array, stringToInsert];

    // Shuffle the array using the Fisher-Yates algorithm.
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[randomIndex];
        shuffledArray[randomIndex] = temp;
    }

    // Return the shuffled array.
    return shuffledArray;
}