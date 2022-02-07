const express = require("express");
const path=require("path");
const PORT = process.env.PORT || 3001;
const app=express();
app.use(express.static(path.resolve(__dirname, '../my-demo/build')));

app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())
app.post('/api', (request, res) => {
 
   var length=request.body.fileData.length;
   var outputArray=[];
   for(let i=0;i<length;i++){

    var content=request.body.fileData[i];
    //console.log("File request ",content);

      const { execSync} = require('child_process');
      var fs = require('fs');
      console.log('File content read');
      fs.writeFileSync('text.html', content);
      console.log('File content write');

      let output;

      try{
        output = execSync('html-validate text.html' , { encoding: 'utf-8' });
      }
      catch(e){
        output=e.output[1]
      }
      console.log('The output is:');
      // output=output.substring(output.indexOf("-rule")+5)
      output=output.split("text.html")[1];
      output=output.split("More information")[0];


      if(output.includes("(0 errors")){
        output="Valid HTML file"
      }
      outputArray.push(output);

      //Delete a text.html file
      try {
        fs.unlinkSync('text.html');
        console.log("File is deleted.");
      } catch (error) {
        console.log(error);
      }
      console.log(output);
    }
    res.json({ message:outputArray});
  });

app.post('/filter',(request, res) => {
  var fs = require('fs');
  var content=request.body.fileData;
  //fs.truncate(__dirname + '/src/assets/file.txt', 0, function(){})
  console.log(content);
  fs.writeFileSync(__dirname + '/src/assets/file.txt', JSON.stringify(content));
  //let file='message.txt';
  //fs.truncate(file, 0, function(){})
  // fs.appendFile(file, JSON.stringify(content), (err) => { 
  //   if (err) { 
  //     console.log(err); 
  //   } 
  // });
  // fs.readdir(__dirname, (err, files) => {
  //   if (err)
  //     console.log(err);
  //   else {
  //     console.log("\nCurrent directory filenames:");
  //     files.forEach(file => {
  //       if(file==='file.txt'){
  //         res.json({ message:file});
  //       }
  //     })
  //   }
    let success='selected successfully!!';
    res.json({ message:success});
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, '../my-demo/build', 'index.html')); });
  


