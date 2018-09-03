
var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
     let body = [];
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
       body.push(chunk);
       console.log(body);
    });
    response.on('end', function() {
      console.log("### Response stream complete. ### ")
    })
  });

}

getAndPrintHTMLChunks();


/*request is not a function it is just a get or post etc.
 the response is a function that you can use logic to
decide what to do with either your response if your the
server, or the server's (API) response if you are the
client. */
