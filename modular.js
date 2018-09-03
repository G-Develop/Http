var https = require('https');

function getAndPrintHTMLChunks (options) {


  /* Add your code here */
  https.get(options, function (response) {
    // let body = [];
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      // body.push(chunk);
      console.log(`Data Chunk, ${chunk} \n`);
    });
    response.on('end', function() {
      console.log("### Response stream complete. ### ")
    })
  });

}

var options = {
  host:'sytantris.github.io',
  path:'/http-examples/step3.html'
};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTMLChunks(options);


/*request is not a function it is just a get or post etc.
 the response is a function that you can use logic to
decide what to do with either your response if your the
server, or the server's (API) response if you are the
client. */
