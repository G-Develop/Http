var https = require('https');

module.exports = function getHTML (options, callback) {
    /* Your code here */
    https.get(options, function(response) {
      let body = "";
      response.setEncoding('utf8');
      response.on('data', function(chunk) {
        body += (chunk);
        callback(body);
      });
      response.on('end', function() {
        console.log("### Response stream complete. ### ")
      })
    });


};

// function printHTML (html) {
//   console.log(html);
// }
