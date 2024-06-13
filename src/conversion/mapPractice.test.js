import {
    addPrefixToEachString,
    capitaliseAllStrings,
    getFullNameForEachAuthor,
    getLengthsOfAllNames,
    getSquaresOfAllNumbers,
    simplifyAllEpisodes,
} from "./mapPractice";
import {} from "./myFunctions";

test("get lengths of names", () => {
    const inputNames = ["ahmed", "bob", "charlie", "anna-zeri"];
    expect(getLengthsOfAllNames(inputNames)).toEqual([5, 3, 7, 9]);
});

test("square all numbers", () => {
    expect(getSquaresOfAllNumbers([1, 2, 10, 5, 6])).toEqual([
        1, 4, 100, 25, 36,
    ]);
});

test("capitalize all strings", () => {
    const greetings = ["hello", "world", "how", "are", "you?"];
    expect(capitaliseAllStrings(greetings)).toEqual([
        "Hello",
        "World",
        "How",
        "Are",
        "You?",
    ]);
});

test("add prefix to strings", () => {
    const colors = ["red", "green", "blue"];
    const expected = ["color-red", "color-green", "color-blue"];
    expect(addPrefixToEachString(colors, "color-")).toEqual(expected);
});

test("create full name for each author", () => {
    const authorObjects = [
        { firstName: "Charlotte", secondName: "Brontë" },
        { firstName: "Toni", secondName: "Morrison" },
        { firstName: "Jane", secondName: "Austen" },
        { firstName: "Margaret", secondName: "Atwood" },
        { firstName: "Virginia", secondName: "Woolf" },
        { firstName: "Alice", secondName: "Walker" },
        { firstName: "Emily", secondName: "Brontë" },
        { firstName: "Zadie", secondName: "Smith" },
    ];

    const expectedNames = [
        "Charlotte Brontë",
        "Toni Morrison",
        "Jane Austen",
        "Margaret Atwood",
        "Virginia Woolf",
        "Alice Walker",
        "Emily Brontë",
        "Zadie Smith",
    ];

    const actualOutput = getFullNameForEachAuthor(authorObjects);
    expect(actualOutput).toEqual(expectedNames);
    //check the returned reference is to a different array
    expect(actualOutput).not.toBe(authorObjects);
});

test("simplify all episodes", () => {
    const inputEpisodes = [
        {
            id: 4998,
            name: "Simpsons Roasting on an Open Fire",
            season: 1,
            number: 1,
            runtime: 30,
            rating: { average: 7.7 },
        },
        {
            id: 4999,
            name: "Bart the Genius",
            season: 1,
            number: 2,
            runtime: 30,
            rating: { average: 7.3 },
        },
        {
            id: 5000,
            name: "Homer's Odyssey",
            season: 1,
            number: 3,
            runtime: 30,
            rating: { average: 7.5 },
        },
        {
            id: 5001,
            name: "There's No Disgrace Like Home",
            season: 1,
            number: 4,
            runtime: 30,
            rating: { average: 7.7 },
        },
    ];

    const actualOutput = simplifyAllEpisodes(inputEpisodes);
    const expectedOutput = [
        { title: "Simpsons Roasting on an Open Fire", rating: 7.7 },
        { title: "Bart the Genius", rating: 7.3 },
        { title: "Homer's Odyssey", rating: 7.5 },
        { title: "There's No Disgrace Like Home", rating: 7.7 },
    ];
    expect(actualOutput).toEqual(expectedOutput);
    //check it's a different array than the input
    expect(actualOutput).not.toBe(inputEpisodes);
});
