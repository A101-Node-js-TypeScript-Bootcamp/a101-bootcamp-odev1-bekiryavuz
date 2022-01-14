const express = require('express');
let router = express.Router();
let userController = require('../../controllers/User')

//GET yöntemi sayfanın çağrılması içindir
//POST yönetimi insert yani verilerin girişi işlemini yapar
//PUT yöntemi varolan verileri günceller
//DELETE yöntemi kayıtlı verilerin silinmesini sağlar

router.get('/',userController.main);
router.get('/fetchUser',userController.fetchUser);
router.get('/add',userController.add);
router.get('/put',userController.put);
router.get('/delete',userController.delete);

router.post('/', userController.add)
router.put('/', userController.put)
router.delete('/', userController.delete)

module.exports = router;


