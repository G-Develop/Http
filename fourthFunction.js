var https = require('https');

function getHTML (options, callback) {


  /* Add your code here */
  https.get(options, function(response) {
    let body = [];
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      body.push(chunk);
      printHTML(body[0]);
    });
    response.on('end', function() {
      console.log("### Response stream complete. ### ")
    })
  });

}

function printHTML (html) {
  console.log(html);
}


var options = {
  host:'sytantris.github.io',
  path:'/http-examples/step4.html'
};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


getHTML(options);


/*request is not a function it is just a get or post etc.
 the response is a function that you can use logic to
decide what to do with either your response if your the
server, or the server's (API) response if you are the
client. */
