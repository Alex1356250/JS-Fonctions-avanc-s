// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

const people = ['JoHn', 'ChrISTiana', 'anThoNY', 'MARia', 'jaMeS', 'MIChaEl', 'jeNNIFeR'];

function correctTypo(people) {
    const correctTypo = [];

    for (let i = 0; i < people.length; i++) {
        let firstLetter = people[i].charAt(0).toUpperCase();
        let lowerNameChar = people[i].slice(1).toLowerCase();
        let capitalizedPerson = firstLetter + lowerNameChar;

        correctTypo.push(capitalizedPerson);
    }

    return correctTypo;
}

const result = correctTypo(people);
console.log(result);

