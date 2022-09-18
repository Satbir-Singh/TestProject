const express = require('express'); 
const app = express();


app.post('/',function(req,res){
    return res.json(200,{
        message:`hello`
    })
})

app.get();


app.get('/getData',function(req,res){
    return res.json(200,{
        message:`get your data`
    })
})

app.listen(8000,function(err){
    if(err) throw err;
    console.log(`Server is running on port 8000`);
})