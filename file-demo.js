const fs = require('fs');
const path = require('path');
const home = path.join(__dirname,'publico', 'home.html');
console.log(home);

fs.readFile(home, 'utf-8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});