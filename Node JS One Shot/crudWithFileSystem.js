const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'CRUD');
const filePath = `${dirPath}/fruit.txt`;
fs.writeFileSync(filePath,'This is a simple text file');