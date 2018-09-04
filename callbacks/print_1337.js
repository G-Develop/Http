var getHTML = require('./http-functions');


var options = {
  host:'sytantris.github.io',
  path:'/http-examples/step6/1337.html'
};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};


function printlowerCase(html){
  console.log(html.toLowerCase());
}


getHTML(options, printlowerCase);
