import { Router } from 'express';
import Register from './Register'

export default class Routes {
    public routes;

    constructor() {
        this.routes = Router()
        this.MountRoutes()
    }

    private MountRoutes() {
        this.routes.use('/register', new Register().routes)

        this.routes.get('/login', (req, res) => {
            res.json({
                message: 'Login page here!'
            })
        })
    }
}
