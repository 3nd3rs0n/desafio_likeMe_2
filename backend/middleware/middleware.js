const pool = require('../config/db')

const validarPut = async (req, res, next) => {
    const {id} = req.params;
    try {
        if (id) {
            const result = await pool.query('select * from posts where id = $1', [id])
            const post = result.rows[0]
            if (!post) {
                return res.status (400).json({
                    status: 'Bad Request',
                    msg: 'el ID no existe'
                })
           
            } else {
                req.data = {
                    postExist :true,
                    post,
                }
                next()
            }
        } else {
            res.status(400).send({
                status: 'Bad Request',
                status: 'el ID es requerido'
            })
        }
      
    } catch (error) {
        next(error)
        
    }
}

module.exports = {
    validarPut
}