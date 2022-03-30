import Usuario from '../domain/usuario-domain.js';
import UsuarioService from '../services/usuario-service.js';

class UsuarioController {
    constructor() {
        this.usuarioService = new UsuarioService();
        this.dataCadastro = { time: Date.now() };
    }

    async adcionar(req, res) {
        let usuario = new Usuario(req.body.email, req.body.nome, req.body.senha, this.dataCadastro);
        const response = await this.usuarioService.adcionar(usuario);
        res.json(response);
    }

    async alterar(req, res) {
        const response = await this.usuarioService.alterar(req.body);
        res.json(response);
    }

    async excluir(req, res) {
        const response = await this.usuarioService.excluir(req.body.email);
        res.json(response);
    }

    async buscarTodos(req, res) {
        const Usuarios = await this.usuarioService.buscarTodos();
        res.json(Usuarios);
    }
}
export default UsuarioController;