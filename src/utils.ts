import fs from 'node:fs';

export const readFileIntoArray = (filePath: string): string[] => {
    const data = fs.readFileSync(filePath, 'utf8');
    const dataArray = data.split('\n');
    return dataArray;
};