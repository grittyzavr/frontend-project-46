import * as fs from 'fs';

export default (fileOne, fileTwo) => {
    let objectOne = JSON.parse(fs.readFileSync(fileOne));
    let objectTwo = JSON.parse(fs.readFileSync(fileTwo));
    console.log(objectOne);
    console.log(objectTwo);
}