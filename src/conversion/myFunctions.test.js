import {
    findFirstLongString,
    findFirstOddNumber,
    findLastLongString,
    findAllLongStrings,
    findAllOddNumbers,
    findAllTheStrings,
    findAllPeopleWithALongName,
    areAllNumbersOdd,
    areAllStringsLong,
} from "./myFunctions";

test("find first long string", () => {
    const inputNames = ["ahmed", "bob", "charlie", "anna-zeri"];
    expect(findFirstLongString(inputNames)).toEqual("charlie");
});
test("find first long string when there are none", () => {
    const inputNames = ["ahmed", "bob", "chloe"];
    expect(findFirstLongString(inputNames)).toEqual(undefined);
});

test("find first odd number", () => {
    expect(findFirstOddNumber([8, 7, 4, 5, 2, 3])).toEqual(7);
    expect(findFirstOddNumber([3])).toEqual(3);
    expect(findFirstOddNumber([2, 6, 4])).toEqual(undefined);
});

test("find last long string", () => {
    const inputNames = ["ahmed", "bob", "charlie", "anna-zeri", "abdi"];
    expect(findLastLongString(inputNames)).toEqual("anna-zeri");
});

test("find all long strings", () => {
    const inputNames = ["ahmed", "bob", "charlie", "anna-zeri", "abdi"];
    expect(findAllLongStrings(inputNames)).toEqual(["charlie", "anna-zeri"]);
});
test("find all long strings - when there are none", () => {
    const inputNames = ["anya", "bob", "dev"];
    expect(findAllLongStrings(inputNames)).toEqual([]);
});

test("find all odd numbers", () => {
    expect(findAllOddNumbers([8, 7, 4, 5, 2, 3])).toEqual([7, 5, 3]);
});

test("find all the strings", () => {
    expect(
        findAllTheStrings([8, "seven", -4, true, "false", 3.14, "3.14"])
    ).toEqual(["seven", "false", "3.14"]);

    expect(findAllTheStrings([8, true, 1.2, { name: "potato" }])).toEqual([]);
});

test("find people with at least one long name", () => {
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
    expect(findAllPeopleWithALongName(authorObjects)).toEqual([
        { firstName: "Charlotte", secondName: "Brontë" },
        { firstName: "Toni", secondName: "Morrison" },
        { firstName: "Margaret", secondName: "Atwood" },
        { firstName: "Virginia", secondName: "Woolf" },
    ]);
});

test("are ALL the numbers odd?", () => {
    expect(areAllNumbersOdd([3, 9, 7, 7, 2, 1])).toEqual(false);
    expect(areAllNumbersOdd([3, 9, 7, 7, 21, 1])).toEqual(true);
});

test("are ALL the strings long?", () => {
    expect(areAllStringsLong(["Charlotte", "Margaret", "Virginia"])).toEqual(
        true
    );
    expect(
        areAllStringsLong(["Charlotte", "Toni", "Margaret", "Virginia"])
    ).toEqual(false);
});
