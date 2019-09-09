import * as express from "express";
import * as socket from 'socket.io';
import * as http from 'http';
export default class Server{

    private app: express.Application;
    private http: http.Server;
    private io: socket.Server;
    private port: Number;

    constructor(){
        this.app = express();
        this.http = http.createServer(this.app);
        this.io = socket(this.http);
        this.port = Number(process.env.PORT) || 3300;
    }

    start(): void{

        this.app.listen(this.port, () => console.log('Server listening at port : ' + this.port));

        this.app.get('/', function(req, res){
            res.send('<h1>Hello world</h1>');
        });

        this.io.on('connection', function(socket : socket.Socket){
            console.log('user' + socket.id + ' connected');
        });
    }
}