const urlModel = require('../models/url.model');
const shortId = require('shortid');
const baseUrl = 'http://localhost:3000/url/';

exports.shortTheUrl = async (req, res) => {
  try{
    const longUrl = await req.body.longUrl;
    const urlCode = shortId.generate();
    let data = await urlModel.findOne({longUrl})
  
    if(data){
      res.json({status:"Url Already Exist !", ...data._doc}) // _doc only bring Original Data from MongoDB Documet
    }
    else{
      const shortUrl = baseUrl + urlCode;
  
      urlData = new urlModel({
        longUrl,
        shortUrl,
        urlCode,
      });
      await urlData.save();
      res.json(urlData);
    }
  }
  catch(error){
    console.log(error);
		res.status(500).json('Server Error');
  }
};

exports.redirectToNewUrl = async (req, res) => {
  try {
    const url = await urlModel.findOne({urlCode: req.params.code});

    if (url) {
      console.log("hi","here")
      return res.redirect(url.longUrl);
		} else {
			return res.status(404).json('No URL found');
		}
  }
  catch(error){
    console.log(error);
		res.status(500).json('Error at redirectToNewUrl');
  }
};
