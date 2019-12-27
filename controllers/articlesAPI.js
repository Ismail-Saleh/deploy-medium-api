const models= require('../models')
const home  = models.articles
const user  = models.user
const comment = models.comment
const categories =models.categories

exports.index = (req, res) => {
home.findAll({
    include :
    [
        {
            model : categories,
            as : 'categoriesId'
        }   
    ]
}).then(articles => res.send(articles))
}

exports.show = (req, res) => {

    home.findOne({where:{id:req.params.id},
    
    include :
    [
        {
            model : categories,
            as : 'categoriesId'
        },
        {
            model : comment,
            as : 'commentArticle'
        },
    ]
    }).then(articles =>res.send(articles)).catch(err=>res.send(err))

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