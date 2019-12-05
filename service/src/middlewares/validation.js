export default (params, querySet = null, validate = {}) => {
    const {
        username,
        password
    } = params
    // does username exist 
    if (validate.authorization) {
        if (!authorize({ ...params }, querySet)) {
            return { status: false, message: 'Username or password incorrect please try again.' }
        }
    }
    return { status: true, message: 'OK' }
}

function authorize({ username, password }, querySet) {
    return (username === querySet.username && password === querySet.password) ? true : false
}

