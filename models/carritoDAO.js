const bd = require ('../configMysql')
module.exports ={
    getCarrito :(callback)=>{
        let sql='select products.*, idCarrito, carrito.cantidad from products join \n' +
            'carrito on products.idProducts = carrito.idProduct\n' +
            'left join user on user.idUser = carrito.idUser \n'
        bd.query(sql, (err,data )=>{
            if (err) throw err

            if (data.length>0)
                callback(data)

            else
                callback(null)
        })
    },

    deleteCarrito : (idFavorito, callback)=>{
        let sql ='DELETE FROM carrito WHERE idCarrito = ?'
        bd.query(sql,idFavorito,(err,data)=>{
            if(err)
                return callback(null)
            else
                callback(data)
        })
    },
    insertCarrito : (carrito, callback) => {
        let sql = 'INSERT INTO carrito SET ?'
        bd.query(sql,carrito, (err, data)=> {
            if (err)
                return callback(null)
            else
                return callback (data)
        })
    }
}
