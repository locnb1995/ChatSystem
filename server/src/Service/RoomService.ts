import AppService from './AppService';
import Room from '../Model/Room';
import AppResponse from '../Model/AppResponse';

export default class RoomService extends AppService{

    async getListRoomService(data: Object){
        let result: AppResponse;
        await this.getListDocumentFromCollection('room' , data)
        .then(function(listRoom: Array<Room>){
            result = AppResponse.getSuccessResponse(listRoom);
        })
        .catch(function(err){
            result = AppResponse.getFailedResponse(err);
        });
        return result;
    }

}