import ManageDB from '../api-crud/db/managerdb.js';
import Server from './server.js';

class App {

    start() {
        ManageDB.connect();

        new Server().start();
    }

}

new App().start();

