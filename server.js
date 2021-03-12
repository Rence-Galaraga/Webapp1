const weather = require('weather-js');
weather.find({search: 'Kabacan, PH', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    console.log(JSON.stringify(result, null, 2));
  });

  const express = require('express')
  const app = express()
   

  app.set('view engine','ejs');

  app.listen(3000)

  app.use(express.static('public'));

  app.get('/', function (req, res) {
      weather.find({search: 'Davao, PH', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
   
    console.log(JSON.stringify(result, null, 2));
  
      res.render('index',{weatherDat: result});
    //res.sendFile('./views/index.ejs',{root:__dirname});
});
  })

  app.get('/other', function (req, res) {
      res.render('other');
    //res.sendFile('./views/other.ejs',{root:__dirname});
  })

  app.use((req, res) => {
      res.render('404');
      //res.status(404).sendFile('./views/404.ejs',{root:__dirname});
  })
   
