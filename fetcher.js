const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);
let url = args[0];
let filePath = args[1];
request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
  // to write the file
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  });
});

console.log("file written successfully");
