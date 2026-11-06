import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
       const today = new Date();
       const day = today.getDay();

       //console.log(day);
     let type = "a weekday";
     let adv ="it's time to work hard";

     if(day === 0 || day === 6){
        let type = "a weekday";
        let adv = "it's time to work  hard";
     }
   
    res.render("index.ejs", {
        dayType: "a weekday ", 
        advice:"es hora de trabajar duro" });
 });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});