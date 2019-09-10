import User from '../Model/User';
import AppService from './AppService';
import AppResponse from '../Model/AppResponse';


export default class UserService extends AppService{

    async getListUserService(data: Object){
        let result: AppResponse;
        await this.getListDocumentFromCollection('user' , data)
        .then(function(listUser: Array<User>){
            result = AppResponse.getSuccessResponse(listUser);
        })
        .catch(function(err){
            result = AppResponse.getFailedResponse(err);
        });
        return result;
    }

}