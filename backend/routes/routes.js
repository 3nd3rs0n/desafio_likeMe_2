const express = require('express');
const router = express.Router();

const {validarPut} = require('../middleware/middleware');

const {updatePostController} = require('../controllers/controller');

const {getPosts, sendPosts,deletePosts} = require('../routes/consultas');



router.get('/posts', async (req, res) => {
    const results = await getPosts();
    res.json(results)
})

router.post('/posts', async (req, res) => {
    const {titulo, img, descripcion} = req.body;
    await sendPosts(titulo, img, descripcion);
    res.send('viaje agregado')
})



router.put ('/posts/like/:id', validarPut,updatePostController)



router.delete('/posts/:id', async (req, res) => {
    const {id} = req.params;
    await deletePosts(id);
    res.send('viaje eliminado')
})

module.exports = router;