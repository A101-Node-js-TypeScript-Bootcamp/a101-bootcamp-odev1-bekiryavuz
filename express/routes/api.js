const express = require('express');
let router = express.Router(); //Yönlendiriciyi modül olarak oluşturduk

const userEndpoint = require('./user/user')

//router.use kullanımı app.use() a benzer. Ara katman işlevini yerine getirir

router.use('/',userEndpoint)
router.use('/fetch',userEndpoint)
router.use('/add',userEndpoint)
router.use('/put',userEndpoint)
router.use('/delete',userEndpoint)


module.exports = router;



