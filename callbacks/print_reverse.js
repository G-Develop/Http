var getHTML = require('./http-functions');


var options = {
  host:'sytantris.github.io',
  path:'/http-examples/step6/reverse.html'
};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


function printReverse(html){
  let reversed = html.split("").reverse().join("");
  console.log(reversed);
}


getHTML(options, printReverse);