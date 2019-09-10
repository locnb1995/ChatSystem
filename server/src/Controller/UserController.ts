import * as express_module from "express";
import UserService from '../Service/UserService';
import RoomService from '../Service/RoomService';
import AppResponse from "../Model/AppResponse";

export default class UserController{

    private app: express_module.Express;
    private userService: UserService;
    private roomService: RoomService;
    constructor(app: express_module.Express){
        this.app = app;
        this.userService = new UserService();
        this.roomService = new RoomService();
    }

    startUserThread(): void{
        this.getListUser();
        this.getListRoom();
        this.checkLogin();
    }

    getListUser(userService = this.userService): void{
        this.app.get('/getListUser', function(req, res){
            userService.getListUserService({})
            .then(function(response: AppResponse){
                res.send(response);
            })
            .catch(function(err: AppResponse){
                res.send(err);
            });
        });
    }

    checkLogin(userService = this.userService): void{
        this.app.post('/checkLogin', function(req, res){
            userService.getListUserService({username : req.body.username , password : req.body.password})
            .then(function(response: AppResponse){
                if(response.result.length !== 0){
                    res.send(response);
                }else{
                    res.send(AppResponse.getFailedResponse([]));
                }
            })
            .catch(function(err: AppResponse){
                res.send(err);
            });
        });
    }

    getListRoom(roomService = this.roomService): void{
        this.app.get('/getListRoom', function(req, res){
            roomService.getListRoomService({})
            .then(function(response: AppResponse){
                res.send(response);
            })
            .catch(function(err: AppResponse){
                res.send(err);
            });
        });
    }
}