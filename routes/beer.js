const router = require('express').Router();
var request = require('request');

router.get('/',(req,res)=>{
    try{
        request('https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json', function (error, response, body1) {
            if (!error && response.statusCode == 200) {
                // console.log(body1[1])
                var obj1 = JSON.parse(body1);
            }
            
            request(' https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json', function (error, response, body2) {
                if (!error && response.statusCode == 200) {
                    // console.log(body2)
                    var obj2 = JSON.parse(body2);
                }

                res.render('beer.ejs',{
                    images: obj2,
                    products: obj1
                });
            });
        })
    }catch(err){
        throw err;
    }

});

module.exports = router;
