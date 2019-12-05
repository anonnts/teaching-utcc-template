import express from 'express'
import data from '../../data/user.js'
import validator from '../../middlewares/validation.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/login', ({ body }, response) => {
    const payload = validator(body.body, data, { authorization: true })
    const token = jwt.sign({ username: body.body.username, password: body.body.password }, 'shhhh', { expiresIn: 60 * 60 })
    response.status(200).send({
        ...payload,
        token: token,
        payload: payload.status ? { profile: { username: body.username } } : {}
    })
})

router.get('/get-data', ({ headers }, response) => {
    console.log('# get user data');
    try {
        const token = jwt.verify(headers.token, 'shhhh');
        response.setHeader('token', headers.token);
        response.setHeader('Content-Type', 'application/json');
        response.status(200);
        response.end(JSON.stringify({ status: true, message: 'OK', payload: { profile: data.info } }))
    } catch (error) {
        console.log(error)
        response.setHeader('Content-Type', 'application/json');
        response.status(403);
        response.end(JSON.stringify({ status: false, message: 'Invalid token', payload: {} }))
    }
})

export default router                                                                      