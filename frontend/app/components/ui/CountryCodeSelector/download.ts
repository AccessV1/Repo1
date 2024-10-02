import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { countries } from './data';
// Example JSON structure with country codes and external flag URLs


const downloadImage = async (url: string, savePath: string): Promise<void> => {
    const response = await axios({
        url,
        responseType: 'stream',
    });

    return new Promise<void>((resolve, reject) => {
        response.data
            .pipe(fs.createWriteStream(savePath))
            .on('finish', () => resolve())
            .on('error', (e: unknown) => reject(e));
    });
};

const saveFlags = async (): Promise<void> => {
    const flagsFolder = path.join(__dirname, 'flags'); // Directory to save flags
    if (!fs.existsSync(flagsFolder)) {
        fs.mkdirSync(flagsFolder); // Create the folder if it doesn't exist
    }

    for (const country of countries) {
        const flagUrl = country.flag;
        const countryCode = country.code.toLowerCase();
        const filePath = path.join(flagsFolder, `${countryCode}.png`);

        try {
            console.log(`Downloading ${country.name}'s flag...`);
            await downloadImage(flagUrl, filePath);
            console.log(`${country.name}'s flag saved!`);

            // Update the JSON object to reference the local path
            country.flag = `./flags/${countryCode}.png`;
        } catch (error) {
            console.error(`Failed to download ${country.name}'s flag:`, error);
        }
    }

    // Save the updated JSON to a new file
    fs.writeFileSync(
        path.join(__dirname, 'updated_countries.json'),
        JSON.stringify(countries, null, 2)
    );
    console.log('Updated JSON file saved!');
};

saveFlags();
