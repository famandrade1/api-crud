import mongoose from 'mongoose';

class ManagerDB{

    static async connect(){
        await mongoose.connect(process.env.MongoDBConecxionKey, {
            useNewUrlParser:true, useUnifiedTopology:true
        })
        .catch((err)=>{
            console.error.bind(console, 'erro de conexão:'+ err);
        });
        console.log(`Conectado ao Mongodb em ${process.env.MongoDBConnection}`);
    }
    static async close(){
        await mongoose.connection.close().catch(err=>{
            console.log(`Erro ao fechar o banco de dados ${err}`);
        });
        console.log('Banco de dados fechado com sucesso!')
    }

}

export default ManagerDB