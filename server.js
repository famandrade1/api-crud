import express from 'express';
//import RequestTime from './request-time.js';

const port = process.env.PPORT || 3000;
//import path from 'path';
import usuarioRotas from './rotas/usuario-rotas.js';


class Server {
    constructor() {
        this.app = express();
    }
    start() {
        //console.log(process.env);
        this.app.use(express.json());
        //this.app.use(express.static(path.join(__dirname, 'publico')));
        this.app.use(usuarioRotas);
        this.app.listen(port, () => console.log(`Servidor escutando em ${process.env.URL_SERVER}${process.env.PORT}`));
    }
}

export default Server