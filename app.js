const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("hi");
});
app.listen(3000,"0.0.0.0",()=>{  
    console.log('listening on 3000');
}
)