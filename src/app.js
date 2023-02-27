const express = require('express')
const hbs =  require('hbs');
const app =  express();
const port = process.env.PORT || 3000;
const path = require('path');

// console.log(path.join(__dirname,"../templates/views"))
// console.log(path.join(__dirname,"../templates/partials"))
 const data = path.join(__dirname,"../public");
 const template_path = path.join(__dirname, "../templates/views")
 const partials_path = path.join(__dirname, "../templates/partials")



 app.set("view engine","hbs")
 app.set('views',template_path)
 hbs.registerPartials(partials_path)
app.use(express.static(data));

app.get("/",(req,res)=>{
     res.render("index");
});
app.get("/about",(req,res)=>{
     res.render("about");
});
app.get("/weather",(req,res)=>{
     res.render("weather");
});
app.get("*",(req,res)=>{
     res.render("404error",{
          errormeg: "Opps! Page Not Found"
     });
});

app.listen(port,()=>{
     console.log(`Server is running on port  http://localhost:${port}`);
});