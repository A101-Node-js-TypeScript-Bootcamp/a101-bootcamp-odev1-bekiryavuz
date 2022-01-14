const http = require('http')


const app = http.createServer((req,res)=>{
    const url = req.url; //gelen url yi aldık
    
    if(url === '/'){
        res.write("<html> <head>Server Response</head><body><h1> <p>Main Page</p></h1></body></html>");
    }
    else if(url === '/add'){
        res.write("<html> <head>Server Response</head><body><h1> <p>Add Page</p></h1></body></html>");
    }
    else if(url === '/test'){
        res.write("<html> <head>Server Response</head><body><h1> <p>Test Page</p></h1></body></html>");
    }
    else{
        res.write("<html> <head>Server Response</head><body><h1> <p>Main Page</p></h1></body></html>");
    }


    res.end(); //Response u sonlandırır
});


const port = 3000; //Bu porttan çalışacak


app.listen(port,()=>{
    console.log('Server is running at the moment...'); 
})