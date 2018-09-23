var db = require("./dbdata")
filesName = db.filesName
// console.log(filesName);
function createStateFilter(str) {
    return (filesName) => {
        return (filesName.toLowerCase().indexOf(str.toLowerCase()) === 0);
    }
}
function querystr(str) {
    var results = str ? filesName.filter(createStateFilter(str)) : filesName;
    return results
}
filesNamede = []
for(let i=0;i<filesName.length; i++){
    filesNamede[i]=decodeURI(filesName[i])
}
// console.log(querystr("A"));
module.exports.querystr=querystr
module.exports.filesNamede=filesNamede
