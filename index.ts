let lucky = '23';

let jack = 'JackJack'

lucky = '234';

type Style = string;

let font: Style;

interface Person {
    first: string,
    last: string,
    salary: number,
    employed: boolean,
    [key: string]: any
}

const person1: Person = {
    first: "John",
    last: "Smith",
    salary: 100_000,
    employed: true

}

