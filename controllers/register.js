const models = require('../models');
const register = models.user;


exports.store = (req,res)=>{
    register.create(req.body).then(user=>{
        
        res.send({
            message:"berhasil",
            user
        })

    })
}