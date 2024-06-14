const {content , cards , comments} = require('./content-bbdd')


const getContent = ( req , res , next)=>{
    try{
        res.status(200).json(content)
    } catch (error){
        next({statusText : error.message})
    }
}
const getCards = ( req , res , next)=>{
    try{
        res.status(200).json(cards)
    } catch (error){
        next({statusText : error.message})
    }
}
const getComments = ( req , res , next)=>{
    try{
        res.status(200).json(comments)
    } catch (error){
        next({statusText: error.message})
    }
}

module.exports = {
    getContent,
    getCards,
    getComments
}