import inquirer from 'inquirer';
import qreate from 'qr-image';

import fs from 'fs';
inquirer
  .prompt([
    {"message":"Enter the text to be converted to QR code:","name":"text"},

  ])
  .then((answers) => {
    const url = answers.text;
    const qr_svg = qreate.image(url, { type: 'png' });
    const fileName = 'qrcode.png';
    qr_svg.pipe(fs.createWriteStream(fileName));
    console.log(`QR code saved as ${fileName}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  