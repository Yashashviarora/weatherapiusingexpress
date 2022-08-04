const express=require("express");
const http=require("node:https");
const app=express();
// https("url");
app.post("/weather",function(req,res){
    // res.send('id: ' + req.query.id);
    const wurl="http://api.openweathermap.org/geo/1.0/direct?q=jaipur&appid=7ec18fe474f8191bb917971b038a1902";

    http.get(wurl,function(res){
        console.log(res);
    });

    const name=req.body.n;
    console.log(name);
    
    res.send("hello");
})
app.listen(3000,function(){
    console.log("hello");
});