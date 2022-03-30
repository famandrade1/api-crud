//const UsuarioRepoArray=require('../repositories/usuario-repo-array')
import UsuarioRepoMongo from'../repositories/usuario-repo-mongo.js';

class UsuarioService{
    constructor(){
        return this.UsuarioRepository = new UsuarioRepoMongo();
    }

    adcionar(usuario){
        return this.UsuarioRepository.adcionar(usuario);
    }

    alterar(usuario){
        return this.UsuarioRepository.alterar(usuario);
    }

    excluir(email){
        return this.UsuarioRepository.excluir(email);
    }

    buscarTodos(){                     
        return this.UsuarioRepository.buscarTodos();
    }
}
export default UsuarioService;