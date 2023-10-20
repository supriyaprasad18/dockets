const mongoose= require('mongoose');
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/docket')
.then(()=>{console.log('db connected')})
.catch((err)=>{console.log(err)});
const db= mongoose.connection;

db.on('error',console.error.bind(console,'error in connecting to mongodb'));

db.once('open',function(){
    console.log("connected to mongodb");
});

module.exports= db;