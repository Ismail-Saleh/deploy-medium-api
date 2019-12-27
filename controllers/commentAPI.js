const models= require('../models')
const comments  = models.comment
const user  = models.user

exports.index = (req, res) => {
comments.findAll().then(comment =>res.send(comment))
}

exports.show = (req, res) => {
const id = req.params.id
const index = id - 1    
res.send(homeBE[index])
}   

exports.store = (req, res) => {
comments.create(req.body).then(comments=>{
    res.send({
        message :'success',
        comments
    })
})
}

exports.update = (req, res) => {
const id = req.params.id
const index = id - 1 
const data = req.body    
homeBE[index] = {...homeBE[index], ...data}
res.send(homeBE[index])
}

exports.delete = (req, res) => {
const id = req.params.id
const index = id - 1        
todos.splice(index, 1)
res.send(homeBE)
}