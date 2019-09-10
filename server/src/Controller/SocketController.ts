import * as socket_module from 'socket.io';

export default class SocketController{

    private io: socket_module.Server;
    constructor(io: socket_module.Server){
        this.io = io;
    }

    startSocketThread(): void{
        this.io.on('connection', function(socket){
            console.log('user' + socket.id + ' connected');
        });
    }
}