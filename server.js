const express = require('express');
  const app = express()
  const fetch = require('node-fetch');
  const mongoose = require('mongoose');
  const Blog = require('./models/blogs');

  const db = 'mongodb+srv://rence:rl990731@sacluster.6eq2c.mongodb.net/mydb?retryWrites=true&w=majority';
  mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

  app.set('view engine','ejs');

  

  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(__dirname + '/views'));

 
  app.get('/', function (req, res) {
     res.render('index');
  })

  app.get('/home', function (req, res) {
    Blog.find()
    .then((result) => {
      res.render('home', { data: result})
    })
    .catch((err) => {
      console.log(err);
    })
  });



  app.post('/home', function(req,res){
    var flag;
    var url;
    var tm;
    var dt;
    var str;
    var d
    var t
    var tid

    if (req.body.countryid == "philippines.png") {
      tid = "1"
    }
    else if (req.body.countryid == "egypt.png") {
      tid = "2"
    }
    else if (req.body.countryid == "japan.png") {
      tid = "3"
    }
    else if (req.body.countryid == "canada.png") {
      tid = "4"
    }
    else if (req.body.countryid == "russia.png") {
      tid = "5"
    }
    else{
      tid = req.body.timezone
    }

    if(tid == '1'){
      url = 'http://worldtimeapi.org/api/timezone/Asia/Manila';
      flag = 'philippines.png';

      if (req.body.name != null) {
        const blog = new Blog(req.body);

        blog.save()
    .then((result) => {
      res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
    })
    .catch((err) => {
      console.log(err)
    })

      }

      fetch(url)
      .then(res => res.json())
      .then((out) => {
        tm = out;
        str = JSON.stringify(tm.datetime).replace(/^"(.*)"$/, '$1').split("+");
        dt = str[0].split("T")
        d = new Date(dt[0])
        t = dt[1].split('.')

        Blog.find()
        .then((result) => {
          res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
        })
        .catch((err) => {
          console.log(err);
        })


  })
  .catch(err => { throw err })
    }

    else if(tid == '2'){
      url = 'http://worldtimeapi.org/api/timezone/Africa/Cairo';
      flag = 'egypt.png';

      if (req.body.name != null) {
        const blog = new Blog(req.body);

        blog.save()
    .then((result) => {
      res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
    })
    .catch((err) => {
      console.log(err)
    })

      }

      fetch(url)
      .then(res => res.json())
      .then((out) => {
        tm = out;
        str = JSON.stringify(tm.datetime).replace(/^"(.*)"$/, '$1').split("+");
        dt = str[0].split("T")
        d = new Date(dt[0])
        t = dt[1].split('.')

        Blog.find()
        .then((result) => {
          res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
        })
        .catch((err) => {
          console.log(err);
        })
    //console.log('Checkout this JSON! ', out);
  })
  .catch(err => { throw err });
    }

    else if(tid == '3'){
      url = 'http://worldtimeapi.org/api/timezone/Asia/Tokyo';
      flag = 'japan.png';

      if (req.body.name != null) {
        const blog = new Blog(req.body);

        blog.save()
    .then((result) => {
      res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
    })
    .catch((err) => {
      console.log(err)
    })

      }

      fetch(url)
      .then(res => res.json())
      .then((out) => {
        tm = out;
        str = JSON.stringify(tm.datetime).replace(/^"(.*)"$/, '$1').split("+");
        dt = str[0].split("T")
        d = new Date(dt[0])
        t = dt[1].split('.')

        Blog.find()
        .then((result) => {
          res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
        })
        .catch((err) => {
          console.log(err);
        })
    //console.log('Checkout this JSON! ', out);
  })
  .catch(err => { throw err });
    }

    else if(tid == '4'){
      url = 'http://worldtimeapi.org/api/timezone/America/Toronto';
      flag = 'canada.png';

      if (req.body.name != null) {
        const blog = new Blog(req.body);

        blog.save()
    .then((result) => {
      res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
    })
    .catch((err) => {
      console.log(err)
    })

      }

      fetch(url)
      .then(res => res.json())
      .then((out) => {
        tm = out;
        str = JSON.stringify(tm.datetime).replace(/^"(.*)"$/, '$1').split("+");
        dt = str[0].split("T")
        d = new Date(dt[0])
        t = dt[1].split('.')

        Blog.find()
        .then((result) => {
          res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
        })
        .catch((err) => {
          console.log(err);
        })
    //console.log('Checkout this JSON! ', out);
  })
  .catch(err => { throw err });
    }

    else if(tid == '5'){
      url = 'http://worldtimeapi.org/api/timezone/Europe/Moscow';
      flag = 'russia.png';

      if (req.body.name != null) {
        const blog = new Blog(req.body);

        blog.save()
    .then((result) => {
      res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
    })
    .catch((err) => {
      console.log(err)
    })

      }

      fetch(url)
      .then(res => res.json())
      .then((out) => {
        tm = out;
        str = JSON.stringify(tm.datetime).replace(/^"(.*)"$/, '$1').split("+");
        dt = str[0].split("T")
        d = new Date(dt[0])
        t = dt[1].split('.')

        Blog.find()
        .then((result) => {
          res.render('home', { data: result, time: t[0], date: d.toDateString(), nation: flag })
        })
        .catch((err) => {
          console.log(err);
        })
    //console.log('Checkout this JSON! ', out);
  })
  .catch(err => { throw err });
    }

    console.log(req.body);

  });

  
  
  
  app.get('/create', function (req, res) {
    res.render('create');
})


  app.post('/create', function(req,res){
    var nationality

    if (req.body.countryid == "philippines.png") {
      nationality = "Philippine"
    }
    else if (req.body.countryid == "egypt.png") {
      nationality = "Egyptian"
    }
    else if (req.body.countryid == "japan.png") {
      nationality = "Japanese"
    }
    else if (req.body.countryid == "canada.png") {
      nationality = "Canadian"
    }
    else if (req.body.countryid == "russia.png") {
      nationality = "Russian"
    }
    res.render('create',{nation: req.body.countryid, nat: nationality});
  })

  app.use((req, res) => {
      res.render('404');
  })

 