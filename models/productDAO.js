const bd = require ('../configMysql')
module.exports ={
    getAllproducts :(callback)=>{
        let sql='SELECT * FROM products'
        bd.query(sql, (err,data )=>{
        if (err) throw err

        if (data.length>0)
            callback(data)

        else
            callback(null)
    })
},

     buscarProducto : ( idProduct, callback)=>{
       let sql='SELECT * FROM products WHERE idProducts = ?'
       bd.query(sql, idProduct, (err,data)=>{
           if(err) throw err
           if(data !=null)
                 callback(data[0])
           else
               callback(null)
           })
},
     updateproduct : (product, idProduct, callback)=>{
        let sql= 'UPDATE products SET ? WHERE idProducts =?'
         bd.query(sql,[product, idProduct], (err,data)=>{
             if(err)
                 return callback(null)
             else
                 callback(data)
             }
         )
     },
    delateProduct: (idProduct, callback)=>{
        let sql ='DELETE FROM products WHERE idProduct = ?'
        bd.query(sql,idProduct,(err,data)=>{
            if(err)
                return callback(null)
            else
                callback(data)
        })
    },


  }
