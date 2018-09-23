var fs = require("fs")
var filesName = []
//这里的路径很迷
filesName=fs.readdirSync('./db/dbjson');
// console.log(filesName);

module.exports.filesName=filesName
// console.log(querystr("a"));
// console.log(query("A"));
// console.log(querystr(""));