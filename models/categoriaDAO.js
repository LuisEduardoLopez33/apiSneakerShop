const bd = require ('../configMysql')

module.exports ={
    getAllcategorias :(callback)=>{
        let sql='SELECT * FROM categorias'
        bd.query(sql, (err,data )=>{
            if (err) throw err

            if (data.length>0)
                callback(data)

            else
                callback(null)
        })
    }

}