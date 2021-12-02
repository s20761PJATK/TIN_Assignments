var fs = require('fs'),
    sys = require('sys');

fs.watch('C:/Users/Michal_/Desktop/testfolder', (eventType, filename) => {
console.log('File changed is: ' + filename);
console.log('------Content------');
fs.readFile('C:/Users/Michal_/Desktop/testfolder/' + filename, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
})