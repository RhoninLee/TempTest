import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';

// Read html file to string by Read File, that will be save into RAM. Choose FileStream or FileRequest to improve the performance.
let f_path = path.resolve('../TempTest/test/test.html');
const html_data = fs.readFileSync(f_path, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    data.toString();
});
console.log(html_data);

// Load html string to cheerio instance
const $ = cheerio.load(html_data);

// Output text by different selector
console.log($('p').text());
console.log($('.li1').text());
console.log($('#li3').text());
