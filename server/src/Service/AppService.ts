import Config from '../Model/Config';
import * as mongodb from 'mongodb';

export default class AppService{
    
    private mongoClient = mongodb.MongoClient;

    checkConnect(mongoClient = this.mongoClient) : Promise<Object>{
        return new Promise(function(resolve , reject){
            mongoClient.connect(Config.Db_Url , { useNewUrlParser: true , useUnifiedTopology: true }, function(err, db){
                if(err) reject(err);
                let dbo = db.db(Config.Db_Name);
                resolve(dbo);
            });
        });
    }

    async getListDocumentFromCollection(db_collection: string, data: Object){
        let result;
        await this.checkConnect()
        .then(function(dbo: mongodb.Db){
            return dbo.collection(db_collection).find(data);
        })
        .then(function(response: mongodb.Cursor<any>){
            return response.toArray();
        })
        .then(function(listData){
            result = listData;
        })
        .catch(function(err){
            result = err;
        });
        return result;
    }

}