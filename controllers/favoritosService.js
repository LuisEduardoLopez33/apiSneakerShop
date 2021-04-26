const favoritosDAO = require('../models/favoritosDAO')

const getFavoritos = (req, res)=>{
    favoritosDAO.getFavoritos((data)=>{
        if (data != null) {

            res.send({
                status: true,
                data: data
            })
        } else {
            res.send({
                status: false,
                message: 'Catálogo vacío'
            })
        }
    })

}

const DeleteFav = (req, res)=>{
    favoritosDAO.deleteFavorito(req.params.idFavoritos, data =>{
        try {
            if (!data) throw new Err("Ocurrio un error")
            res.send({
                status: true, message: 'eliminado correctamente' })
        }
        catch(Err) {
            res.send({
                status: false, message: 'ocurrio un error' })
        }
    })
}


module.exports={
    getFavoritos,
    DeleteFav
}