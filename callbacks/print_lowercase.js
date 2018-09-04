
var getHTML = require('./http-functions');


var options = {
  host:'sytantris.github.io',
  path:'/http-examples/step6/lowercase.html'
};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printlowerCase(html){
  console.log(html.toLowerCase());
}


getHTML(options, printlowerCase);
