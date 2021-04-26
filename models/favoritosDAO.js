const bd = require ('../configMysql')
module.exports ={
    getFavoritos :(callback)=>{
        let sql='SELECT products.*, idFavoritos FROM products join \n' +
            'favoritos ON products.idProducts = favoritos.idProduct\n' +
            'LEFT JOIN user ON user.idUser = favoritos.idUser'
        bd.query(sql, (err,data )=>{
            if (err) throw err

            if (data.length>0)
                callback(data)

            else
                callback(null)
        })
    },

    deleteFavorito : (idFavorito, callback)=>{
        let sql ='DELETE FROM favoritos WHERE idFavoritos = ?'
        bd.query(sql,idFavorito,(err,data)=>{
            if(err)
                return callback(null)
            else
                callback(data)
        })
    }

}
