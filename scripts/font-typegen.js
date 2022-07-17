const fs = require("fs");

const content = fs.readFileSync("./public/icons/css/fontello.css", "utf8");
const outputDir = './src/generated/icons';
const outputFile = '/types.ts';

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}


const output = [];
content.split(/\r?\n/).forEach(line =>  {
    if(line.match(/\.icon/)){  
        const match = line.match(/([\w-]+)/gi)[0];
        output.push(`${match.replace(/^icon-/, "").toUpperCase().replace(/-/g,"_")} = '${match}',`)
    }
});

const outputString = `
export enum Icons {
${output.join("\n")}
}`;

fs.writeFile(outputDir + outputFile, outputString, function (err) {
    if (err) return console.log(err);
    console.log('Output '+ outputDir + outputFile + ' successfully');
});