const http = require('http');
const fs = require('fs');
const path = require('path');


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
console.log(req.url);    
  if (req.url==="/") {

    const home = path.join(__dirname,'publico', 'home.html');

    //console.log(home);
    
    fs.readFile(home, 'utf-8', (err, data)=>{
        if(err) throw err;
        //console.log(data);
        res.end(data);
    });

  }else{
        var url=req.url;
        console.log('URL SOLICITADA'+url)
        const file = path.join(__dirname,'publico', url);
        console.log(file);
        fs.readFile(file, 'utf-8', (err, data)=>{
            try{                
            //console.log(data);
            res.end(data);
            }catch(err){

            }
            
        });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});