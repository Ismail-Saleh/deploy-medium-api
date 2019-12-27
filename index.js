
const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000


app.use(bodyParser.json())
app.use(cors())
//controllers
const CategoryController   = require('./controllers/categoriesAPI')
const ArticleController = require('./controllers/articlesAPI')
const UserController    = require('./controllers/userAPI')
const PopularController = require('./controllers/popularAPI') 
const CommentController = require('./controllers/commentAPI')
const JWTController     = require('./controllers/auth')
const {authenticated}   = require('./middleware/middleware')
const registerController= require('./controllers/register')
app.group("/api/v1", (router) => {

    //CATEGORIES API
    router.get('/category' ,CategoryController.index)    
    router.get('/category/:id', CategoryController.show)    
    router.post('/category', authenticated,CategoryController.store)    
    router.patch('/category/:id', CategoryController.update)    
    router.delete('/category/:id', CategoryController.delete)
    router.get('/category/:id/article', CategoryController.artikel)    

    //ARTICLES API
    router.get('/articles', ArticleController.index) 
    router.get('/article/:id', ArticleController.show)  
    router.post('/article', ArticleController.store)

    //COMENT API
    router.get('/comments', CommentController.index)
    router.post('/comment', CommentController.store)


    //POPULAR API

    router.get('/populars', PopularController.index) 
    router.get('/popular/:id', PopularController.show)  
    router.post('/popular', PopularController.store)
    router.patch('/popular/:id', PopularController.update)    
    router.delete('/popular/:id', PopularController.delete)

    //CATEGORY DETAIL
    router.get('/articles', ArticleController.index) 

    // USER API
    router.get('/users', UserController.index) 
    router.post('/user', UserController.store) 
    router.get('/user/:id', UserController.show)  
    
    
    //REGISTER API

    router.post('/register', registerController.store)

    //LOGIN API
    router.post('/login',JWTController.login)

    
})




app.listen(port, () => console.log(`Listening on port ${port}!`))
