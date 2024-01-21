const mangosse = require (mangosse);
const userSchema = mangosse.Schema({

name :{
    type:String,
    required:true,

},
email:{


type:String,
required:true,

},

password:{ type:
String,
required:true,
}}
);
module.exports = mangosse.modul ("User",userSchema);


