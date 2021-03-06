
import express from 'express';
import UsuarioController from '../controllers/usuario-controller.js';

class UsuarioRoutes {

    constructor() {
        this.usuarioController = new UsuarioController();
        this.router = express.Router();
        this.loadRoutes();
    }

    loadRoutes() {
        this.router.get('/usuarios', this.usuarioController.buscarTodos.bind(this.usuarioController));
        this.router.post('/usuario', this.usuarioController.adcionar.bind(this.usuarioController));
        this.router.put('/usuario', this.usuarioController.alterar.bind(this.usuarioController));
        this.router.delete('/usuario', this.usuarioController.excluir.bind(this.usuarioController));
    }

}

export default new UsuarioRoutes().router;