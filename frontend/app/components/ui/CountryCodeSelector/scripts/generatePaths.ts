import * as fs from 'fs';
import * as path from 'path';

// We are generating a TypeScript file that exports an object with the flag image paths

const flagFolderPath: string = path.join(__dirname, '../flags');
const outputFilePath: string = path.join(__dirname, 'flagImages.ts');

// Read all files from the flag folder
const files: string[] = fs.readdirSync(flagFolderPath);

// Create an empty object for the flag mapping
let flagMapping = 'const flagImages: { [key: string]: any } = {\n';

// Loop through each file and generate the mapping
files.forEach((file: string) => {
  const countryCode = file.split('.')[0]; // Assumes file names are like 'us.png'
  flagMapping += `  "${countryCode}": require('app/components/ui/CountryCodeSelector/flags/${file}'),\n`;
});

flagMapping += '};\n\nexport default flagImages;';

// Write the flag mapping to the file
fs.writeFileSync(outputFilePath, flagMapping);
console.log('Flag mapping file generated!');