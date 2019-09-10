import * as express_module from "express";
import * as socket_module from 'socket.io';
import * as http_module from 'http';
import Config from './Model/Config';
import UserController from './Controller/UserController';
import SocketController from './Controller/SocketController';

export default class Server{

    private app: express_module.Express;
    private http: http_module.Server;
    private io: socket_module.Server;
    private port: Number;
    private userController: UserController;
    private socketController: SocketController;

    constructor(){
        this.app = express_module();
        this.http = http_module.createServer(this.app);
        this.io = socket_module(this.http);
        this.port = Number(process.env.PORT) || 3300;
        this.userController = new UserController(this.app);
        this.socketController = new SocketController(this.io);
    }

    start(): void{

        Config.getConfigServer(this.app);

        this.http.listen(this.port, () => console.log('Server listening at port : ' + this.port)); //start Server

        this.userController.startUserThread();

        this.socketController.startSocketThread();

    }
}