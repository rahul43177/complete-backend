import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.get("/getProducts", function (req, res) {
//   const nameArr =["Rahul" , "Mishra" , "Rohan"]
//   const individualName = nameArr.map((el)=> el + " Mishra")
//   res.send(individualName);
    
//     res.send({status : true , name : "Rahul Mishra"})
    res.json({status : true , name : "Rahul Mishra"})
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
