const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

fs.createReadStream(path.resolve(__dirname, 'email-password-recovery-code.csv'))
    .pipe(csv.parse({ headers: true, delimiter: ';' }))
    .on('error', error => console.error(error))
    .on('data', row => console.log(row))
    .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));