const categoriaDAO = require('../models/categoriaDAO')

const getCategorias = (req, res)=>{
    categoriaDAO.getAllcategorias((data)=>{
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
module.exports={
    getCategorias
}