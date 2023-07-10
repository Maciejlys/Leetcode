const path = require('path');
const fs = require('fs');

const generateTests = (number) => {
  const boilerplate = `test('should pass', () => {
  const input = null;
  const output = null;
  
  const result = testing(input);
  
  expect(result).toStrictEqual(output);
});\n`;

  return boilerplate.repeat(number);
};

function generateBoilerplateFiles(input) {
  const [folderName, amoutOfTest] = input;
  const folderPath = path.join(__dirname, `src/${folderName}`);

  fs.mkdirSync(folderPath);

  const indexFileContent = `export default function testing(input) {
  // Your code here
}`;

  const testFilePath = path.join(folderPath, 'index.test.ts');
  const testFileContent = `import { describe, expect, test } from 'vitest';
import testing from '.';
  
describe('${folderName}', () => {
${generateTests(amoutOfTest || 1)}
});
`;

  const indexFilePath = path.join(folderPath, 'index.ts');

  fs.writeFileSync(testFilePath, testFileContent, 'utf8');
  fs.writeFileSync(indexFilePath, indexFileContent, 'utf8');
}

generateBoilerplateFiles(process.argv.slice(2));
