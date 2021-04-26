const productDAO= require('../models/productDAO')

const getAllProducts = (req,res) => {
    productDAO.getAllproducts((data) => {

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

const buscar = (req, res)=> {
    productDAO.buscarProducto(req.params.idProduct, data=>{
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
    }  )
}


module.exports = {
    getAllProducts,
    buscar
}
