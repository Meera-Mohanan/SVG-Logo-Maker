const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const color = require('color-name');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for logo (please enter 3 characters)',
    validate: (response) => {
      if (response.length > 3) {
        console.log("\n Text must be three characters or less! Please try again ");
        return false;
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter color keyword or a hexadecimal number for the text',
    validate: (response) => {
      if (!isValidColor(response)) {
        console.log('\n Invalid text color! Please enter a valid color keyword or hexadecimal number.');
        return false;
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Select shape of the logo',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter color keyword or a hexadecimal number for the shape',
    validate: (response) => {
      if (!isValidColor(response)) {
        console.log('\n Invalid shape color! Please enter a valid color keyword or hexadecimal number.');
        return false;
      }
      return true;
    }
  }
];

function isValidColor(colorValue) {
  // Check if the color value is a valid color keyword or a valid hexadecimal number
  const hexPattern = /^#([0-9A-Fa-f]{3}){1,2}$/;
  return color[colorValue.toLowerCase()] || hexPattern.test(colorValue);
}

inquirer.prompt(questions)
  .then((response) => {
    const { text, textColor, shapeType, shapeColor } = response;
    generateShapes(text, textColor, shapeType, shapeColor);
  })
  .catch((err) => console.log(err));

function generateShapes(text, textColor, shapeType, shapeColor) {
  let shape;
  switch (shapeType) {
    case 'Triangle':
      shape = new Triangle(text, shapeColor, textColor); // Swap shapeColor and textColor
      break;
    case 'Circle':
      shape = new Circle(text, shapeColor, textColor); // Swap shapeColor and textColor
      break;
    case 'Square':
      shape = new Square(text, shapeColor, textColor); // Swap shapeColor and textColor
      break;
    default:
      console.log('Invalid shape type!');
      return;
  }

  fs.writeFile('logo.svg', shape.render(), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Generated logo.svg!');
    }
  });
}

module.exports = { generateShapes };
