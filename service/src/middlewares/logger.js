export default (request, response, next) => {
    const date = new Date()
    console.log(`access date | time : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`)
    console.log(`client access in the server by path : '${request.url}' and used method : ${request.method}`)
    next()
}