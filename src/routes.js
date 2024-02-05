import { Router } from "express"
const { request } = require("./app")

const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({message: "Olá Mundo"})
})

export default routes