const rolDAO = require('../models/rolDAO')
const bcrypt = require('bcrypt')
const jwt = require('../utils/GenerateJWT')

const getRoles = (req, res) =>{
    rolDAO.roles(data =>{
        try {
            if (!data) throw new Err("no hay roles")
            res.send({
                status: true,
                message: 'Consulta exitosa',
                data: data})
        }
        catch(Err) {
            res.send({
                status: false, message: 'error' })
        }
    })
}