const  express = require('express');
const app = express()
const endPoint = require('./routes/api')


app.use(express.json()); //Json isteklerine cevap verir. Object döndürür
app.use('/',endPoint); 


app.listen(3000,()=>{ //Bu porttan çalışacak
    console.log('Server is running at the moment...'); 
})



