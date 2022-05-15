var fs = require('fs');
var functionName = process.argv[2];

console.log(functionName)

if (!fs.existsSync(functionName)){
    fs.mkdirSync(functionName);
}

fs.writeFile(`${functionName}/${functionName}.js`,
             `function ${functionName}() {}; module.exports = ${functionName};`, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});

fs.writeFile(`${functionName}/${functionName}.test.js`, 
            `const ${functionName} = require('./${functionName}.js');

            const input = [];
            const resultVal = [];
            test('check if solution works', () => {
            expect(${functionName}(input)).toEqual(resultVal);
            });`,
    function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    }
);