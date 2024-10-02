import * as fs from 'fs';
import * as path from 'path';
import countries from '../data/countries.json';

// Define the structure of the country object in the JSON
interface Country {
  name: string;
  dial_code: string;
  code: string;
  flag: string;
}

// We are generating a TypeScript file that exports an object with the flag image paths

const flagFolderPath: string = path.join(__dirname, '../flags');
const outputFilePath: string = path.join(__dirname, 'flagImages.ts');

// Read all files from the flag folder
const files: string[] = fs.readdirSync(flagFolderPath);

// Create a string for the flag mapping
let flagMapping = 'const flagImages: { [key: string]: any } = {\n';

// Loop through each country and map the dial code to the corresponding flag
(countries as Country[]).forEach((country) => {
  const file = files.find(f => f.startsWith(country.code.toLowerCase()));
  if (file) {
    const dialCodeWithoutSpaces = country.dial_code.replace(/\s+/g, ''); // Remove spaces from dial code
    flagMapping += `  "${dialCodeWithoutSpaces}": require('app/components/ui/CountryCodeSelector/flags/${file}'),\n`;
  }
});

flagMapping += '};\n\nexport default flagImages;';

// Write the flag mapping to the file
fs.writeFileSync(outputFilePath, flagMapping);
console.log('Flag mapping file generated!');