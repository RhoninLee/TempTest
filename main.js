import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

let f_path = path.resolve('../TempTest/test/test.html');
const html_data = fs.readFileSync(f_path, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    data.toString();
});
console.log(html_data);

const $ = cheerio.load(html_data);
console.log($('p').text());
console.log($('.li1').text());
console.log($('#li3').text());
