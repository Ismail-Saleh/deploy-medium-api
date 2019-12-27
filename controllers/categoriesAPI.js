const models = require('../models')
const category = models.categories
const articles = models.articles

exports.index = (req, res) => {
    category.findAll().then(categories => res.send(categories))
}

exports.show = (req, res) => {
    category.findOne({
    
        where: { id: req.params.id },
        include: [
                    {
                        model: articles,
                        as:'articles'
                    }
                 ]

    }).then(articles => res.send(articles))
    
    .catch(err => res.send(err))
}

exports.artikel = (req, res) => {
    articles.findAll({
    
        where: { category_id: req.params.id },

    }).then(articles => res.send(articles))
    
    .catch(err => res.send(err))
}


exports.store = (req, res) => {
    category.create(req.body).then(categories => {
        res.send({
            message: 'success',
            categories
        })
    })
}

exports.update = (req, res) => {
    Todo.update(
        req.body, {
            where: { id: req.params.id }
        }
    ).then(Todo => {
        res.send({ message: 'success', Todo })
    })
}

exports.delete = (req, res) => {
    Todo.destroy({
        where: { id: req.params.id }
    }).then(Todo => {
        res.send({
            message: "sukses", Todo
        })
    })
}