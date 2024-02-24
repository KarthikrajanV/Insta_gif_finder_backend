const { Gif } = require("../models/gifModel");

exports.getGif = async(req, res, next)=>{

    const keyword = req.query.keyword;

    const search = keyword? {
        name:{
            $regex:keyword,
            $options:'i'
        }
    } : {};

    const allGifs = await Gif.find(search);
    if(allGifs){
        res.json(allGifs);
    }
    else{
        res.status(404).json({"message":"Cannot get the gifs"})
    }   
}

exports.addGif =  async(req, res, next)=>{
    const {name,gifName,image} = req.body;
    const newGif = new Gif({
        name,gifName,image
    })

    if(name,gifName,image){
        const addedGif = await newGif.save();
        if(addedGif){
            res.json(addedGif);
        }
        else{
            res.status(404).json({"message":"Cannot add the gif"})
        }
    }
    else{
        res.status(404).json({"message":"All the fields are required"})
    }
}


