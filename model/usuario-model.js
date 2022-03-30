import mongoose from 'mongoose';
import Usuario from '../domain/usuario-domain.js';

const UsuarioSchema = mongoose.Schema(
    {
        email: String, 
        nome:String, 
        senha:String, 
        dataCadastro:mongoose.Schema.Types.Mixed,
    }
);
UsuarioSchema.loadClass(Usuario);
export default mongoose.model('Usuario',UsuarioSchema);
