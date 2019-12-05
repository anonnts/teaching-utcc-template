import express from 'express'
import data from '../../data/user.js'
import validator from '../../middlewares/validation.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/get-list', ({ headers }, response) => {
    console.log('# login feature')
    try {
        const token = jwt.verify(headers.token, 'shhhh');
        response.setHeader('token', headers.token);
        response.setHeader('Content-Type', 'application/json');
        response.status(200);
        response.end(JSON.stringify({ status: true, message: 'OK', payload: { list: data.list } }))
    } catch (error) {
        console.log(error)
        response.setHeader('Content-Type', 'application/json');
        response.status(403);
        response.end(JSON.stringify({ status: false, message: 'Invalid token', payload: {  } }))
    }
})



export default router