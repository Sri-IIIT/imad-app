var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One | Sri',
        heading: 'Article One',
        date: 'Aug 24, 2017',
        content: `
            <p>
                This is content of the Article One. This is content of the Article One. This is content of the Article One. This is content of the Article One.
            </p>
            <p>
                This is content of the Article One. This is content of the Article One. This is content of the Article One. 
            </p>
            <p>
                This is content of the Article One. This is content of the Article One. 
            </p>            
        `
    },
    'article-two': {
        title: 'Article Two | Sri',
        heading: 'Article Two',
        date: 'Aug 24, 2017',
        content: `
            <p>
                This is content of the Article Two. This is content of the Article Two. This is content of the Article Two. This is content of the Article Two.
            </p>
            <p>
                This is content of the Article Two. This is content of the Article Two. This is content of the Article Two. 
            </p>
            <p>
                This is content of the Article Two. This is content of the Article Two. 
            </p>            
        `
    },
    'article-three': {
        title: 'Article Three | Sri',
        heading: 'Article Three',
        date: 'Aug 24, 2017',
        content: `
            <p>
                This is content of the Article Three. This is content of the Article Three. This is content of the Article Three. This is content of the Article Three.
            </p>
            <p>
                This is content of the Article Three. This is content of the Article Three. This is content of the Article Three. 
            </p>
            <p>
                This is content of the Article Three. This is content of the Article Three. 
            </p>            
        `
    }
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var hmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    <h3>${heading}</h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}            
                </div>
            </div>
        </body>
    </html>
    `;
    return hmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-four', function (req, res) {
  res.send("Article Four requested and it's on the way..!");
});

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
