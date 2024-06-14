const express = require('express')
const { getContent, getCards, getComments } = require('./controllers')
const router = express.Router()

router.route('/content')
    .get(getContent)

router.route('/cards')
    .get(getCards)
    
router.route('/comments')
    .get(getComments)

router.all( '*' , (req , res , next)=>{
    const err = new Error()
    err.status = 404
    err.statusText = 'Endpoint not found'
    next(err)
})
router.use((err , req , res , next)=>{
    let {statusText , status} = err
    status = status || 500
    statusText = statusText || '500 Server error'
    res.status(status).json({status , statusText})
})

module.exports = {
    router
}