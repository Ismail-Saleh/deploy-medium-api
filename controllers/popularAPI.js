const models= require('../models')
const home  = models.articles
const user  = models.user

exports.index = (req, res) => {
home.findAll({
    include :
    [
        {
          model : user,
          as : 'users'
        },   
    ],
    order:
    [
        ['createdAt','DESC']
    ],
    limit:10 ,
    
}).then(articles =>res.send(articles))
}

exports.show = (req, res) => {
const id = req.params.id
const index = id - 1    
res.send(home[index])
}   

exports.store = (req, res) => {
home.create(req.body).then(home=>{
    res.send({
        message :'success',
        home
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