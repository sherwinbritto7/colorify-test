import getColors from 'get-image-colors';
import path from 'path';

getColors(path.join(process.cwd(), 'public', 'logo.jpg')).then(colors => {
  console.log('Colors from logo.jpg:');
  colors.forEach(color => {
    console.log(color.hex());
  });
}).catch(err => console.error(err));
