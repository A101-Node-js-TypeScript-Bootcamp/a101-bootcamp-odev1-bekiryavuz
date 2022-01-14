//Çağrılan modülün işlevini burada yazdık

exports.main = (req,res) => {
    console.log(req.path)
    let response = "<html> <head>Server Response</head><body><h1> <p>Main Page</p></h1></body></html>"
    res.send(response)
}
exports.fetchUser = (req,res) => {
    console.log(req.path)
    let response = "<html> <head>Server Response</head><body><h1> <p>Fetch User Page</p></h1></body></html>"
    res.send(response)
}
exports.add = (req,res) => {
    console.log(req.path)
    let response = "<html> <head>Server Response</head><body><h1> <p>Add Page</p></h1></body></html>"
    res.send(response)
}
exports.put = (req,res) => {
    console.log(req.path)
    let response = "<html> <head>Server Response</head><body><h1> <p>Put Page</p></h1></body></html>"
    res.send(response)
}
exports.delete = (req,res) => {
    console.log(req.path)
    let response = "<html> <head>Server Response</head><body><h1> <p>Delete Page</p></h1></body></html>"
    res.send(response)
}



