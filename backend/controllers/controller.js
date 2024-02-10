const pool = require('../config/db')
const updatePostController = async (req, res,next) => {
    const {data}= req
    const {post,postExist} = data
   try {
    const titulo = req.body.titulo || post.titulo
    const img = req.body.img || post.img
    const descripcion = req.body.descripcion || post.descripcion
    const likes = 
    req.body.likes !== undefined && req.body.likes === true 
    ? Number(post.likes +1)
    : req.body.likes !== undefined && req.body.likes === false
    ? Number(post.likes - 1)
    : Number(post.likes);

    const values = [titulo,img,descripcion,likes, post.id]

    if(postExist){
        const postUpdate = await pool.query("update posts set titulo = $1, img = $2,descripcion = $3,likes = $4 where id = $5 returning *",values)
        const update = postUpdate.rows[0]
        if(post){
            res.status(200).json({
                status: 'success',
                msg: 'se actualizo ',
                post: update
            })
        }
        
    }
    
   } catch (error) {
    next(error)
    
   }
}

module.exports = {
    updatePostController
}