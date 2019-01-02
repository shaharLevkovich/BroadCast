var mongoose = require('mongoose');
const connection=require('./db');
const Show=require('./show');


module.exports={
    async getAllShows(req, res, next){
            const result=await Show.find({})

            if(result.length===0) res.send("No results found, please try again");
            else if(result.length>0) res.json(result);
            else res.status(404).send('not found');  
    },
    async updateShow(req,res,next){
            const {id=null, name=null}=req.body;
            const result= await Show.findOneAndUpdate({id},{$set:{name}},{})

            if(result.length===0) res.send("No results found, please try again");
            else if(result.length>0) res.json(result);
            else res.status(404).send('not found');
    },
    async getShowByIdName(req, res, next){
            const {id=null, name=null}=req.params
            const result = await Show.find({id,name});

            if(result.length===0) res.send("No results found, please try again");
            else if(result.length>0) res.json(result);
            else res.status(404).send('not found');
    },
    mainMenu(req,res,next){
        return res.send(`<!DOCTYPE html>
                        <html>
                        <head>
                                <title>Not Found</title>
                        </head>
                        <body>
                                <div style="font-size: 100px; text-align: center;">Not Found</div>
                                <div style="font-size: 50px; text-align: center;">The document you requested couldn't be found. Please try again</div>
                        </body>
                        </html>
                        `
                      );
    }
}