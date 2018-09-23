// const fs = require("fs")
// module.exports = {
//     find(username, password) {
//         let userdata = JSON.parse(fs.readFileSync('./db/adminuser.json'))
//         let um = username,
//             pw = password;
//         for (let i = 0; i < userdata.length; i++) {
//             if (um == userdata[i].username) {
//                 if (pw == userdata[i].password) {
//                     return true
//                 }
//             }
//         }
//         return false
//     }
// }
var test=require("./dbtest")
// console.log(test.querystr("A"));

// console.log(find("Cai","adminCai"));