const models= require('../models')
const articles  = models.articles
const comment = models.comment
const user = models.user


exports.index = (req, res) => {
    articles.findAll({
        include :
    [
        {
            model : user,
            as : 'authorName'
        },
        {
            model : comment,
            as : 'userComment'
        },
    ]
    }).then(articles =>res.send(articles))
}

exports.show = (req, res) => {
const id = req.params.id
const index = id - 1    
res.send(todos[index])
}   

exports.store = (req, res) => {
user.create(req.body).then(user=>{
    res.send({
        message :'success',
        user
    })
})
}

exports.update = (req, res) => {
const id = req.params.id
const index = id - 1 
const data = req.body    
user[index] = {...user[index], ...data}
res.send(todos[user])
}

exports.delete = (req, res) => {
const id = req.params.id
const index = id - 1        
todos.splice(index, 1)
res.send(todos)
}