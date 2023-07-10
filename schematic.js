const path = require("path");
const fs = require("fs");

function generateBoilerplateFiles(folderName) {
  const folderPath = path.join(__dirname, `${folderName}`);

  fs.mkdirSync(folderPath);

  const indexFileContent = `export default function testing(input) {
      // Your code here
    }`;

  const testFilePath = path.join(folderPath, "index.test.ts");
  const testFileContent = `import { describe, expect, test } from 'vitest';
        import testing from '.';

        describe('${folderName}', () => {
        test('should pass', () => {
            const input = [];
            const output = null;

            const result = testing(input);

            expect(result).toStrictEqual(output);
        });
        });`;

  const indexFilePath = path.join(folderPath, "index.ts");

  fs.writeFileSync(testFilePath, testFileContent, "utf8");
  fs.writeFileSync(indexFilePath, indexFileContent, "utf8");
}

generateBoilerplateFiles(...process.argv.slice(2));
