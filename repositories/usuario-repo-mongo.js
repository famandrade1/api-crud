import usuarioModel from '../model/usuario-model.js';

class UsuarioRepositoryMongo{
    constructor(){
        this.model = usuarioModel;        
    }

    adcionar(usuario){
        const promise = this.model.create(usuario);
        return promise;
    }

    alterar(usuario){       
        const query = this.model.updateOne({email: usuario.email},usuario);
        const promise = query.exec();
        return promise;
    }

    excluir(email){
        const query = this.model.deleteOne({email: email});
        const promise = query.lean().exec();
        return promise; 
    }

    buscarTodos(){
        const query = this.model.find({});
        const promise = query.lean().exec();
        return promise;        
    }
}
export default UsuarioRepositoryMongo;
