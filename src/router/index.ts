import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.ts'

const config = {
    history: createWebHistory(),
    routes
}

export default createRouter(config)