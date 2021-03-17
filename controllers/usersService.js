const userDAO = require('../models/userDAO')
const bcrypt = require('bcrypt')
const jwt = require('../utils/GenerateJWT')

const usernameValidate = (req, res) => {
    userDAO.findByUsername(req.params.username, data =>{
        try {
            if (!data) throw new Err("Usuario disponible")
            res.send({
                status: true, message: 'Usuario ocupado' })
        }
        catch(Err) {
            res.send({
                status: false, message: 'Usuario disponible' })
        }
    })
}

const signup = (req, res) =>{
    const user = {

        nombre:req.body.nombre,
        apellidoPaterno:req.body.apellidoPaterno,
        username:req.body.username,
        password:bcrypt.hashSync (req.body.password,10)
    }
    userDAO.insertUser(user, (data) => {
        if(data && data.affectedRows === 1){
            res.send({
                status: true,
                message: 'Usuario creado exitosamente'
            })
        }
        else{

            res.send({
                status: false,
                message: 'Ha ocurrido un error al crear la cuenta'
            })
        }
    })
}

const login = (req,res) => {
    let username = req.body.username
    let password = req.body.password
    userDAO.findByUsername(username, (data) => {
        if (data) {
            if (bcrypt.compareSync(password, data.password)){
                res.send({
                    status: true,
                    message: 'Contraseña correcta',
                    token: jwt.generateToken(data)
                })
            } else {
                res.send({
                    status: false,
                    message: 'Contraseña incorrecta'
                })
            }
        } else {
            res.send({
                status: false,
                message: 'La cuenta de usuario no existe'
            })
        }
    })

}



module.exports = {
    usernameValidate,
    login,
    signup

}