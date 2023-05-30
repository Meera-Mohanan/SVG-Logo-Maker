// Import classes to test
const { Triangle, Circle, Square } = require("./shapes");

//test case for triangle
describe("Triangle", () => {
    test('should return logo with user choice of text,text color and shapecolor', () => {
        const triangle = new Triangle('TRI', 'red', 'white');
        console.log(triangle.render());
        expect(triangle.render()).toEqual(`<svg width="300" height="200" version="1.1"  xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="white"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="red">TRI</text>
        </svg>`
        );
    });
});

describe("Circle", () => {
    test('should return logo with user choice of text,text color and shapecolor', () => {
        const circle = new Circle('CRC', 'blue', 'white');
        console.log(circle.render());
        expect(circle.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="white" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="blue">CRC</text>
        </svg>`
        );
    });
});

describe("Square", () => {
    test('should return logo with user choice of text,text color and shapecolor', () => {
        const square = new Square('SQR', 'green', 'white');
        console.log(square.render());
        expect(square.render()).toEqual(`<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="white"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="green">SQR</text>
        </svg>`
        );
    });
});