
class UsuarioRepoArray{

    constructor(){
        this.usuarios=[];
    }    

    adcionar(usuario){
        this.usuarios.push(usuario);
    }

    alterar(usuario){              
        this.usuarios.forEach((o)=> {
            if (o.email==usuario.email) {
                o.senha = usuario.senha ? usuario.senha : o.senha; 
                o.nome = usuario.nome ? usuario.nome : o.nome;
            }
        })
    }

    excluir(email){
        let i= this.usuarios.findIndex((o)=>o.email==email);
        if(i>=0){
            this.usuarios.splice(i,1);
        }
    }

    buscar(email){

    }

    buscarTodos(usuarios){
        var name = new UsuarioService();                
        return name.usuarios;
    }
}

module.exports=UsuarioRepoArray;