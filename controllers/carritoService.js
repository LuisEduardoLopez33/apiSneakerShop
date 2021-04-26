const carritoDAO = require('../models/carritoDAO')

const getCarrito = (req, res)=>{
    carritoDAO.getCarrito((data)=>{
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

const DeleteCarrito = (req, res)=>{
    carritoDAO.deleteCarrito(req.params.idCarrito, data =>{
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

const Insertar = (req, res) =>{
    const carrito = {

        idUser:req.body.idUser,
        idProduct:req.body.idProduct,
        cantidad:req.body.cantidad,

    }
    carritoDAO.insertCarrito(carrito, (data) => {
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'se agrego'
            })
        }
        else{

            res.send({
                status: false,
                message: 'Ha ocurrido un error'
            })
        }
    })
}


module.exports={
    getCarrito,
    DeleteCarrito,
    Insertar
}