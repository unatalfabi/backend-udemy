//inquirer para obtener alguna entrada de usuario.
import inquirer from "inquirer";
import qr from "qr-image";
import fs, { writeFile } from "fs";
inquirer

.prompt ([
 {message: "type your URL",
     name: "URL"},
 ])
.then ((answers) => {
     const url = answers.URL;
     var qr_svg = qr.image(url);
     qr_svg.pipe(fs.createWriteStream("./qr_img.png"));

     fs.writeFile("URL.txt", url, (err) =>{
        if (err) throw err;
        console.log("the file has been saved!");
     });





 })



.catch((error)=>{
    if (error.isTtyError){



    } else{

    }
}
);