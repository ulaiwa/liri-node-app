//main.js
// get a reference to your required module
var myModule = require('./module');

// name is a member of myModule due to the export above
var twitterKeys = myModule.twitterKeys;

console.log(twitterKeys);