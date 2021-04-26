const express = require('express');
const router = express.Router();
const favoritosService = require('../controllers/favoritosService') //Cambiar

/*const jwt = require('jsonwebtoken')
const configuration = require('../ConfigServer')

router.use('/', (req, res, next) => {
    //Paso 1.
    const token =req.headers['authorization']
    if (!token){
        next()
        req.user = null
        return
    }
    jwt.verify(token,configuration.jwt.secret,(err, user)=>{
        if (err)
            req.user = null
        else
            req.user = user
        next()
    })
})
*/
router.get('/getFavoritos',favoritosService.getFavoritos);
router.delete('/DeleteFav/:idFavoritos', favoritosService.DeleteFav);
module.exports = router;
