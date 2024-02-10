const pool = require('../config/db')

const getPosts = async () => {
    const {rows} = await pool.query("select * from posts")
    console.log(rows)
    return rows
}

const sendPosts = async (titulo, img, descripcion) => {
    const {rows} = await pool.query("insert into posts (titulo, img, descripcion) values ($1,$2,$3)",[titulo, img, descripcion])

    return rows
}


const deletePosts = async (id) => {
    try {
        const {rows} = await pool.query("delete from posts where id = $1", [id])
        console.log(rows)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPosts,
    sendPosts,
    deletePosts
}